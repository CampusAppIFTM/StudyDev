import React, { useState, useMemo } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SearchInput } from "../components/SearchInput";
import { CategoryChip } from "../components/CategoryChip";
import { EmptyState } from "../components/EmptyState";
import { CourseCard } from "../components/CourseCard";
import { languages, roadmaps } from "../data/studyDevData";

const CATEGORIAS = ["Todos", "Programação", "Web", "Mobile", "Backend", "Banco de Dados", "DevOps", "Redes", "Sistemas Operacionais", "Carreira"];

function getCategoria(item) {
  // Heurística simples baseada em nome/desc
  const t = (item.name + " " + item.desc).toLowerCase();
  if (t.includes("javascript") || t.includes("python") || t.includes("java") || t.includes("c++") || t.includes("c#")) return "Programação";
  if (t.includes("react") || t.includes("html") || t.includes("css")) return "Web";
  if (t.includes("kotlin") || t.includes("swift") || t.includes("dart") || t.includes("flutter")) return "Mobile";
  if (t.includes("node") || t.includes("spring") || t.includes("php") || t.includes("go") || t.includes("rust")) return "Backend";
  if (t.includes("sql") || t.includes("banco") || t.includes("mysql")) return "Banco de Dados";
  if (t.includes("linux") || t.includes("docker")) return "DevOps";
  if (t.includes("redes")) return "Redes";
  if (t.includes("sistema")) return "Sistemas Operacionais";
  if (t.includes("carreira") || t.includes("emprego")) return "Carreira";
  return "Programação";
}

export default function ExplorarScreen({ navigation }) {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todos");

  const dados = useMemo(() => {
    const todos = [
      ...languages.map((l) => ({ ...l, _type: "linguagem", _title: l.name, _desc: l.desc, _categoria: getCategoria(l) })),
      ...roadmaps.map((r) => ({ ...r, _type: "trilha", _title: r.name, _desc: r.desc, _categoria: getCategoria(r) })),
    ];
    let filtrados = todos;
    if (categoria !== "Todos") filtrados = filtrados.filter((i) => i._categoria === categoria);
    if (busca.trim()) {
      const t = busca.toLowerCase();
      filtrados = filtrados.filter((i) => (i._title + " " + i._desc).toLowerCase().includes(t));
    }
    return filtrados;
  }, [busca, categoria]);

  const handlePress = (item) => {
    if (item._type === "linguagem") navigation.navigate("Catálogo", { screen: "LinguagemDetalhes", params: { id: item.id } });
    else navigation.navigate("Trilhas", { screen: "TrilhaDetalhes", params: { id: item.id } });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>O que você quer aprender?</Text>
        <SearchInput value={busca} onChangeText={setBusca} placeholder="Buscar por linguagem, trilha ou tema..." />
      </View>

      <View style={styles.chipsWrapper}>
        <FlatList
          horizontal
          data={CATEGORIAS}
          keyExtractor={(i) => i}
          renderItem={({ item }) => <CategoryChip label={item} selected={item === categoria} onPress={() => setCategoria(item)} />}
          contentContainerStyle={{ gap: 8, paddingHorizontal: 20 }}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <FlatList
        data={dados}
        keyExtractor={(item) => `${item._type}-${item.id}`}
        renderItem={({ item }) => (
          <View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
            <CourseCard
              title={item._title}
              description={item._desc}
              level={item._type === "trilha" ? `${(item.content || []).filter((c) => c.type === "video").length} aulas` : item.typing || "Iniciante"}
              countText={item._categoria}
              progress={0}
              cta={item._type === "linguagem" ? "Ver linguagem" : "Ver trilha"}
              onPress={() => handlePress(item)}
            />
          </View>
        )}
        ListEmptyComponent={<EmptyState title="Nada por aqui" description="Tenta outro termo ou outra categoria" icon="search-outline" />}
        contentContainerStyle={{ paddingBottom: 20, paddingTop: 8 }}
        showsVerticalScrollIndicator={false}
        initialNumToRender={8}
        windowSize={7}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0d1117" },
  header: { padding: 20, paddingBottom: 12, gap: 12 },
  title: { fontSize: 22, fontWeight: "800", color: "#e6edf3" },
  chipsWrapper: { marginBottom: 8 },
});
