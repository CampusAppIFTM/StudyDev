import React, { useState, useCallback } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput, ActivityIndicator, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { updateProfile } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { sairDoApp, isAdminEmail } from "../hooks/useAutenticacao";
import { BotaoPrimario } from "../components/BotaoPrimario";
import { Card } from "../components/Card";
import { useUser } from "../contexts/UserContext";
import { roadmaps } from "../data/studyDevData";
import { obterProgressoGeral, obterTodosProgressos } from "../services/progresso";

const PerfilScreen = ({ usuario: usuarioProp }) => {
  const usuarioContext = useUser();
  const usuario = usuarioProp || usuarioContext;

  const [editando, setEditando] = useState(false);
  const [novoNome, setNovoNome] = useState(usuario?.displayName || "");
  const [salvandoNome, setSalvandoNome] = useState(false);
  const [progressoGeral, setProgressoGeral] = useState(null);
  const [progressos, setProgressos] = useState({});
  const [carregandoProg, setCarregandoProg] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const formatarData = (dataStr) => {
    if (!dataStr) return "Desconhecido";
    const data = new Date(dataStr);
    if (isNaN(data.getTime())) return "Desconhecido";
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    const hora = String(data.getHours()).padStart(2, "0");
    const min = String(data.getMinutes()).padStart(2, "0");
    return `${dia}/${mes}/${ano} às ${hora}:${min}`;
  };

  const carregar = useCallback(async () => {
    setCarregandoProg(true);
    try {
      const uid = usuario?.uid || null;
      const geral = await obterProgressoGeral(uid, roadmaps);
      const todos = await obterTodosProgressos(uid, roadmaps);
      setProgressoGeral(geral);
      setProgressos(todos);
      // Verifica se é admin (via e-mail ou Firestore role)
      if (usuario?.email && isAdminEmail(usuario.email)) {
        setIsAdmin(true);
      } else if (uid) {
        try {
          const snap = await getDoc(doc(db, "usuarios", uid));
          if (snap.exists() && snap.data().role === "ADMIN") setIsAdmin(true);
          else setIsAdmin(false);
        } catch {
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
    } catch {}
    setCarregandoProg(false);
  }, [usuario?.uid, usuario?.email]);

  useFocusEffect(
    useCallback(() => {
      carregar();
    }, [carregar])
  );

  const handleSalvarNome = async () => {
    const nomeTrim = novoNome.trim();
    if (!nomeTrim || nomeTrim === usuario.displayName) {
      setEditando(false);
      return;
    }
    setSalvandoNome(true);
    try {
      await updateProfile(usuario, { displayName: nomeTrim });
      Alert.alert("Pronto!", "Seu nome foi atualizado.");
      setEditando(false);
    } catch (e) {
      Alert.alert("Ops", e?.message || "Não deu pra atualizar seu nome. Tenta de novo.");
    } finally {
      setSalvandoNome(false);
    }
  };

  if (!usuario) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator color="#58a6ff" />
        <Text style={{ color: "#8b949e", marginTop: 8 }}>Carregando seu perfil...</Text>
      </View>
    );
  }

  const ultimoAcesso = formatarData(usuario.metadata?.lastSignInTime);
  const trilhasIniciadas = Object.values(progressos).filter((p) => p?.concluidos?.length > 0);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        {usuario.photoURL ? (
          <Image style={styles.foto} source={{ uri: usuario.photoURL }} accessibilityLabel="Foto de perfil" />
        ) : (
          <View style={[styles.foto, styles.fotoVazia]}>
            <Text style={styles.inicial}>{(usuario.displayName ?? "?").charAt(0).toUpperCase()}</Text>
          </View>
        )}
        {!editando ? (
          <>
            <Text style={styles.nome}>{usuario.displayName ?? "Estudante"}</Text>
            <Text style={styles.email}>{usuario.email}</Text>
            {isAdmin ? (
              <View style={styles.adminBadge}>
                <Ionicons name="shield-checkmark" size={14} color="#fff" />
                <Text style={styles.adminBadgeText}>Administrador</Text>
              </View>
            ) : (
              <View style={styles.studentBadge}>
                <Text style={styles.studentBadgeText}>Estudante</Text>
              </View>
            )}
            <TouchableOpacity style={styles.editLink} onPress={() => { setNovoNome(usuario.displayName || ""); setEditando(true); }} accessibilityLabel="Editar nome">
              <Ionicons name="pencil-outline" size={14} color="#58a6ff" />
              <Text style={styles.editLinkText}>Editar nome</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View style={styles.editBox}>
            <TextInput
              style={styles.input}
              value={novoNome}
              onChangeText={setNovoNome}
              placeholder="Seu nome"
              placeholderTextColor="#484f58"
              autoCapitalize="words"
              accessibilityLabel="Campo nome"
            />
            <View style={styles.editActions}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setEditando(false)} disabled={salvandoNome}>
                <Text style={styles.cancelText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.saveButton, salvandoNome && { opacity: 0.6 }]} onPress={handleSalvarNome} disabled={salvandoNome}>
                {salvandoNome ? <ActivityIndicator size="small" color="#fff" /> : <Text style={styles.saveText}>Salvar</Text>}
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>

      <Card style={styles.card}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Conta institucional</Text>
          <Text style={styles.infoValue}>IFTM • {usuario.email?.split("@")[1] || "—"}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Último acesso</Text>
          <Text style={styles.infoValue}>{ultimoAcesso}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>UID</Text>
          <Text style={styles.infoValueSmall} numberOfLines={1}>
            {usuario.uid}
          </Text>
        </View>
      </Card>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="analytics-outline" size={18} color="#58a6ff" />
          <Text style={styles.sectionTitle}>Seu progresso</Text>
        </View>
        {carregandoProg ? (
          <Card style={{ padding: 20, alignItems: "center" }}>
            <ActivityIndicator color="#58a6ff" />
          </Card>
        ) : progressoGeral && progressoGeral.trilhasIniciadas > 0 ? (
          <Card style={styles.progressCard}>
            <Text style={styles.progressPct}>{progressoGeral.porcentagemGeral}%</Text>
            <Text style={styles.progressSub}>média geral • {progressoGeral.trilhasIniciadas}/{progressoGeral.totalTrilhas} trilhas iniciadas</Text>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: `${progressoGeral.porcentagemGeral}%` }]} />
            </View>
            {progressoGeral.ultimaAtividade ? <Text style={styles.progressMeta}>Último: {progressoGeral.ultimaAtividade}</Text> : null}
            {progressoGeral.proximaAtividade ? <Text style={styles.progressMeta}>Próximo: {progressoGeral.proximaAtividade}</Text> : null}
          </Card>
        ) : (
          <Card style={styles.emptyProgress}>
            <Text style={styles.emptyTitle}>Ainda sem progresso</Text>
            <Text style={styles.emptyDesc}>Comece uma trilha e marque as aulas que já viu pra acompanhar por aqui.</Text>
          </Card>
        )}
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="trail-sign-outline" size={18} color="#3fb950" />
          <Text style={styles.sectionTitle}>Minhas trilhas</Text>
          <Text style={styles.sectionCount}>{trilhasIniciadas.length}</Text>
        </View>
        {trilhasIniciadas.length ? (
          <View style={{ gap: 10 }}>
            {trilhasIniciadas.map((p) => {
              const roadmap = roadmaps.find((r) => r.id === p.trilhaId) || { name: p.trilhaNome || p.trilhaId };
              return (
                <View key={p.trilhaId} style={styles.trilhaRow}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.trilhaName} numberOfLines={1}>
                      {roadmap.name}
                    </Text>
                    <Text style={styles.trilhaMeta}>
                      {p.concluidos.length} concluídos • {p.porcentagem}% • Próximo: {p.proximaAtividade || "—"}
                    </Text>
                  </View>
                  <View style={styles.trilhaPctBox}>
                    <Text style={styles.trilhaPct}>{p.porcentagem}%</Text>
                  </View>
                </View>
              );
            })}
          </View>
        ) : (
          <Card style={styles.emptyProgress}>
            <Text style={styles.emptyDesc}>Você ainda não começou nenhuma trilha. Que tal escolher uma?</Text>
          </Card>
        )}
      </View>

      <BotaoPrimario title="Sair da conta" onPress={sairDoApp} style={styles.logoutButton} />
      <Text style={styles.footNote}>Feito por estudantes, pra estudantes. Gratuito e sem enrolação.</Text>
    </ScrollView>
  );
};

export default PerfilScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0d1117" },
  content: { padding: 24, paddingBottom: 40 },
  header: { alignItems: "center", marginBottom: 24 },
  foto: { width: 110, height: 110, borderRadius: 55, marginBottom: 12, borderWidth: 3, borderColor: "#58a6ff" },
  fotoVazia: { backgroundColor: "#161b22", alignItems: "center", justifyContent: "center" },
  inicial: { fontSize: 44, color: "#e6edf3", fontWeight: "bold" },
  nome: { fontSize: 22, fontWeight: "700", color: "#e6edf3", marginBottom: 2, textAlign: "center" },
  email: { fontSize: 14, color: "#8b949e", textAlign: "center" },
  editLink: { flexDirection: "row", gap: 6, marginTop: 10, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, backgroundColor: "#1f6feb18", borderWidth: 1, borderColor: "#58a6ff22", alignItems: "center" },
  editLinkText: { color: "#58a6ff", fontSize: 12, fontWeight: "700" },
  adminBadge: { flexDirection: "row", gap: 6, marginTop: 8, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, backgroundColor: "#238636", borderWidth: 1, borderColor: "#2ea043", alignItems: "center" },
  adminBadgeText: { color: "#fff", fontSize: 12, fontWeight: "800", textTransform: "uppercase", letterSpacing: 0.5 },
  studentBadge: { marginTop: 8, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20, backgroundColor: "#21262d", borderWidth: 1, borderColor: "#30363d" },
  studentBadgeText: { color: "#8b949e", fontSize: 12, fontWeight: "600" },
  editBox: { width: "100%", marginTop: 12, gap: 10 },
  input: { backgroundColor: "#161b22", borderWidth: 1, borderColor: "#30363d", borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12, color: "#e6edf3", fontSize: 15 },
  editActions: { flexDirection: "row", gap: 10, justifyContent: "center" },
  cancelButton: { paddingHorizontal: 16, paddingVertical: 10, borderRadius: 10, backgroundColor: "#21262d", borderWidth: 1, borderColor: "#30363d" },
  cancelText: { color: "#e6edf3", fontWeight: "600" },
  saveButton: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10, backgroundColor: "#238636", borderWidth: 1, borderColor: "#2ea043", minWidth: 80, alignItems: "center" },
  saveText: { color: "#fff", fontWeight: "700" },
  card: { marginBottom: 20 },
  infoRow: { marginVertical: 6 },
  infoLabel: { fontSize: 13, color: "#8b949e", marginBottom: 3, fontWeight: "600", textTransform: "uppercase", letterSpacing: 0.3 },
  infoValue: { fontSize: 15, color: "#e6edf3", fontWeight: "500" },
  infoValueSmall: { fontSize: 11, color: "#484f58", fontFamily: "monospace" },
  divider: { height: 1, backgroundColor: "#21262d", marginVertical: 10 },
  logoutButton: { backgroundColor: "#f85149", marginTop: 8 },
  section: { marginBottom: 20 },
  sectionHeader: { flexDirection: "row", gap: 8, alignItems: "center", marginBottom: 10 },
  sectionTitle: { fontSize: 15, fontWeight: "700", color: "#e6edf3", flex: 1 },
  sectionCount: { backgroundColor: "#21262d", color: "#8b949e", fontSize: 12, fontWeight: "700", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20, borderWidth: 1, borderColor: "#30363d", overflow: "hidden" },
  progressCard: { alignItems: "center", padding: 16, gap: 6 },
  progressPct: { fontSize: 28, fontWeight: "800", color: "#3fb950" },
  progressSub: { fontSize: 12, color: "#8b949e", fontWeight: "600" },
  progressBarBg: { width: "100%", height: 8, backgroundColor: "#0d1117", borderRadius: 4, overflow: "hidden", borderWidth: 1, borderColor: "#21262d", marginTop: 4 },
  progressBarFill: { height: "100%", backgroundColor: "#3fb950" },
  progressMeta: { fontSize: 11, color: "#8b949e", marginTop: 2 },
  emptyProgress: { padding: 16, alignItems: "center", gap: 6 },
  emptyTitle: { fontSize: 14, fontWeight: "700", color: "#e6edf3" },
  emptyDesc: { fontSize: 12, color: "#8b949e", textAlign: "center", lineHeight: 18 },
  trilhaRow: { flexDirection: "row", gap: 12, backgroundColor: "#161b22", borderWidth: 1, borderColor: "#21262d", borderRadius: 12, padding: 14, alignItems: "center" },
  trilhaName: { fontSize: 13, fontWeight: "700", color: "#e6edf3" },
  trilhaMeta: { fontSize: 11, color: "#8b949e", marginTop: 3, lineHeight: 15 },
  trilhaPctBox: { backgroundColor: "#0d1117", borderWidth: 1, borderColor: "#21262d", paddingHorizontal: 10, paddingVertical: 6, borderRadius: 10 },
  trilhaPct: { color: "#3fb950", fontWeight: "800", fontSize: 13 },
  footNote: { textAlign: "center", color: "#484f58", fontSize: 11, marginTop: 16, lineHeight: 16 },
});
