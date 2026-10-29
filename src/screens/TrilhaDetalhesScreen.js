import React, { useMemo, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  useWindowDimensions,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import YoutubeIframe from "react-native-youtube-iframe";
import { useFocusEffect } from "@react-navigation/native";
import { Card } from "../components/Card";
import { BotaoPrimario } from "../components/BotaoPrimario";
import { roadmaps } from "../data/studyDevData";
import { extractVideoId, toWatchUrl } from "../utils/youtube";
import { useUser } from "../contexts/UserContext";
import { obterProgresso, alternarConclusao } from "../services/progresso";

function getRoadmapById(id) {
  return roadmaps.find((r) => r.id === id);
}

const TrilhaDetalhesScreen = ({ route, navigation }) => {
  const params = route.params || {};
  const roadmapId = params.id || params.trilhaId || params.roadmapId;
  const fallbackTitle = params.titulo || params.title || "Trilha";

  const roadmap = useMemo(() => getRoadmapById(roadmapId), [roadmapId]);

  const videos = useMemo(() => {
    if (!roadmap) return [];
    return (roadmap.content || []).filter((c) => c.type === "video");
  }, [roadmap]);

  const links = useMemo(() => {
    if (!roadmap) return [];
    return (roadmap.content || []).filter((c) => c.type === "link");
  }, [roadmap]);

  const texts = useMemo(() => {
    if (!roadmap) return [];
    return (roadmap.content || []).filter((c) => c.type === "text");
  }, [roadmap]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { width: screenWidth } = useWindowDimensions();
  const usuario = useUser();
  const [progresso, setProgresso] = useState({ concluidos: [], porcentagem: 0, proximaAtividade: null });
  const [salvando, setSalvando] = useState(false);

  if (!roadmap) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#8b949e" />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Trilha não encontrada</Text>
        <Text style={styles.subtitle}>ID: {String(roadmapId)}</Text>
      </ScrollView>
    );
  }

  const currentVideo = videos[currentIdx];
  const total = videos.length;
  const videoId = useMemo(() => extractVideoId(currentVideo?.url), [currentVideo?.url]);
  const playerWidth = useMemo(() => Math.min(screenWidth - 88, 640), [screenWidth]);
  const playerHeight = useMemo(() => Math.round((playerWidth * 9) / 16), [playerWidth]);

  const handlePrev = useCallback(() => {
    setPlaying(false);
    setIsReady(false);
    setHasError(false);
    setCurrentIdx((i) => (i === 0 ? total - 1 : i - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setPlaying(false);
    setIsReady(false);
    setHasError(false);
    setCurrentIdx((i) => (i === total - 1 ? 0 : i + 1));
  }, [total]);

  const handleSelectVideo = useCallback((idx) => {
    if (idx === currentIdx) return;
    setPlaying(false);
    setIsReady(false);
    setHasError(false);
    setCurrentIdx(idx);
  }, [currentIdx]);

  const carregarProgresso = useCallback(async () => {
    if (!roadmap) return;
    const p = await obterProgresso(usuario?.uid || null, roadmap.id);
    setProgresso(p);
  }, [usuario?.uid, roadmap?.id]);

  useFocusEffect(
    useCallback(() => {
      carregarProgresso();
    }, [carregarProgresso])
  );

  const handleToggleConcluido = useCallback(
    async (contentId) => {
      if (!roadmap || salvando) return;
      setSalvando(true);
      try {
        const novo = await alternarConclusao(usuario?.uid || null, roadmap, contentId);
        setProgresso(novo);
      } catch (e) {
        console.log("[TRILHA] erro progresso", e?.message);
      } finally {
        setSalvando(false);
      }
    },
    [usuario?.uid, roadmap, salvando]
  );

  const handleOpen = async (url) => {
    try {
      const watch = toWatchUrl(url);
      const can = await Linking.canOpenURL(watch);
      if (can) await Linking.openURL(watch);
    } catch {}
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={20} color="#8b949e" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{roadmap.name || fallbackTitle}</Text>
      <Text style={styles.subtitle}>{roadmap.desc}</Text>

      {total > 0 ? (
        <View style={styles.playerSection}>
          <View style={styles.videoWrapper}>
            <TouchableOpacity
              style={styles.arrowButton}
              onPress={handlePrev}
              disabled={total <= 1}
              accessibilityLabel="Vídeo anterior"
              accessibilityRole="button"
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Ionicons name="chevron-back" size={20} color="#e6edf3" />
            </TouchableOpacity>

            <View style={styles.videoContainer}>
              <View style={styles.playerBox}>
                {videoId ? (
                  <>
                    <YoutubeIframe
                      height={playerHeight}
                      width={playerWidth}
                      play={playing}
                      videoId={videoId}
                      onChangeState={(state) => {
                        if (state === "ended") setPlaying(false);
                        else if (state === "playing") setPlaying(true);
                        else if (state === "paused") setPlaying(false);
                      }}
                      onReady={() => setIsReady(true)}
                      onError={() => setHasError(true)}
                      initialPlayerParams={{
                        controls: true,
                        modestbranding: true,
                        rel: false,
                        showClosedCaptions: false,
                      }}
                      webViewProps={{
                        allowsFullscreenVideo: true,
                      }}
                    />
                    {!isReady && !hasError && (
                      <View style={styles.loadingOverlay} pointerEvents="none">
                        <ActivityIndicator size="large" color="#58a6ff" />
                        <Text style={styles.loadingText}>Carregando vídeo...</Text>
                      </View>
                    )}
                    {hasError && (
                      <View style={styles.errorOverlay}>
                        <Ionicons name="alert-circle-outline" size={28} color="#f85149" />
                        <Text style={styles.errorText}>Esse vídeo não carregou.</Text>
                        <TouchableOpacity
                          style={styles.errorButton}
                          onPress={() => handleOpen(currentVideo?.url)}
                        >
                          <Text style={styles.errorButtonText}>Abrir no YouTube</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </>
                ) : (
                  <View style={styles.errorOverlay}>
                    <Ionicons name="videocam-off-outline" size={28} color="#484f58" />
                    <Text style={styles.errorText}>Não encontramos o ID desse vídeo.</Text>
                    <Text style={styles.errorSubText} numberOfLines={2}>
                      {currentVideo?.url}
                    </Text>
                  </View>
                )}
              </View>
              <Text style={styles.videoTitle} numberOfLines={2}>
                {currentVideo?.name || "Vídeo"}
              </Text>
              <Text style={styles.videoIndex}>
                Aula {currentIdx + 1} de {total}
                {videoId ? ` • ${videoId}` : ""}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.arrowButton}
              onPress={handleNext}
              disabled={total <= 1}
              accessibilityLabel="Próximo vídeo"
              accessibilityRole="button"
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Ionicons name="chevron-forward" size={20} color="#e6edf3" />
            </TouchableOpacity>
          </View>

          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${((currentIdx + 1) / total) * 100}%` }]} />
          </View>

          {/* Onde está → O que fez → Próximo */}
          {(() => {
            const totalConteudos = (roadmap.content || []).filter((c) => c.type === "video" || c.type === "link").length;
            const concluidos = progresso.concluidos?.length || 0;
            const pendentes = Math.max(totalConteudos - concluidos, 0);
            const pct = progresso.porcentagem || 0;
            const isAtualConcluido = progresso.concluidos?.includes(currentVideo?.url);
            return (
              <>
                <Card style={styles.progressSummary}>
                  <View style={styles.progressSummaryHeader}>
                    <Ionicons name="stats-chart-outline" size={16} color="#58a6ff" />
                    <Text style={styles.progressSummaryTitle}>Seu progresso</Text>
                    <Text style={styles.progressSummaryPct}>{pct}%</Text>
                  </View>
                  <View style={styles.progressSummaryBarBg}>
                    <View style={[styles.progressSummaryBarFill, { width: `${pct}%` }]} />
                  </View>
                  <View style={styles.progressSummaryRow}>
                    <Text style={styles.progressSummaryMeta}>
                      {concluidos}/{totalConteudos} concluídos • {pendentes} pendentes
                    </Text>
                    <Text style={styles.progressSummaryMeta}>Aula {currentIdx + 1}/{total}</Text>
                  </View>
                  <View style={styles.progressSteps}>
                    <View style={styles.stepItem}>
                      <Text style={styles.stepLabel}>Onde está</Text>
                      <Text style={styles.stepValue} numberOfLines={1}>
                        {currentVideo?.name?.slice(0, 28) || "—"}
                      </Text>
                    </View>
                    <View style={styles.stepDivider} />
                    <View style={styles.stepItem}>
                      <Text style={styles.stepLabel}>O que fez</Text>
                      <Text style={styles.stepValue}>{concluidos} concluídos</Text>
                    </View>
                    <View style={styles.stepDivider} />
                    <View style={styles.stepItem}>
                      <Text style={styles.stepLabel}>Próximo</Text>
                      <Text style={styles.stepValue} numberOfLines={1}>
                        {progresso.proximaAtividade || "—"}
                      </Text>
                    </View>
                  </View>
                </Card>

                <View style={styles.actionRow}>
                  <TouchableOpacity
                    style={[styles.concluirButton, isAtualConcluido && styles.concluirButtonDone]}
                    onPress={() => handleToggleConcluido(currentVideo?.url)}
                    disabled={salvando}
                    activeOpacity={0.8}
                  >
                    <Ionicons name={isAtualConcluido ? "checkmark-circle" : "ellipse-outline"} size={18} color={isAtualConcluido ? "#fff" : "#e6edf3"} />
                    <Text style={[styles.concluirText, isAtualConcluido && styles.concluirTextDone]}>
                      {isAtualConcluido ? "Concluído ✓" : "Marcar como visto"}
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.actionHint}>{isAtualConcluido ? "Toque pra desfazer" : "Salvo automaticamente"}</Text>
                </View>
              </>
            );
          })()}

          <View style={styles.videoListHeader}>
            <Text style={styles.sectionTitle}>Conteúdo ({total} vídeos)</Text>
            <Text style={styles.sectionSubtitle}>
              {currentIdx + 1}/{total} — {currentVideo?.name?.slice(0, 40)}
            </Text>
          </View>

          <FlatList
            data={videos}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.videoListScroll}
            contentContainerStyle={styles.videoListContent}
            keyExtractor={(item, idx) => `${item.url}-${idx}`}
            renderItem={({ item: v, index: idx }) => (
              <TouchableOpacity
                style={[styles.videoThumb, idx === currentIdx && styles.videoThumbActive]}
                onPress={() => handleSelectVideo(idx)}
              >
                <View style={styles.thumbIcon}>
                  <Ionicons name="play" size={12} color={idx === currentIdx ? "#fff" : "#8b949e"} />
                </View>
                <Text style={[styles.thumbText, idx === currentIdx && styles.thumbTextActive]} numberOfLines={2}>
                  {idx + 1}. {v.name}
                </Text>
              </TouchableOpacity>
            )}
            initialNumToRender={6}
            maxToRenderPerBatch={6}
            windowSize={5}
            removeClippedSubviews
            getItemLayout={(_, index) => ({ length: 148, offset: 148 * index, index })}
          />

          <View style={styles.fullList}>
            {videos.map((v, idx) => {
              const isDone = progresso.concluidos?.includes(v.url);
              return (
                <View key={`list-${v.url}-${idx}`} style={[styles.listItem, idx === currentIdx && styles.listItemActive, isDone && styles.listItemDone]}>
                  <TouchableOpacity
                    style={[styles.checkBox, isDone && styles.checkBoxDone]}
                    onPress={() => handleToggleConcluido(v.url)}
                    disabled={salvando}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  >
                    <Ionicons name={isDone ? "checkmark" : "ellipse-outline"} size={14} color={isDone ? "#fff" : "#8b949e"} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flex: 1, flexDirection: "row", alignItems: "center", gap: 12 }} onPress={() => handleSelectVideo(idx)} activeOpacity={0.7}>
                    <View style={[styles.listIndex, idx === currentIdx && styles.listIndexActive]}>
                      <Text style={[styles.listIndexText, idx === currentIdx && styles.listIndexTextActive]}>{idx + 1}</Text>
                    </View>
                    <Text
                      style={[styles.listTitle, idx === currentIdx && styles.listTitleActive, isDone && styles.listTitleDone]}
                      numberOfLines={2}
                    >
                      {v.name}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleSelectVideo(idx)} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                    <Ionicons name={idx === currentIdx ? "play-circle" : "chevron-forward"} size={18} color={idx === currentIdx ? "#58a6ff" : "#30363d"} />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      ) : (
        <Card style={styles.emptyCard}>
          <Ionicons name="videocam-off-outline" size={32} color="#484f58" />
          <Text style={styles.emptyText}>Essa trilha ainda não tem vídeos.</Text>
        </Card>
      )}

      {links.length > 0 && (
        <>
          <Text style={styles.sectionTitle}>Materiais de apoio</Text>
          {links.map((l, idx) => (
            <Card key={`link-${idx}`} style={styles.materialCard}>
              <View style={styles.materialHeader}>
                <Ionicons name="link-outline" size={20} color="#58a6ff" />
                <Text style={styles.materialTitle}>{l.name}</Text>
              </View>
              <BotaoPrimario
                title="Acessar"
                small
                onPress={() => handleOpen(l.url)}
                style={styles.acessarButton}
              />
            </Card>
          ))}
        </>
      )}

      {texts.length > 0 && (
        <>
          <Text style={styles.sectionTitle}>Conteúdo extra</Text>
          {texts.map((t, idx) => (
            <Card key={`text-${idx}`} style={styles.textCard}>
              <Text style={styles.textContent}>{t.value || t.name || t.text}</Text>
            </Card>
          ))}
        </>
      )}

      {videos.length === 0 && links.length === 0 && texts.length === 0 && (
        <View style={styles.mutedNote}>
          <Text style={styles.mutedText}>Estamos preparando mais conteúdos pra essa trilha.</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default TrilhaDetalhesScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0d1117" },
  content: { padding: 20, paddingBottom: 40 },
  backButton: { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 16 },
  backText: { color: "#8b949e", fontSize: 15, fontWeight: "500" },
  title: { fontSize: 24, fontWeight: "800", color: "#e6edf3", marginBottom: 8, lineHeight: 32 },
  subtitle: { fontSize: 14, color: "#8b949e", lineHeight: 21, marginBottom: 20 },
  playerSection: { marginBottom: 24 },
  videoWrapper: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 12 },
  arrowButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#161b22",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#21262d",
  },
  videoContainer: { flex: 1, marginHorizontal: 10 },
  playerBox: {
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: "#000",
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#21262d",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(13,17,23,0.92)",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  loadingText: { color: "#8b949e", fontSize: 12, fontWeight: "600", marginTop: 4 },
  errorOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#161b22",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 8,
  },
  errorText: { color: "#f85149", fontSize: 13, fontWeight: "600", textAlign: "center" },
  errorSubText: { color: "#484f58", fontSize: 11, textAlign: "center" },
  errorButton: {
    marginTop: 8,
    backgroundColor: "#21262d",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#30363d",
  },
  errorButtonText: { color: "#e6edf3", fontSize: 12, fontWeight: "700" },
  videoPlaceholder: {
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: "#161b22",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#21262d",
    padding: 16,
  },
  videoTitle: { color: "#e6edf3", fontSize: 13, fontWeight: "600", marginTop: 10, textAlign: "center", lineHeight: 18 },
  videoIndex: { color: "#484f58", fontSize: 11, marginTop: 6, fontWeight: "600", textAlign: "center" },
  watchButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#ff0000",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 12,
  },
  watchText: { color: "#fff", fontSize: 13, fontWeight: "700" },
  progressBar: {
    height: 4,
    backgroundColor: "#21262d",
    borderRadius: 2,
    overflow: "hidden",
    marginHorizontal: 46,
    marginBottom: 18,
  },
  progressFill: { height: "100%", backgroundColor: "#58a6ff", borderRadius: 2 },
  videoListHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "700", color: "#e6edf3", marginBottom: 6 },
  sectionSubtitle: { fontSize: 11, color: "#484f58", maxWidth: 140, textAlign: "right" },
  videoListScroll: { marginBottom: 14 },
  videoListContent: { gap: 8, paddingRight: 20 },
  videoThumb: {
    width: 140,
    backgroundColor: "#161b22",
    borderWidth: 1,
    borderColor: "#21262d",
    borderRadius: 10,
    padding: 10,
    gap: 6,
  },
  videoThumbActive: { backgroundColor: "#1f6feb22", borderColor: "#58a6ff55" },
  thumbIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#0d1117",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#21262d",
  },
  thumbText: { color: "#8b949e", fontSize: 11, lineHeight: 15, fontWeight: "500" },
  thumbTextActive: { color: "#e6edf3", fontWeight: "700" },
  fullList: { gap: 8 },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#161b22",
    borderWidth: 1,
    borderColor: "#21262d",
    borderRadius: 10,
    padding: 12,
  },
  listItemActive: { backgroundColor: "#1f6feb14", borderColor: "#58a6ff33" },
  listIndex: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#0d1117",
    borderWidth: 1,
    borderColor: "#21262d",
    alignItems: "center",
    justifyContent: "center",
  },
  listIndexActive: { backgroundColor: "#58a6ff", borderColor: "#58a6ff" },
  listIndexText: { color: "#8b949e", fontSize: 12, fontWeight: "700" },
  listIndexTextActive: { color: "#0d1117" },
  listTitle: { flex: 1, color: "#8b949e", fontSize: 13, lineHeight: 18 },
  listTitleActive: { color: "#e6edf3", fontWeight: "600" },
  emptyCard: { alignItems: "center", padding: 28, gap: 12 },
  emptyText: { color: "#484f58", fontSize: 14, textAlign: "center", marginTop: 8 },
  materialCard: { alignItems: "flex-start", padding: 16, marginBottom: 10 },
  materialHeader: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 12 },
  materialTitle: { color: "#e6edf3", fontSize: 14, fontWeight: "600", flex: 1 },
  acessarButton: { alignSelf: "flex-start" },
  textCard: { padding: 16, marginBottom: 10 },
  textContent: { color: "#8b949e", fontSize: 14, lineHeight: 21 },
  mutedNote: { marginTop: 10, padding: 16, backgroundColor: "#161b22", borderWidth: 1, borderColor: "#21262d", borderRadius: 10 },
  mutedText: { color: "#484f58", fontSize: 13, textAlign: "center" },
  progressSummary: { backgroundColor: "#161b22", borderWidth: 1, borderColor: "#21262d", borderRadius: 14, padding: 16, gap: 10, marginBottom: 14 },
  progressSummaryHeader: { flexDirection: "row", alignItems: "center", gap: 8 },
  progressSummaryTitle: { flex: 1, fontSize: 14, fontWeight: "700", color: "#e6edf3" },
  progressSummaryPct: { fontSize: 16, fontWeight: "800", color: "#3fb950" },
  progressSummaryBarBg: { height: 6, backgroundColor: "#0d1117", borderRadius: 3, overflow: "hidden", borderWidth: 1, borderColor: "#21262d" },
  progressSummaryBarFill: { height: "100%", backgroundColor: "#3fb950" },
  progressSummaryRow: { flexDirection: "row", justifyContent: "space-between", gap: 8 },
  progressSummaryMeta: { fontSize: 11, color: "#8b949e", fontWeight: "600" },
  progressSteps: { flexDirection: "row", gap: 8, marginTop: 4 },
  stepItem: { flex: 1, backgroundColor: "#0d1117", borderWidth: 1, borderColor: "#21262d", borderRadius: 10, padding: 10, gap: 4 },
  stepLabel: { fontSize: 10, fontWeight: "700", color: "#484f58", textTransform: "uppercase", letterSpacing: 0.5 },
  stepValue: { fontSize: 12, fontWeight: "600", color: "#e6edf3", lineHeight: 16 },
  stepDivider: { width: 1, backgroundColor: "#21262d", marginVertical: 4 },
  actionRow: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 14 },
  concluirButton: { flexDirection: "row", gap: 6, backgroundColor: "#238636", paddingHorizontal: 16, paddingVertical: 10, borderRadius: 10, alignItems: "center", borderWidth: 1, borderColor: "#2ea043" },
  concluirButtonDone: { backgroundColor: "#21262d", borderColor: "#30363d" },
  concluirText: { color: "#fff", fontSize: 13, fontWeight: "700" },
  concluirTextDone: { color: "#8b949e" },
  actionHint: { fontSize: 11, color: "#484f58", flex: 1 },
  checkBox: { width: 26, height: 26, borderRadius: 13, backgroundColor: "#0d1117", borderWidth: 1, borderColor: "#30363d", alignItems: "center", justifyContent: "center" },
  checkBoxDone: { backgroundColor: "#238636", borderColor: "#2ea043" },
  listItemDone: { opacity: 0.85, borderColor: "#23863633" },
  listTitleDone: { color: "#8b949e", textDecorationLine: "line-through" },
});
