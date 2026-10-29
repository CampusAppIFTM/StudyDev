/**
 * src/hooks/useAutenticacao.js
 * ---------------------------------------------------------------------------
 * Hook centralizado de autenticação Firebase.
 *
 * REGRA DE OURO: este hook deve ser instanciado UMA ÚNICA VEZ no App.js.
 * As telas recebem `entrar`, `sair` e `erro` via props — nunca chamam
 * useAutenticacao() por conta própria, para evitar múltiplos listeners
 * de onAuthStateChanged rodando em paralelo.
 *
 * Para telas que precisam apenas do `sair()` (ex: PerfilScreen), importe
 * a função `sairDoApp` diretamente deste módulo.
 * ---------------------------------------------------------------------------
 */
import { useState, useEffect, useRef } from "react";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import {
  GoogleAuthProvider,
  signInWithCredential,
  signInAnonymously,
  linkWithCredential,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";

// E-mails com privilégio de administrador (sempre minúsculo)
const ADMIN_EMAILS = [
  "nicolas.bruno@estudante.iftm.edu.br",
  "nicolasbru124@gmail.com",
];

export function isAdminEmail(email) {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.trim().toLowerCase());
}

// Configuração do Google — executada uma única vez no carregamento do módulo.
GoogleSignin.configure({
  webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
});

/**
 * Converte códigos de erro técnicos em mensagens amigáveis em português.
 * Retorna `null` quando o erro é um cancelamento voluntário do usuário
 * (não faz sentido exibir mensagem nesse caso).
 */
function descreverErro(erro) {
  const code = erro?.code ?? "";

  // Cancelamento pelo usuário — não é erro
  if (
    code === statusCodes.SIGN_IN_CANCELLED ||
    code === "auth/popup-closed-by-user" ||
    code === "auth/cancelled-popup-request"
  ) {
    return null;
  }

  const mapa = {
    [statusCodes.IN_PROGRESS]:
      "Já existe um login em andamento. Aguarde.",
    [statusCodes.PLAY_SERVICES_NOT_AVAILABLE]:
      "Google Play Services indisponível. Atualize seu dispositivo.",
    "auth/credential-already-in-use":
      "Esta conta Google já está vinculada a outro usuário. Tente com outra conta.",
    "auth/email-already-in-use":
      "Este e-mail já está em uso por outra conta.",
    "auth/network-request-failed":
      "Sem conexão com a internet. Verifique sua rede e tente novamente.",
    "auth/admin-restricted-operation":
      "Não foi possível realizar o login. Verifique a configuração da autenticação e tente novamente.",
    "auth/operation-not-allowed":
      "Este método de login não está habilitado. Contate o suporte.",
    "auth/account-exists-with-different-credential":
      "Já existe uma conta com este e-mail usando outro método de login.",
    "auth/invalid-credential":
      "Credencial inválida. Tente novamente.",
    "auth/too-many-requests":
      "Muitas tentativas. Aguarde alguns minutos e tente novamente.",
    "auth/user-disabled":
      "Esta conta foi desativada. Contate o suporte.",
  };

  return mapa[code] || "Não deu pra entrar. Tenta de novo?";
}

/**
 * Valida se o e-mail pertence ao domínio institucional do IFTM.
 * Aceita @iftm.edu.br e subdomínios como @estudante.iftm.edu.br
 */
function emailInstitucionalValido(email) {
  if (!email) return false;
  const emailNormalizado = email.trim().toLowerCase();
  const partes = emailNormalizado.split("@");
  if (partes.length !== 2) return false;
  const dominio = partes[1];
  return dominio === "iftm.edu.br" || dominio.endsWith(".iftm.edu.br");
}

/**
 * Função de logout exportada separadamente para que telas como
 * PerfilScreen possam usá-la sem instanciar useAutenticacao().
 */
export async function sairDoApp() {
  try {
    await GoogleSignin.signOut();
  } catch (_) {}
  try {
    await signOut(auth);
  } catch (_) {}
}

export function useAutenticacao() {
  const [usuario, setUsuario] = useState(null);
  const [verificando, setVerificando] = useState(true);
  const [erro, setErro] = useState(null);

  // Evita tentar signInAnonymously mais de uma vez (previne loop).
  const tentouAnonimo = useRef(false);

  // Sinaliza que entrar() está fazendo signOut de domínio inválido.
  // Evita que o onAuthStateChanged interprete como logout real.
  const signOutInterno = useRef(false);

  useEffect(() => {
    const cancelarObservacao = onAuthStateChanged(auth, async (user) => {
      // Se o signOut foi disparado internamente (validação de domínio),
      // não devemos tratar como logout real.
      if (signOutInterno.current) {
        return;
      }

      if (user) {
        setUsuario(user);
        setVerificando(false);
        return;
      }

      // Sem usuário — tenta criar sessão anônima uma única vez.
      setUsuario(null);

      if (!tentouAnonimo.current) {
        tentouAnonimo.current = true;
        try {
          await signInAnonymously(auth);
          // O onAuthStateChanged será chamado novamente com o user anônimo.
          return;
        } catch (e) {
          // Se o provedor anônimo não estiver habilitado no Firebase Console,
          // simplesmente seguimos sem sessão anônima. O app continua funcional
          // — o login com Google usará signInWithCredential em vez de
          // linkWithCredential.
          if (__DEV__) console.warn("[AUTH] Sessão anônima indisponível:", e.code);
        }
      }

      setVerificando(false);
    });

    return cancelarObservacao;
  }, []);

  /**
   * Fluxo completo de entrada:
   *   1. Abre o seletor de contas Google
   *   2. Obtém idToken
   *   3. Se há sessão anônima, vincula com linkWithCredential
   *      Senão, faz signInWithCredential
   *   4. Valida domínio @iftm.edu.br
   *   5. Salva/atualiza documento em usuarios/{uid}
   */
  const entrar = async () => {
    setErro(null);

    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      const resposta = await GoogleSignin.signIn();

      // Versão 13+ da biblioteca: cancelamento resolve a promise
      if (resposta.type === "cancelled") {
        return;
      }

      const idToken = resposta.data?.idToken;
      if (!idToken) {
        throw new Error(
          "O Google não devolveu o idToken. Verifique o webClientId."
        );
      }

      const credential = GoogleAuthProvider.credential(idToken);
      let userCredential;

      // Vincula à sessão anônima quando ela existir
      if (auth.currentUser && auth.currentUser.isAnonymous) {
        try {
          userCredential = await linkWithCredential(
            auth.currentUser,
            credential
          );
        } catch (linkError) {
          if (
            linkError.code === "auth/credential-already-in-use" ||
            linkError.code === "auth/email-already-in-use"
          ) {
            // Conta Google já existe no Firebase — faz login normal
            userCredential = await signInWithCredential(auth, credential);
          } else {
            throw linkError;
          }
        }
      } else {
        userCredential = await signInWithCredential(auth, credential);
      }

      const { user } = userCredential;

      // ── Validação de domínio institucional ──
      if (!emailInstitucionalValido(user.email)) {
        // Marca que o signOut é interno para que o listener não interfira
        signOutInterno.current = true;

        try {
          await GoogleSignin.signOut();
        } catch (_) {}
        try {
          await signOut(auth);
        } catch (_) {}

        // Restaura a flag e limpa o estado do usuário
        signOutInterno.current = false;
        setUsuario(null);

        setErro(
          "Use uma conta institucional do IFTM (@iftm.edu.br) para acessar o StudyDev."
        );
        return;
      }

      // ── Firestore: salvar/atualizar dados do usuário ──
      try {
        const userDocRef = doc(db, "usuarios", user.uid);
        const userDoc = await getDoc(userDocRef);

        // Define role: ADMIN para e-mails da lista, caso contrário preserva ADMIN se já existir
        const emailLower = user.email.trim().toLowerCase();
        let role = "STUDENT";
        if (isAdminEmail(emailLower)) {
          role = "ADMIN";
        } else if (userDoc.exists() && userDoc.data().role === "ADMIN") {
          role = "ADMIN";
        }

        const dadosUsuario = {
          uid: user.uid,
          nome: user.displayName,
          email: user.email,
          foto: user.photoURL,
          ultimoAcesso: serverTimestamp(),
          provedor: "google",
          role,
        };

        if (!userDoc.exists()) {
          dadosUsuario.criadoEm = serverTimestamp();
        }

        await setDoc(userDocRef, dadosUsuario, { merge: true });
      } catch (firestoreError) {
        // Não impede o login, apenas loga o erro
        if (__DEV__) console.warn("[AUTH] Erro ao salvar dados no Firestore:", firestoreError);
      }
    } catch (e) {
      const mensagem = descreverErro(e);
      if (mensagem) {
        setErro(mensagem);
      }
    }
  };

  const sair = async () => {
    setErro(null);
    tentouAnonimo.current = false;
    await sairDoApp();
  };

  return {
    usuario,
    verificando,
    entrar,
    sair,
    erro,
  };
}
