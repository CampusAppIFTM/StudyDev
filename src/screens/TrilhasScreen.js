import React, { useState, useMemo, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { Card } from "../components/Card";
import { BotaoPrimario } from "../components/BotaoPrimario";
import { roadmaps } from "../data/studyDevData";
import { useUser } from "../contexts/UserContext";
import { obterTodosProgressos } from "../services/progresso";

const ITEM_HEIGHT = 210;

const TrilhasScreen = ({ navigation }) => {
  const usuario = useUser();
  const [busca, setBusca] = useState("");
  const [progressMap, setProgressMap] = useState({});
  const [carregandoBusca, setCarregandoBusca] = useState(false);
  const [erroBusca, setErroBusca] = useState(null);

  const filtradas = useMemo(() => {
    try {
      if (erroBusca) setErroBusca(null);
      if (!busca.trim()) return roadmaps;
      const termo = busca.toLowerCase();
      return roadmaps.filter((r) => {
        const blob = [
          r.name,
          r.desc,
          ...(r.content || []).map((c) => c.name || ""),
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

  useFocusEffect(
    useCallback(() => {
      let ativo = true;
      (async () => {
        const map = await obterTodosProgressos(usuario?.uid || null, roadmaps);
        if (ativo) setProgressMap(map);
      })();
      return () => {
        ativo = false;
      };
    }, [usuario?.uid])
  );

  const handlePress = useCallback(
    (trilha) => {
      navigation.navigate("TrilhaDetalhes", {
        id: trilha.id,
        trilhaId: trilha.id,
        titulo: trilha.name,
      });
    },
    [navigation]
  );

  const renderItem = useCallback(
    ({ item: trilha }) => {
      const videoCount = (trilha.content || []).filter((c) => c.type === "video").length;
      const linkCount = (trilha.content || []).filter((c) => c.type === "link").length;
      const total = (trilha.content || []).filter((c) => c.type === "video" || c.type === "link").length;
      const prog = progressMap[trilha.id];
      const concluidos = prog?.concluidos?.length || 0;
      const pendentes = Math.max(total - concluidos, 0);
      const pct = prog?.porcentagem || 0;
      const temProgresso = concluidos > 0;
      return (
        <Card style={styles.card} accessible accessibilityLabel={`Trilha ${trilha.name}, ${pct}% concluído`}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle} numberOfLines={2}>
              {trilha.name}
            </Text>
            <View style={styles.badgeRow}>
              {videoCount > 0 && (
                <View style={styles.badge}>
                  <Ionicons name="videocam-outline" size={12} color="#58a6ff" />
                  <Text style={styles.badgeText}>{videoCount} vídeos</Text>
                </View>
              )}
              {linkCount > 0 && (
                <View style={[styles.badge, styles.badgeLink]}>
                  <Ionicons name="link-outline" size={12} color="#8b949e" />
                  <Text style={[styles.badgeText, { color: "#8b949e" }]}>{linkCount} links</Text>
                </View>
              )}
              {temProgresso && (
                <View style={[styles.badge, { backgroundColor: "#3fb95018", borderColor: "#3fb95033" }]}>
                  <Ionicons name="checkmark-circle-outline" size={12} color="#3fb950" />
                  <Text style={[styles.badgeText, { color: "#3fb950" }]}>{pct}%</Text>
                </View>
              )}
            </View>
          </View>

          <Text style={styles.cardDesc} numberOfLines={2}>
            {trilha.desc}
          </Text>

          {/* Progresso */}
          <View style={styles.progressRow}>
            <View style={styles.progressBg}>
              <View style={[styles.progressFill, { width: `${pct}%` }]} />
            </View>
            <Text style={styles.progressText}>
              {concluidos}/{total} concluídos • {pendentes} pendentes
            </Text>
          </View>
          {temProgresso && prog?.proximaAtividade ? (
            <Text style={styles.proximaText} numberOfLines={1}>
              Próximo: {prog.proximaAtividade}
            </Text>
          ) : (
            <Text style={styles.proximaTextMuted}>Toque pra ver a trilha</Text>
          )}

          <BotaoPrimario title={temProgresso ? "Continuar" : "Ver Trilha"} onPress={() => handlePress(trilha)} style={styles.button} small />
        </Card>
      );
    },
    [handlePress, progressMap]
  );

  const keyExtractor = useCallback((item) => item.id, []);

  const getItemLayout = useCallback(
    (_, index) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    []
  );

  const ListHeader = useMemo(
    () => (
      <View>
        <Text style={styles.title}>Trilhas</Text>
        <Text style={styles.subtitle}>
          {roadmaps.length} trilhas com vídeos e materiais escolhidos a dedo pra você ir do zero ao avançado sem se perder.
        </Text>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#484f58" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar trilhas (React, Python, Redes...) "
            placeholderTextColor="#484f58"
            value={busca}
            onChangeText={setBusca}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
            accessibilityLabel="Buscar trilhas"
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
            {filtradas.length} {filtradas.length === 1 ? "trilha encontrada" : "trilhas encontradas"}
          </Text>
        )}
      </View>
    ),
    [busca, filtradas.length, carregandoBusca, erroBusca]
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
          <Ionicons name="compass-outline" size={40} color="#484f58" />
          <Text style={styles.emptyText}>Não achamos essa trilha</Text>
          <Text style={styles.emptySub}>Tenta outro termo, como "React" ou "Python"</Text>
        </View>
      );
    },
    [carregandoBusca, erroBusca]
  );

  const ListFooter = useCallback(
    () => (
      <View style={styles.footerNote}>
        <Ionicons name="bulb-outline" size={16} color="#484f58" />
        <Text style={styles.footerText}>Travou em algo? Pergunta pro StudyBot enquanto estuda</Text>
      </View>
    ),
    []
  );

  if (carregandoBusca && filtradas.length === 0) {
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
      data={carregandoBusca ? [] : filtradas}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListHeaderComponent={ListHeader}
      ListEmptyComponent={ListEmpty}
      ListFooterComponent={filtradas.length && !carregandoBusca ? ListFooter : null}
      initialNumToRender={6}
      maxToRenderPerBatch={6}
      windowSize={7}
      removeClippedSubviews
      getItemLayout={getItemLayout}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default TrilhasScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0d1117" },
  content: { padding: 20, paddingBottom: 40 },
  title: { fontSize: 26, fontWeight: "700", color: "#e6edf3", marginBottom: 10 },
  subtitle: { fontSize: 14, color: "#8b949e", lineHeight: 21, marginBottom: 16 },
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
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, color: "#e6edf3", fontSize: 14, paddingVertical: 0 },
  resultInfo: { fontSize: 13, color: "#484f58", marginBottom: 18 },
  card: { marginBottom: 14, padding: 18 },
  cardHeader: { marginBottom: 8 },
  cardTitle: { fontSize: 17, fontWeight: "700", color: "#e6edf3", marginBottom: 6, lineHeight: 22 },
  badgeRow: { flexDirection: "row", gap: 8, flexWrap: "wrap" },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#1f6feb18",
    borderWidth: 1,
    borderColor: "#58a6ff22",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
  },
  badgeLink: { backgroundColor: "#21262d", borderColor: "#30363d" },
  badgeText: { color: "#58a6ff", fontSize: 11, fontWeight: "600" },
  cardDesc: { fontSize: 13, color: "#8b949e", lineHeight: 19, marginBottom: 10 },
  progressRow: { gap: 6, marginBottom: 8 },
  progressBg: { height: 6, backgroundColor: "#0d1117", borderRadius: 3, overflow: "hidden", borderWidth: 1, borderColor: "#21262d" },
  progressFill: { height: "100%", backgroundColor: "#3fb950", borderRadius: 3 },
  progressText: { fontSize: 11, color: "#8b949e", fontWeight: "600" },
  proximaText: { fontSize: 11, color: "#58a6ff", fontWeight: "600", marginBottom: 10 },
  proximaTextMuted: { fontSize: 11, color: "#484f58", marginBottom: 10, fontStyle: "italic" },
  button: { alignSelf: "flex-start" },
  emptyState: { alignItems: "center", paddingTop: 40, gap: 8 },
  emptyText: { color: "#e6edf3", fontSize: 16, fontWeight: "600", marginTop: 8 },
  emptySub: { color: "#484f58", fontSize: 14 },
  footerNote: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 12,
    padding: 12,
    backgroundColor: "#161b22",
    borderWidth: 1,
    borderColor: "#21262d",
    borderRadius: 10,
  },
  footerText: { color: "#484f58", fontSize: 12, flex: 1 },
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
