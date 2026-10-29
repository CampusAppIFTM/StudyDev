import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Card } from "../components/Card";
import { BotaoPrimario } from "../components/BotaoPrimario";

export default function EventoDetalhesScreen({ route, navigation }) {
  const { evento } = route.params || {};
  const [salvo, setSalvo] = useState(false);

  if (!evento) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Evento não encontrado</Text>
      </View>
    );
  }

  const handleParticipar = async () => {
    if (evento.link) {
      try {
        const can = await Linking.canOpenURL(evento.link);
        if (can) await Linking.openURL(evento.link);
      } catch {}
    } else {
      Alert.alert("Inscrição", "Link de inscrição não disponível.");
    }
  };

  const toggleSalvar = () => {
    setSalvo((s) => !s);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={20} color="#8b949e" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.imageHeader}>
        <Ionicons name="calendar" size={48} color="#58a6ff" />
      </View>

      <Text style={styles.title}>{evento.title}</Text>
      <Text style={styles.desc}>{evento.description}</Text>

      <Card style={styles.metaCard}>
        <View style={styles.metaRow}>
          <Ionicons name="calendar-outline" size={16} color="#58a6ff" />
          <Text style={styles.metaText}>
            {new Date(evento.date).toLocaleDateString("pt-BR")} às {evento.time}
          </Text>
        </View>
        <View style={styles.metaRow}>
          <Ionicons name="location-outline" size={16} color="#58a6ff" />
          <Text style={styles.metaText}>{evento.location}</Text>
        </View>
        <View style={styles.metaRow}>
          <Ionicons name="business-outline" size={16} color="#58a6ff" />
          <Text style={styles.metaText}>{evento.organizer}</Text>
        </View>
        <View style={styles.badgeRow}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{evento.category}</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{evento.modality}</Text>
          </View>
        </View>
      </Card>

      <View style={styles.actions}>
        <BotaoPrimario title="Participar do evento" onPress={handleParticipar} style={{ flex: 1 }} />
        <TouchableOpacity style={[styles.saveButton, salvo && styles.saveButtonActive]} onPress={toggleSalvar}>
          <Ionicons name={salvo ? "heart" : "heart-outline"} size={18} color={salvo ? "#fff" : "#8b949e"} />
          <Text style={[styles.saveText, salvo && { color: "#fff" }]}>{salvo ? "Salvo" : "Salvar"}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.linkButton} onPress={handleParticipar}>
        <Ionicons name="open-outline" size={16} color="#58a6ff" />
        <Text style={styles.linkText}>Abrir link externo</Text>
      </TouchableOpacity>
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
  imageHeader: { height: 180, backgroundColor: "#161b22", borderWidth: 1, borderColor: "#21262d", borderRadius: 16, alignItems: "center", justifyContent: "center", marginBottom: 16 },
  title: { fontSize: 22, fontWeight: "800", color: "#e6edf3", marginBottom: 8 },
  desc: { fontSize: 13, color: "#8b949e", lineHeight: 19, marginBottom: 16 },
  metaCard: { gap: 10, marginBottom: 16 },
  metaRow: { flexDirection: "row", gap: 8, alignItems: "center" },
  metaText: { color: "#e6edf3", fontSize: 13, flex: 1 },
  badgeRow: { flexDirection: "row", gap: 8, marginTop: 6 },
  badge: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, backgroundColor: "#1f6feb18", borderWidth: 1, borderColor: "#58a6ff22" },
  badgeText: { color: "#58a6ff", fontSize: 12, fontWeight: "600" },
  actions: { flexDirection: "row", gap: 10, marginBottom: 12 },
  saveButton: { flexDirection: "row", gap: 6, paddingHorizontal: 16, paddingVertical: 12, borderRadius: 12, backgroundColor: "#161b22", borderWidth: 1, borderColor: "#21262d", alignItems: "center" },
  saveButtonActive: { backgroundColor: "#f85149", borderColor: "#f85149" },
  saveText: { color: "#8b949e", fontWeight: "700" },
  linkButton: { flexDirection: "row", gap: 6, alignItems: "center", justifyContent: "center", padding: 12 },
  linkText: { color: "#58a6ff", fontWeight: "600" },
});
