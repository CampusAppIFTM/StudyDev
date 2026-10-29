/**
 * firebaseConfig.js
 * ---------------------------------------------------------------------------
 * Inicializa o Firebase e o serviço de autenticação.
 *
 * PONTO DE ATENÇÃO (o mais esquecido em React Native):
 * getAuth() guarda a sessão APENAS EM MEMÓRIA. Ao fechar e reabrir o app, o
 * usuário aparece deslogado. Para persistir a sessão no dispositivo é preciso
 * usar initializeAuth() informando explicitamente o AsyncStorage.
 *
 * Dependências:
 *   npx expo install firebase @react-native-async-storage/async-storage
 * ---------------------------------------------------------------------------
 */
import { initializeApp, getApp, getApps } from "firebase/app";
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

// Estes valores vêm do console do Firebase (Configurações do projeto > Seus apps).
// Não são segredos, mas mantê-los em variáveis de ambiente evita commitá-los
// por engano e facilita trocar de projeto (desenvolvimento / produção).
const firebaseConfig = {
  apiKey: "AIzaSyBdjCjYlZLVGnMEij1lKeX7G-j93EBD58c",
  authDomain: "studydeviftm.firebaseapp.com",
  projectId: "studydeviftm",
  storageBucket: "studydeviftm.firebasestorage.app",
  messagingSenderId: "3817085360",
  appId: "1:3817085360:web:989f49e99e4a62f813de75"
};

// Evita duplicate-app no Fast Refresh / HMR
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Auth com persistência correta por plataforma:
// - Native: AsyncStorage via getReactNativePersistence
// - Web: browserLocalPersistence (padrão do getAuth)
let auth;
if (Platform.OS === "web") {
  auth = getAuth(app);
} else {
  try {
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch (e) {
    // Já inicializado (ex: Fast Refresh) - reutiliza instância existente
    auth = getAuth(app);
  }
}

export { auth };

export const db = getFirestore(app);
