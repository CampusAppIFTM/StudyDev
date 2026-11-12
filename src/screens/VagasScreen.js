import React, { useState, useMemo, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SearchInput } from "../components/SearchInput";
import { CategoryChip } from "../components/CategoryChip";
import { EmptyState } from "../components/EmptyState";
import { LoadingState } from "../components/LoadingState";
import { ErrorState } from "../components/ErrorState";
import { Card } from "../components/Card";
import { vagas } from "../data/vagas";
import { getVagasSalvas, toggleVagaSalva } from "../services/salvos";

const TIPOS = ["Todos", "Estágio", "Jovem Aprendiz", "Trainee", "Júnior", "Pleno", "Freelancer"];
const MODALIDADES = ["Todos", "Remoto", "Híbrido", "Presencial"];
const AREAS = ["Todas", "Front-end", "Back-end", "Full Stack", "Mobile", "Dados", "IA", "DevOps", "QA", "Suporte", "Segurança"];

export default function VagasScreen({ navigation }) {
  const [busca, setBusca] = useState("");
  const [tipo, setTipo] = useState("Todos");
  const [modalidade, setModalidade] = useState("Todos");
  const [area, setArea] = useState("Todas");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [salvos, setSalvos] = useState([]);

  useEffect(() => {
    setLoading(true);
    getVagasSalvas().then(setSalvos);
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, []);

  const handleToggleSave = async (id) => {
    const updated = await toggleVagaSalva(id);
    setSalvos(updated);
  };

  const filtradas = useMemo(() => {
    try {
      let data = [...vagas];
      if (tipo !== "Todos") data = data.filter((v) => v.type === tipo || v.level === tipo);
      if (modalidade !== "Todos") data = data.filter((v) => v.modality === modalidade);
      if (area !== "Todas") data = data.filter((v) => v.area === area);
      if (busca.trim()) {
        const term = busca.toLowerCase();
        data = data.filter((v) => `${v.title} ${v.company} ${v.tags?.join(" ")} ${v.location}`.toLowerCase().includes(term));
      }
      return data;
    } catch {
      setError("Não deu pra filtrar as vagas. Tenta de novo?");
      return [];
    }
  }, [busca, tipo, modalidade, area]);

  const renderItem = ({ item }) => {
    const isSaved = salvos.includes(item.id);
    return (
      <Card style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={styles.company}>{item.company}</Text>
          </View>
          <TouchableOpacity
            style={[styles.saveBtn, isSaved && { backgroundColor: "#f85149", borderColor: "#f85149" }]}
            onPress={() => handleToggleSave(item.id)}
          >
            <Ionicons name={isSaved ? "heart" : "heart-outline"} size={18} color={isSaved ? "#fff" : "#8b949e"} />
          </TouchableOpacity>
        </View>
      <View style={styles.metaRow}>
        <Ionicons name="location-outline" size={12} color="#8b949e" />
        <Text style={styles.metaText}>{item.location}</Text>
        <View style={styles.dot} />
        <Text style={styles.metaText}>{item.modality}</Text>
      </View>
      <View style={styles.badgeRow}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.level}</Text>
        </View>
        <View style={[styles.badge, { backgroundColor: "#0d1117" }]}>
          <Text style={[styles.badgeText, { color: "#8b949e" }]}>{item.area}</Text>
        </View>
      </View>
      <View style={styles.tagsRow}>
        {(item.tags || []).slice(0, 3).map((tag) => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate("VagaDetalhes", { vaga: item })}>
        <Text style={styles.primaryButtonText}>Ver vaga</Text>
        <Ionicons name="chevron-forward" size={14} color="#fff" />
      </TouchableOpacity>
    </Card>
    );
  };

  if (loading) return <LoadingState text="Carregando vagas..." />;
  if (error) return <ErrorState description={error} onRetry={() => setError(null)} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Vagas</Text>
        <Text style={styles.subtitle}>Estágios e oportunidades pra quem está começando em tecnologia.</Text>
        <SearchInput value={busca} onChangeText={setBusca} placeholder="Buscar por cargo, empresa ou tecnologia..." />
      </View>

      <View style={styles.filters}>
        <Text style={styles.filterLabel}>Tipo</Text>
        <FlatList horizontal data={TIPOS} keyExtractor={(i) => i} renderItem={({ item }) => <CategoryChip label={item} selected={item === tipo} onPress={() => setTipo(item)} />} contentContainerStyle={{ gap: 8, paddingHorizontal: 16 }} showsHorizontalScrollIndicator={false} />
        <Text style={[styles.filterLabel, { marginTop: 8 }]}>Modalidade</Text>
        <FlatList horizontal data={MODALIDADES} keyExtractor={(i) => i} renderItem={({ item }) => <CategoryChip label={item} selected={item === modalidade} onPress={() => setModalidade(item)} />} contentContainerStyle={{ gap: 8, paddingHorizontal: 16 }} showsHorizontalScrollIndicator={false} />
        <Text style={[styles.filterLabel, { marginTop: 8 }]}>Área</Text>
        <FlatList horizontal data={AREAS} keyExtractor={(i) => i} renderItem={({ item }) => <CategoryChip label={item} selected={item === area} onPress={() => setArea(item)} />} contentContainerStyle={{ gap: 8, paddingHorizontal: 16 }} showsHorizontalScrollIndicator={false} />
      </View>

      <FlatList
        data={filtradas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16, gap: 12, paddingBottom: 100 }}
        ListEmptyComponent={<EmptyState title="Nenhuma vaga por aqui" description="Tenta mudar os filtros ou a busca." icon="briefcase-outline" />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0d1117" },
  header: { padding: 16, gap: 12 },
  title: { fontSize: 26, fontWeight: "800", color: "#e6edf3" },
  subtitle: { fontSize: 13, color: "#8b949e", lineHeight: 18 },
  filters: { gap: 4, paddingBottom: 8 },
  filterLabel: { fontSize: 12, fontWeight: "700", color: "#8b949e", marginLeft: 16, textTransform: "uppercase", letterSpacing: 0.5 },
  card: { gap: 8 },
  cardHeader: { flexDirection: "row", gap: 12 },
  cardTitle: { fontSize: 15, fontWeight: "700", color: "#e6edf3", flex: 1, lineHeight: 20 },
  company: { fontSize: 13, color: "#8b949e", marginTop: 2 },
  saveBtn: { width: 36, height: 36, borderRadius: 18, backgroundColor: "#0d1117", borderWidth: 1, borderColor: "#21262d", alignItems: "center", justifyContent: "center" },
  metaRow: { flexDirection: "row", gap: 6, alignItems: "center" },
  metaText: { fontSize: 12, color: "#8b949e" },
  dot: { width: 4, height: 4, borderRadius: 2, backgroundColor: "#484f58" },
  badgeRow: { flexDirection: "row", gap: 8 },
  badge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20, backgroundColor: "#1f6feb18", borderWidth: 1, borderColor: "#58a6ff22" },
  badgeText: { fontSize: 11, fontWeight: "600", color: "#58a6ff" },
  tagsRow: { flexDirection: "row", gap: 6, flexWrap: "wrap" },
  tag: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, backgroundColor: "#0d1117", borderWidth: 1, borderColor: "#21262d" },
  tagText: { fontSize: 11, color: "#8b949e", fontWeight: "600" },
  primaryButton: { flexDirection: "row", gap: 6, backgroundColor: "#58a6ff", paddingVertical: 10, borderRadius: 10, alignItems: "center", justifyContent: "center", marginTop: 4 },
  primaryButtonText: { color: "#fff", fontWeight: "700", fontSize: 13 },
});
