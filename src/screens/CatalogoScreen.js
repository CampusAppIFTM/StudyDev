import React, { useState, useMemo, useCallback, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { languages } from "../data/studyDevData";

const CARD_HEIGHT = 176;
const CARD_GAP = 16;

const CatalogoScreen = ({ navigation }) => {
  const [busca, setBusca] = useState("");
  const [carregandoBusca, setCarregandoBusca] = useState(false);
  const [erroBusca, setErroBusca] = useState(null);

  const linguagensFiltradas = useMemo(() => {
    try {
      if (erroBusca) setErroBusca(null);
      if (!busca.trim()) return languages;
      const termo = busca.toLowerCase();
      return languages.filter((l) => {
        const blob = [
          l.name,
          l.desc,
          ...(l.ecosystem || []),
          ...(l.paradigms || []),
          ...(l.use_cases || []),
          String(l.typing || ""),
          String(l.runtime || ""),
        ]
          .join(" ")
          .toLowerCase();
        return blob.includes(termo);
      });
    } catch (e) {
      setErroBusca("Deu um erro na busca. Tenta de novo?");
      return [];
    }
  }, [busca]);

  useEffect(() => {
    if (!busca) {
      setCarregandoBusca(false);
      return;
    }
    setCarregandoBusca(true);
    const t = setTimeout(() => setCarregandoBusca(false), 280);
    return () => clearTimeout(t);
  }, [busca]);

  const handlePress = useCallback(
    (ling) => {
      navigation.navigate("LinguagemDetalhes", { id: ling.id, linguagem: ling });
    },
    [navigation]
  );

  const renderItem = useCallback(
    ({ item: ling }) => (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.7}
        onPress={() => handlePress(ling)}
        accessibilityLabel={`Ver detalhes de ${ling.name}`}
        accessibilityRole="button"
      >
        <Text style={styles.cardTitle}>{ling.name}</Text>
        <Text style={styles.cardDesc} numberOfLines={3}>
          {ling.desc}
        </Text>

        <View style={styles.ecosystemPreview}>
          {(ling.ecosystem || []).slice(0, 2).map((eco) => (
            <View key={eco} style={styles.ecoChip}>
              <Text style={styles.ecoText}>{eco}</Text>
            </View>
          ))}
          {(ling.ecosystem || []).length > 2 && (
            <Text style={styles.ecoMore}>+{ling.ecosystem.length - 2}</Text>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Detalhes</Text>
          <Ionicons name="chevron-forward" size={14} color="#0d172a" />
        </View>
      </TouchableOpacity>
    ),
    [handlePress]
  );

  const keyExtractor = useCallback((item) => item.id, []);

  const getItemLayout = useCallback(
    (_, index) => ({
      length: CARD_HEIGHT,
      offset: Math.ceil((index + 1) / 2) * (CARD_HEIGHT + CARD_GAP) - CARD_GAP,
      index,
    }),
    []
  );

  const ListHeader = useMemo(
    () => (
      <View>
        <Text style={styles.title}>Linguagens</Text>
        <Text style={styles.subtitle}>
          {languages.length} linguagens explicadas de forma simples, com onde são usadas, ecossistema e links pra documentação.
        </Text>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#484f58" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Filtrar por nome, descrição, paradigma ou uso"
            placeholderTextColor="#484f58"
            value={busca}
            onChangeText={setBusca}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
            accessibilityLabel="Filtrar linguagens"
          />
          {busca.length > 0 && (
            <TouchableOpacity onPress={() => setBusca("")} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} accessibilityLabel="Limpar busca">
              <Ionicons name="close-circle" size={18} color="#484f58" />
            </TouchableOpacity>
          )}
        </View>

        {carregandoBusca ? (
          <View style={styles.loadingRow}>
            <ActivityIndicator size="small" color="#58a6ff" />
            <Text style={styles.loadingText}>Buscando...</Text>
          </View>
        ) : erroBusca ? (
          <View style={styles.errorRow}>
            <Ionicons name="alert-circle-outline" size={16} color="#f85149" />
            <Text style={styles.errorText}>{erroBusca}</Text>
            <TouchableOpacity onPress={() => setBusca("")}>
              <Text style={styles.retryText}>Limpar</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.resultInfo}>
            {linguagensFiltradas.length} {linguagensFiltradas.length === 1 ? "linguagem encontrada" : "linguagens encontradas"}
          </Text>
        )}
      </View>
    ),
    [busca, linguagensFiltradas.length, carregandoBusca, erroBusca]
  );

  const ListEmpty = useCallback(
    () => {
      if (carregandoBusca) {
        return (
          <View style={styles.emptyState}>
            <ActivityIndicator size="large" color="#58a6ff" />
            <Text style={styles.emptyText}>Buscando...</Text>
          </View>
        );
      }
      if (erroBusca) {
        return (
          <View style={styles.emptyState}>
            <Ionicons name="alert-circle-outline" size={40} color="#f85149" />
            <Text style={styles.emptyText}>Deu um erro na busca</Text>
            <Text style={styles.emptySub}>{erroBusca}</Text>
            <TouchableOpacity style={styles.retryButton} onPress={() => setBusca("")}>
              <Text style={styles.retryButtonText}>Tentar de novo</Text>
            </TouchableOpacity>
          </View>
        );
      }
      return (
        <View style={styles.emptyState}>
          <Ionicons name="search-outline" size={40} color="#484f58" />
          <Text style={styles.emptyText}>Não achamos essa linguagem</Text>
          <Text style={styles.emptySub}>Tenta outro termo, como "Python" ou "JavaScript"</Text>
        </View>
      );
    },
    [carregandoBusca, erroBusca]
  );

  if (carregandoBusca && linguagensFiltradas.length === 0) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center", padding: 20 }]}>
        <ActivityIndicator size="large" color="#58a6ff" />
        <Text style={[styles.emptyText, { marginTop: 12 }]}>Buscando...</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={carregandoBusca ? [] : linguagensFiltradas}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      ListHeaderComponent={ListHeader}
      ListEmptyComponent={ListEmpty}
      initialNumToRender={8}
      maxToRenderPerBatch={8}
      windowSize={7}
      removeClippedSubviews
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CatalogoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d1117",
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#e6edf3",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#8b949e",
    marginBottom: 20,
    lineHeight: 22,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#161b22",
    borderWidth: 1,
    borderColor: "#30363d",
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 46,
    marginBottom: 8,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: "#e6edf3",
    fontSize: 15,
    paddingVertical: 0,
  },
  resultInfo: {
    fontSize: 13,
    color: "#484f58",
    marginBottom: 16,
  },
  columnWrapper: {
    justifyContent: "space-between",
    gap: CARD_GAP,
  },
  card: {
    flex: 1,
    maxWidth: "48%",
    backgroundColor: "#161b22",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#21262d",
    padding: 16,
    marginBottom: CARD_GAP,
    minHeight: CARD_HEIGHT - 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#e6edf3",
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 12,
    color: "#8b949e",
    lineHeight: 17,
    marginBottom: 10,
    minHeight: 34,
  },
  ecosystemPreview: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 12,
    alignItems: "center",
  },
  ecoChip: {
    backgroundColor: "#0d1117",
    borderWidth: 1,
    borderColor: "#21262d",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  ecoText: {
    color: "#8b949e",
    fontSize: 10,
    fontWeight: "500",
  },
  ecoMore: {
    color: "#484f58",
    fontSize: 11,
    fontWeight: "600",
  },
  buttonContainer: {
    backgroundColor: "#58a6ff",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  buttonText: {
    color: "#0d172a",
    fontSize: 13,
    fontWeight: "600",
  },
  emptyState: {
    alignItems: "center",
    paddingTop: 40,
    gap: 8,
  },
  emptyText: {
    color: "#e6edf3",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 8,
  },
  emptySub: {
    color: "#484f58",
    fontSize: 14,
  },
  loadingRow: { flexDirection: "row", gap: 8, alignItems: "center", marginBottom: 16, paddingVertical: 6 },
  loadingText: { color: "#8b949e", fontSize: 13, fontWeight: "600" },
  errorRow: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    backgroundColor: "#f8514918",
    borderWidth: 1,
    borderColor: "#f8514933",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  errorText: { flex: 1, color: "#f85149", fontSize: 12, fontWeight: "600" },
  retryText: { color: "#58a6ff", fontSize: 12, fontWeight: "700" },
  retryButton: { marginTop: 12, backgroundColor: "#21262d", paddingHorizontal: 16, paddingVertical: 8, borderRadius: 8, borderWidth: 1, borderColor: "#30363d" },
  retryButtonText: { color: "#e6edf3", fontWeight: "700", fontSize: 13 },
});
