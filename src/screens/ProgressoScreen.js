import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { Card } from "../components/Card";
import { ProgressBar } from "../components/ProgressBar";
import { EmptyState } from "../components/EmptyState";
import { LoadingState } from "../components/LoadingState";
import { roadmaps } from "../data/studyDevData";
import { useUser } from "../contexts/UserContext";
import { obterProgressoGeral, obterTodosProgressos } from "../services/progresso";

export default function ProgressoScreen({ navigation }) {
  const usuario = useUser();
  const [geral, setGeral] = useState(null);
  const [todos, setTodos] = useState({});
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    const uid = usuario?.uid || null;
    const g = await obterProgressoGeral(uid, roadmaps);
    const t = await obterTodosProgressos(uid, roadmaps);
    setGeral(g);
    setTodos(t);
    setLoading(false);
  }, [usuario?.uid]);

  useFocusEffect(
    useCallback(() => {
      load();
    }, [load])
  );

  if (loading) return <LoadingState text="Carregando seu progresso..." />;

  const iniciadas = Object.values(todos).filter((p) => p?.concluidos?.length > 0);
  const concluidas = Object.values(todos).filter((p) => {
    const r = roadmaps.find((x) => x.id === p.trilhaId);
    const total = r ? (r.content || []).filter((c) => c.type === "video" || c.type === "link").length : 0;
    return total > 0 && p.concluidos.length >= total;
  });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Seu progresso</Text>
      <Text style={styles.subtitle}>Veja como você está indo nos estudos</Text>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{roadmaps.length}</Text>
          <Text style={styles.statLabel}>Trilhas</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={[styles.statValue, { color: "#3fb950" }]}>{iniciadas.length}</Text>
          <Text style={styles.statLabel}>Iniciadas</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={[styles.statValue, { color: "#58a6ff" }]}>{concluidas.length}</Text>
          <Text style={styles.statLabel}>Concluídas</Text>
        </View>
      </View>

      <Card style={styles.mainCard}>
        <View style={styles.mainHeader}>
          <Text style={styles.mainPct}>{geral?.porcentagemGeral || 0}%</Text>
          <Text style={styles.mainLabel}>progresso geral</Text>
        </View>
        <ProgressBar progress={geral?.porcentagemGeral || 0} height={8} />
        <View style={styles.mainMeta}>
          <Text style={styles.metaText}>{geral?.trilhasIniciadas || 0}/{geral?.totalTrilhas} trilhas</Text>
          <Text style={styles.metaText}>{geral?.ultimaAtividade ? `Último: ${geral.ultimaAtividade}` : "Comece uma trilha"}</Text>
        </View>
      </Card>

      <Text style={styles.sectionTitle}>Trilhas em andamento</Text>
      {iniciadas.length ? (
        <View style={{ gap: 10 }}>
          {iniciadas.map((p) => {
            const r = roadmaps.find((x) => x.id === p.trilhaId);
            if (!r) return null;
            return (
              <Card key={p.trilhaId} style={styles.trilhaCard}>
                <Text style={styles.trilhaName} numberOfLines={1}>
                  {r.name}
                </Text>
                <Text style={styles.trilhaMeta} numberOfLines={1}>
                  {p.concluidos.length} concluídos • {p.porcentagem}% • Próximo: {p.proximaAtividade || "—"}
                </Text>
                <ProgressBar progress={p.porcentagem} height={6} />
              </Card>
            );
          })}
        </View>
      ) : (
        <EmptyState icon="trail-sign-outline" title="Ainda não começou" description="Escolha uma trilha e marque sua primeira aula como concluída pra ver seu progresso aqui." actionLabel="Ver trilhas" onAction={() => navigation.navigate("Trilhas")} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0d1117" },
  content: { padding: 20, paddingBottom: 40 },
  title: { fontSize: 26, fontWeight: "800", color: "#e6edf3", marginBottom: 6 },
  subtitle: { fontSize: 13, color: "#8b949e", marginBottom: 16 },
  statsRow: { flexDirection: "row", gap: 10, marginBottom: 16 },
  statCard: { flex: 1, backgroundColor: "#161b22", borderWidth: 1, borderColor: "#21262d", borderRadius: 14, padding: 14, alignItems: "center" },
  statValue: { fontSize: 22, fontWeight: "800", color: "#e6edf3" },
  statLabel: { fontSize: 11, color: "#8b949e", fontWeight: "600", marginTop: 4, textTransform: "uppercase" },
  mainCard: { gap: 10, marginBottom: 20 },
  mainHeader: { flexDirection: "row", alignItems: "baseline", gap: 8 },
  mainPct: { fontSize: 32, fontWeight: "800", color: "#3fb950" },
  mainLabel: { fontSize: 12, color: "#8b949e", fontWeight: "600" },
  mainMeta: { flexDirection: "row", justifyContent: "space-between" },
  metaText: { fontSize: 11, color: "#8b949e", fontWeight: "600" },
  sectionTitle: { fontSize: 16, fontWeight: "700", color: "#e6edf3", marginBottom: 10, marginTop: 4 },
  trilhaCard: { gap: 6 },
  trilhaName: { fontSize: 14, fontWeight: "700", color: "#e6edf3" },
  trilhaMeta: { fontSize: 11, color: "#8b949e" },
});
