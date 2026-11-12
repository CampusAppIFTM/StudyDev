import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Card } from "../components/Card";
import { BotaoPrimario } from "../components/BotaoPrimario";

export default function VagaDetalhesScreen({ route, navigation }) {
  const { vaga } = route.params || {};
  const [salvo, setSalvo] = useState(false);

  if (!vaga) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Vaga não encontrada</Text>
      </View>
    );
  }

  const handleCandidatar = async () => {
    if (vaga.link) {
      const can = await Linking.canOpenURL(vaga.link);
      if (can) await Linking.openURL(vaga.link);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={20} color="#8b949e" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{vaga.title}</Text>
      <Text style={styles.company}>{vaga.company}</Text>

      <View style={styles.badgeRow}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{vaga.level}</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{vaga.modality}</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{vaga.area}</Text>
        </View>
      </View>

      <View style={styles.metaCard}>
        <View style={styles.metaRow}>
          <Ionicons name="location-outline" size={16} color="#58a6ff" />
          <Text style={styles.metaText}>{vaga.location}</Text>
        </View>
        {vaga.salary ? (
          <View style={styles.metaRow}>
            <Ionicons name="cash-outline" size={16} color="#3fb950" />
            <Text style={styles.metaText}>{vaga.salary}</Text>
          </View>
        ) : null}
        <View style={styles.metaRow}>
          <Ionicons name="calendar-outline" size={16} color="#8b949e" />
          <Text style={styles.metaText}>Publicada em {new Date(vaga.publishedAt).toLocaleDateString("pt-BR")}</Text>
        </View>
        {vaga.deadline ? (
          <View style={styles.metaRow}>
            <Ionicons name="time-outline" size={16} color="#f0883e" />
            <Text style={styles.metaText}>Prazo: {new Date(vaga.deadline).toLocaleDateString("pt-BR")}</Text>
          </View>
        ) : null}
      </View>

      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>Descrição</Text>
        <Text style={styles.sectionText}>{vaga.description}</Text>
      </Card>

      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>Requisitos</Text>
        {(vaga.requirements || []).map((r) => (
          <View key={r} style={styles.bulletRow}>
            <View style={styles.dot} />
            <Text style={styles.bulletText}>{r}</Text>
          </View>
        ))}
      </Card>

      {vaga.differentials?.length ? (
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Diferenciais</Text>
          {vaga.differentials.map((r) => (
            <View key={r} style={styles.bulletRow}>
              <View style={[styles.dot, { backgroundColor: "#58a6ff" }]} />
              <Text style={styles.bulletText}>{r}</Text>
            </View>
          ))}
        </Card>
      ) : null}

      <View style={styles.tagsRow}>
        {(vaga.tags || []).map((t) => (
          <View key={t} style={styles.tag}>
            <Text style={styles.tagText}>{t}</Text>
          </View>
        ))}
      </View>

      <View style={styles.actions}>
        <BotaoPrimario title="Candidatar-se" onPress={handleCandidatar} style={{ flex: 1 }} />
        <TouchableOpacity style={[styles.saveButton, salvo && styles.saveActive]} onPress={() => setSalvo(!salvo)}>
          <Ionicons name={salvo ? "heart" : "heart-outline"} size={18} color={salvo ? "#fff" : "#8b949e"} />
          <Text style={[styles.saveText, salvo && { color: "#fff" }]}>{salvo ? "Salvo" : "Salvar"}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0d1117" },
  content: { padding: 20, paddingBottom: 40 },
  center: { flex: 1, backgroundColor: "#0d1117", alignItems: "center", justifyContent: "center" },
  error: { color: "#f85149" },
  back: { flexDirection: "row", gap: 4, alignItems: "center", marginBottom: 16 },
  backText: { color: "#8b949e", fontWeight: "600" },
  title: { fontSize: 22, fontWeight: "800", color: "#e6edf3", marginBottom: 4 },
  company: { fontSize: 14, color: "#8b949e", marginBottom: 12 },
  badgeRow: { flexDirection: "row", gap: 8, marginBottom: 16, flexWrap: "wrap" },
  badge: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, backgroundColor: "#1f6feb18", borderWidth: 1, borderColor: "#58a6ff22" },
  badgeText: { color: "#58a6ff", fontSize: 12, fontWeight: "600" },
  metaCard: { backgroundColor: "#161b22", borderWidth: 1, borderColor: "#21262d", borderRadius: 14, padding: 16, gap: 10, marginBottom: 16 },
  metaRow: { flexDirection: "row", gap: 8, alignItems: "center" },
  metaText: { color: "#e6edf3", fontSize: 13, flex: 1 },
  section: { gap: 8, marginBottom: 16 },
  sectionTitle: { fontSize: 15, fontWeight: "700", color: "#e6edf3" },
  sectionText: { fontSize: 13, color: "#8b949e", lineHeight: 19 },
  bulletRow: { flexDirection: "row", gap: 8, alignItems: "flex-start" },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: "#3fb950", marginTop: 6 },
  bulletText: { flex: 1, color: "#e6edf3", fontSize: 13, lineHeight: 18 },
  tagsRow: { flexDirection: "row", gap: 8, flexWrap: "wrap", marginBottom: 16 },
  tag: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 8, backgroundColor: "#0d1117", borderWidth: 1, borderColor: "#21262d" },
  tagText: { color: "#8b949e", fontSize: 12, fontWeight: "600" },
  actions: { flexDirection: "row", gap: 10 },
  saveButton: { flexDirection: "row", gap: 6, paddingHorizontal: 16, paddingVertical: 12, borderRadius: 12, backgroundColor: "#161b22", borderWidth: 1, borderColor: "#21262d", alignItems: "center" },
  saveActive: { backgroundColor: "#f85149", borderColor: "#f85149" },
  saveText: { color: "#8b949e", fontWeight: "700" },
});
