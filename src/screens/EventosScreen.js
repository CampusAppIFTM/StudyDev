import React, { useState, useMemo, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SearchInput } from "../components/SearchInput";
import { CategoryChip } from "../components/CategoryChip";
import { EmptyState } from "../components/EmptyState";
import { LoadingState } from "../components/LoadingState";
import { ErrorState } from "../components/ErrorState";
import { Card } from "../components/Card";
import { eventos } from "../data/eventos";
import { getEventosSalvos, toggleEventoSalvo } from "../services/salvos";

const FILTROS = ["Todos", "Online", "Presencial", "Tecnologia", "Programação", "IA", "Dados", "Carreira", "Acadêmico"];
const ORDENACOES = ["Mais próximos", "Mais recentes"];

export default function EventosScreen({ navigation }) {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("Todos");
  const [ordenacao, setOrdenacao] = useState("Mais próximos");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [salvos, setSalvos] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const t = setTimeout(() => setLoading(false), 400);
    getEventosSalvos().then(setSalvos);
    return () => clearTimeout(t);
  }, []);

  const handleToggleSave = async (id) => {
    const updated = await toggleEventoSalvo(id);
    setSalvos(updated);
  };

  const filtrados = useMemo(() => {
    try {
      let data = [...eventos];
      if (filtro !== "Todos") {
        data = data.filter((e) => e.modality === filtro || e.category === filtro);
      }
      if (busca.trim()) {
        const term = busca.toLowerCase();
        data = data.filter((e) => `${e.title} ${e.description} ${e.organizer} ${e.location}`.toLowerCase().includes(term));
      }
      if (ordenacao === "Mais próximos") {
        data.sort((a, b) => new Date(a.date) - new Date(b.date));
      } else {
        data.sort((a, b) => new Date(b.date) - new Date(a.date));
      }
      return data;
    } catch (e) {
      setError("Não deu pra filtrar os eventos. Tenta de novo?");
      return [];
    }
  }, [busca, filtro, ordenacao]);

  const renderItem = useCallback(
    ({ item }) => {
      const isSaved = salvos.includes(item.id);
      return (
        <Card style={styles.card}>
          <View style={styles.cardTop}>
            <View style={styles.imagePlaceholder}>
              <Ionicons name="calendar" size={24} color="#58a6ff" />
            </View>
            <TouchableOpacity
              style={[styles.saveButton, isSaved && { backgroundColor: "#f85149", borderColor: "#f85149" }]}
              onPress={() => handleToggleSave(item.id)}
              accessibilityLabel={isSaved ? "Remover dos salvos" : "Salvar evento"}
            >
              <Ionicons name={isSaved ? "heart" : "heart-outline"} size={18} color={isSaved ? "#fff" : "#8b949e"} />
            </TouchableOpacity>
          </View>
        <Text style={styles.cardTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <View style={styles.metaRow}>
          <Ionicons name="calendar-outline" size={12} color="#8b949e" />
          <Text style={styles.metaText}>
            {new Date(item.date).toLocaleDateString("pt-BR")} • {item.time}
          </Text>
        </View>
        <View style={styles.metaRow}>
          <Ionicons name="location-outline" size={12} color="#8b949e" />
          <Text style={styles.metaText} numberOfLines={1}>
            {item.location}
          </Text>
        </View>
        <View style={styles.badgeRow}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.category}</Text>
          </View>
          <View style={[styles.badge, { backgroundColor: item.modality === "Online" ? "#58a6ff18" : "#3fb95018", borderColor: item.modality === "Online" ? "#58a6ff33" : "#3fb95033" }]}>
            <Text style={[styles.badgeText, { color: item.modality === "Online" ? "#58a6ff" : "#3fb950" }]}>{item.modality}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate("EventoDetalhes", { evento: item })}
          activeOpacity={0.85}
        >
          <Text style={styles.primaryButtonText}>Ver evento</Text>
          <Ionicons name="chevron-forward" size={14} color="#fff" />
        </TouchableOpacity>
      </Card>
      );
    },
    [navigation, salvos]
  );

  if (loading) return <LoadingState text="Carregando eventos..." />;
  if (error) return <ErrorState description={error} onRetry={() => setError(null)} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Eventos</Text>
        <Text style={styles.subtitle}>Workshops, palestras e encontros pra aprender e conhecer gente da área.</Text>
        <SearchInput value={busca} onChangeText={setBusca} placeholder="Buscar por nome, tema ou lugar..." />
        <View style={styles.filtersRow}>
          <FlatList
            horizontal
            data={FILTROS}
            keyExtractor={(i) => i}
            renderItem={({ item }) => <CategoryChip label={item} selected={item === filtro} onPress={() => setFiltro(item)} />}
            contentContainerStyle={{ gap: 8 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.orderRow}>
          {ORDENACOES.map((o) => (
            <TouchableOpacity key={o} onPress={() => setOrdenacao(o)} style={[styles.orderChip, ordenacao === o && styles.orderChipActive]}>
              <Text style={[styles.orderText, ordenacao === o && styles.orderTextActive]}>{o}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <FlatList
        data={filtrados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16, gap: 12, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyState title="Nenhum evento por aqui" description="Tenta mudar os filtros ou a busca." icon="calendar-outline" />}
        initialNumToRender={6}
        windowSize={7}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0d1117" },
  header: { padding: 16, gap: 12, backgroundColor: "#0d1117" },
  title: { fontSize: 26, fontWeight: "800", color: "#e6edf3" },
  subtitle: { fontSize: 13, color: "#8b949e", lineHeight: 18 },
  filtersRow: { marginTop: 4 },
  orderRow: { flexDirection: "row", gap: 8, marginTop: 4 },
  orderChip: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, backgroundColor: "#161b22", borderWidth: 1, borderColor: "#21262d" },
  orderChipActive: { backgroundColor: "#58a6ff", borderColor: "#58a6ff" },
  orderText: { fontSize: 12, fontWeight: "600", color: "#8b949e" },
  orderTextActive: { color: "#fff" },
  card: { gap: 8 },
  cardTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  imagePlaceholder: { width: 48, height: 48, borderRadius: 10, backgroundColor: "#0d1117", borderWidth: 1, borderColor: "#21262d", alignItems: "center", justifyContent: "center" },
  saveButton: { width: 36, height: 36, borderRadius: 18, backgroundColor: "#0d1117", borderWidth: 1, borderColor: "#21262d", alignItems: "center", justifyContent: "center" },
  cardTitle: { fontSize: 15, fontWeight: "700", color: "#e6edf3", lineHeight: 20 },
  metaRow: { flexDirection: "row", gap: 6, alignItems: "center" },
  metaText: { fontSize: 12, color: "#8b949e", flex: 1 },
  badgeRow: { flexDirection: "row", gap: 8, marginTop: 2 },
  badge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20, backgroundColor: "#1f6feb18", borderWidth: 1, borderColor: "#58a6ff22" },
  badgeText: { fontSize: 11, fontWeight: "600", color: "#58a6ff" },
  primaryButton: {
    flexDirection: "row",
    gap: 6,
    backgroundColor: "#58a6ff",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  primaryButtonText: { color: "#fff", fontWeight: "700", fontSize: 13 },
});
