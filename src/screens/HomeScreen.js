import React, { useMemo, useState, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { BotaoPrimario } from "../components/BotaoPrimario";
import { Card } from "../components/Card";
import { languages, roadmaps } from "../data/studyDevData";
import { useUser } from "../contexts/UserContext";
import { obterProgressoGeral, obterTodosProgressos } from "../services/progresso";

const HomeScreen = ({ navigation }) => {
  const usuario = useUser();
  const [progressoGeral, setProgressoGeral] = useState(null);
  const [progressos, setProgressos] = useState({});
  const [carregandoProgresso, setCarregandoProgresso] = useState(true);

  const stats = useMemo(
    () => ({
      linguagens: languages.length,
      trilhas: roadmaps.length,
      videos: roadmaps.reduce((acc, r) => acc + (r.content || []).filter((c) => c.type === "video").length, 0),
    }),
    []
  );

  const saudacao = useMemo(() => {
    const nome = usuario?.displayName?.split(" ")[0] || "estudante";
    const hora = new Date().getHours();
    const periodo = hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite";
    return `${periodo}, ${nome} 👋`;
  }, [usuario?.displayName]);

  const carregarProgresso = useCallback(async () => {
    setCarregandoProgresso(true);
    try {
      const uid = usuario?.uid || null;
      const geral = await obterProgressoGeral(uid, roadmaps);
      const todos = await obterTodosProgressos(uid, roadmaps);
      setProgressoGeral(geral);
      setProgressos(todos);
    } catch (e) {
      console.log("[HOME] erro progresso", e?.message);
    } finally {
      setCarregandoProgresso(false);
    }
  }, [usuario?.uid]);

  useFocusEffect(
    useCallback(() => {
      carregarProgresso();
    }, [carregarProgresso])
  );

  const recomendados = useMemo(() => {
    // 3 trilhas não iniciadas ou populares
    const naoIniciadas = roadmaps.filter((r) => {
      const p = progressos[r.id];
      return !p || !p.concluidos || p.concluidos.length === 0;
    });
    if (naoIniciadas.length >= 3) return naoIniciadas.slice(0, 3);
    return roadmaps.slice(0, 3);
  }, [progressos]);

  const suasTrilhas = useMemo(() => {
    const comProgresso = roadmaps
      .map((r) => ({ roadmap: r, prog: progressos[r.id] }))
      .filter(({ prog }) => prog && prog.concluidos && prog.concluidos.length > 0)
      .sort((a, b) => (b.prog.porcentagem || 0) - (a.prog.porcentagem || 0))
      .slice(0, 5)
      .map(({ roadmap }) => roadmap);
    if (comProgresso.length) return comProgresso;
    return roadmaps.slice(0, 5);
  }, [progressos]);

  const continuarTrilha = useMemo(() => {
    if (!progressoGeral?.trilhaAtual) return null;
    return roadmaps.find((r) => r.name === progressoGeral.trilhaAtual) || null;
  }, [progressoGeral]);

  const renderTrilhaMini = useCallback(
    ({ item }) => {
      const prog = progressos[item.id];
      const pct = prog?.porcentagem || 0;
      const total = (item.content || []).filter((c) => c.type === "video" || c.type === "link").length;
      const concluidos = prog?.concluidos?.length || 0;
      return (
        <TouchableOpacity
          style={styles.miniCard}
          onPress={() => navigation.navigate("Trilhas", { screen: "TrilhaDetalhes", params: { id: item.id } })}
          activeOpacity={0.8}
        >
          <View style={styles.miniHeader}>
            <Text style={styles.miniTitle} numberOfLines={2}>
              {item.name}
            </Text>
            <Text style={styles.miniPct}>{pct}%</Text>
          </View>
          <Text style={styles.miniDesc} numberOfLines={2}>
            {item.desc}
          </Text>
          <View style={styles.miniProgressBg}>
            <View style={[styles.miniProgressFill, { width: `${pct}%` }]} />
          </View>
          <Text style={styles.miniMeta}>
            {concluidos}/{total} concluídos
          </Text>
        </TouchableOpacity>
      );
    },
    [navigation, progressos]
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.heroSection}>
        <Text style={styles.greeting}>{saudacao}</Text>
        <Text style={styles.title}>Aprender programação{"\n"}sem complicar</Text>
        <Text style={styles.subtitle}>
          {stats.linguagens} linguagens e {stats.trilhas} trilhas organizadas{"\n"}pra você estudar no seu ritmo
        </Text>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{stats.linguagens}</Text>
            <Text style={styles.statLabel}>Linguagens</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{stats.trilhas}</Text>
            <Text style={styles.statLabel}>Trilhas</Text>
          </View>
        </View>

        <BotaoPrimario title="Começar agora" onPress={() => navigation.navigate("Trilhas")} style={styles.mainButton} />

        <TouchableOpacity onPress={() => navigation.navigate("Catálogo")}>
          <Text style={styles.linkText}>Explorar linguagens</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Recursos")}>
          <Text style={[styles.linkText, { marginBottom: 0 }]}>Ver recursos</Text>
        </TouchableOpacity>
      </View>

      {/* Progresso geral */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="analytics-outline" size={18} color="#58a6ff" />
          <Text style={styles.sectionTitleSmall}>Seu progresso</Text>
        </View>
        {carregandoProgresso ? (
          <Card style={styles.progressCard}>
            <ActivityIndicator color="#58a6ff" />
            <Text style={styles.muted}>Carregando progresso...</Text>
          </Card>
        ) : progressoGeral && progressoGeral.trilhasIniciadas > 0 ? (
          <Card style={styles.progressCard}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressPct}>{progressoGeral.porcentagemGeral}%</Text>
              <Text style={styles.progressLabel}>concluído • {progressoGeral.trilhasIniciadas}/{progressoGeral.totalTrilhas} trilhas iniciadas</Text>
            </View>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: `${progressoGeral.porcentagemGeral}%` }]} />
            </View>
            {progressoGeral.ultimaAtividade ? (
              <Text style={styles.progressMeta}>Último estudo: {progressoGeral.ultimaAtividade}</Text>
            ) : null}
            {progressoGeral.proximaAtividade ? (
              <Text style={styles.progressMeta}>Próximo: {progressoGeral.proximaAtividade}</Text>
            ) : null}
          </Card>
        ) : (
          <Card style={styles.progressCard}>
            <Text style={styles.progressEmptyTitle}>Seu progresso aparece aqui</Text>
            <Text style={styles.muted}>Escolha uma trilha e marque as aulas que já viu. A gente mostra sua evolução aqui.</Text>
            <BotaoPrimario title="Ver trilhas" small onPress={() => navigation.navigate("Trilhas")} style={{ marginTop: 12, alignSelf: "flex-start" }} />
          </Card>
        )}
      </View>

      {/* Continuar estudando */}
      {continuarTrilha && progressoGeral?.porcentagemGeral > 0 ? (
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="play-circle-outline" size={18} color="#3fb950" />
            <Text style={styles.sectionTitleSmall}>Continue estudando</Text>
          </View>
          <Card style={styles.continueCard}>
            <View style={styles.continueTop}>
              <View style={{ flex: 1 }}>
                <Text style={styles.continueTrilha}>{continuarTrilha.name}</Text>
                <Text style={styles.continueDesc} numberOfLines={2}>
                  {continuarTrilha.desc}
                </Text>
              </View>
              <View style={styles.continuePctBox}>
                <Text style={styles.continuePct}>{progressos[continuarTrilha.id]?.porcentagem || 0}%</Text>
              </View>
            </View>
            <Text style={styles.continueNext} numberOfLines={1}>
              Próximo: {progressoGeral.proximaAtividade || "Continuar trilha"}
            </Text>
            <BotaoPrimario
              title="Continuar"
              small
              onPress={() => navigation.navigate("Trilhas", { screen: "TrilhaDetalhes", params: { id: continuarTrilha.id } })}
              style={{ marginTop: 12, alignSelf: "flex-start" }}
            />
          </Card>
        </View>
      ) : null}

      {/* Suas trilhas */}
      <View style={styles.section}>
        <View style={styles.sectionHeaderRow}>
          <View style={styles.sectionHeader}>
            <Ionicons name="trail-sign-outline" size={18} color="#58a6ff" />
            <Text style={styles.sectionTitleSmall}>Suas trilhas</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Trilhas")}>
            <Text style={styles.seeAll}>Ver todas</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={suasTrilhas}
          keyExtractor={(item) => item.id}
          renderItem={renderTrilhaMini}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 12, paddingRight: 4 }}
          initialNumToRender={3}
          windowSize={5}
        />
      </View>

      {/* Recomendado */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="star-outline" size={18} color="#f0883e" />
            <Text style={styles.sectionTitleSmall}>Bom pra começar</Text>
        </View>
        <View style={{ gap: 10 }}>
          {recomendados.map((r) => {
            const total = (r.content || []).filter((c) => c.type === "video").length;
            return (
              <TouchableOpacity
                key={r.id}
                style={styles.recomendCard}
                onPress={() => navigation.navigate("Trilhas", { screen: "TrilhaDetalhes", params: { id: r.id } })}
                activeOpacity={0.8}
              >
                <View style={styles.recomendIcon}>
                  <Ionicons name="book-outline" size={18} color="#58a6ff" />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.recomendTitle} numberOfLines={1}>
                    {r.name}
                  </Text>
                  <Text style={styles.recomendDesc} numberOfLines={2}>
                    {r.desc}
                  </Text>
                  <Text style={styles.recomendMeta}>{total} vídeos • Começar agora</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color="#484f58" />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Eventos / Oportunidades / Comunidade - placeholders com estados */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="calendar-outline" size={18} color="#a371f7" />
          <Text style={styles.sectionTitleSmall}>Eventos</Text>
        </View>
        <Card style={styles.emptyCard}>
          <Ionicons name="calendar-clear-outline" size={28} color="#484f58" />
          <Text style={styles.emptyTitle}>Nada marcado por enquanto</Text>
          <Text style={styles.muted}>Quando tiver hackathon, meetup ou palestra, aparece aqui.</Text>
        </Card>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="briefcase-outline" size={18} color="#3fb950" />
          <Text style={styles.sectionTitleSmall}>Oportunidades</Text>
        </View>
        <Card style={styles.emptyCard}>
          <Ionicons name="rocket-outline" size={28} color="#484f58" />
          <Text style={styles.emptyTitle}>Sem vagas por enquanto</Text>
          <Text style={styles.muted}>Quando pintar estágio, bolsa ou outra oportunidade, você vê aqui.</Text>
        </Card>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="people-outline" size={18} color="#58a6ff" />
          <Text style={styles.sectionTitleSmall}>Comunidade</Text>
        </View>
        <Card style={styles.communityCard}>
          <Text style={styles.communityTitle}>Feito por quem estuda, pra quem estuda</Text>
          <Text style={styles.muted}>Aqui a galera compartilha o que sabe. Tire dúvidas, mostre o que fez e aprenda junto.</Text>
          <View style={styles.communityActions}>
            <TouchableOpacity style={styles.communityButton} onPress={() => navigation.navigate("Recursos")}>
              <Ionicons name="share-social-outline" size={16} color="#58a6ff" />
              <Text style={styles.communityButtonText}>Nos siga nas redes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.communityButtonSecondary} onPress={() => navigation.navigate("Catálogo")}>
              <Text style={styles.communityButtonSecondaryText}>Ver linguagens</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>

      <Text style={styles.sectionTitle}>Por que estudar aqui?</Text>

      <Card style={styles.infoCard}>
        <View style={styles.iconCircle}>
          <Ionicons name="code-slash-outline" size={20} color="#58a6ff" />
        </View>
        <Text style={styles.cardTitle}>Linguagens explicadas de verdade</Text>
        <Text style={styles.cardDesc}>
          {stats.linguagens} linguagens com explicação direta, ecossistema, quando usar e exemplo de Hello World.
        </Text>
      </Card>

      <Card style={styles.infoCard}>
        <View style={styles.iconCircle}>
          <Ionicons name="map-outline" size={20} color="#58a6ff" />
        </View>
        <Text style={styles.cardTitle}>Trilhas que fazem sentido</Text>
        <Text style={styles.cardDesc}>
          {stats.trilhas} trilhas com {stats.videos} vídeos selecionados, do básico ao avançado, com material pra praticar junto.
        </Text>
      </Card>

      <Card style={styles.infoCard}>
        <View style={styles.iconCircle}>
          <Ionicons name="flash-outline" size={20} color="#58a6ff" />
        </View>
        <Text style={styles.cardTitle}>Leve e fácil de usar</Text>
        <Text style={styles.cardDesc}>Rápido, com tema escuro e pensado pra funcionar bem no celular e no computador.</Text>
      </Card>

      <View style={styles.ctaRow}>
        <TouchableOpacity style={styles.ctaBox} onPress={() => navigation.navigate("Catálogo")}>
          <Ionicons name="library-outline" size={22} color="#58a6ff" />
          <Text style={styles.ctaTitle}>Catálogo</Text>
          <Text style={styles.ctaDesc}>{stats.linguagens} linguagens</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ctaBox} onPress={() => navigation.navigate("Trilhas")}>
          <Ionicons name="trail-sign-outline" size={22} color="#58a6ff" />
          <Text style={styles.ctaTitle}>Trilhas</Text>
          <Text style={styles.ctaDesc}>{stats.trilhas} trilhas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ctaBox} onPress={() => navigation.navigate("StudyBot")}>
          <Ionicons name="chatbubbles-outline" size={22} color="#58a6ff" />
          <Text style={styles.ctaTitle}>StudyBot</Text>
          <Text style={styles.ctaDesc}>Tire dúvidas</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0d1117" },
  content: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 40, alignItems: "center" },
  heroSection: { alignItems: "center", marginBottom: 24, width: "100%" },
  greeting: { fontSize: 14, fontWeight: "700", color: "#58a6ff", textAlign: "center", marginBottom: 6 },
  title: { fontSize: 26, fontWeight: "800", color: "#e6edf3", textAlign: "center", marginBottom: 10, lineHeight: 32 },
  subtitle: { fontSize: 13, color: "#8b949e", textAlign: "center", marginBottom: 18, lineHeight: 19 },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#161b22",
    borderWidth: 1,
    borderColor: "#21262d",
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginBottom: 18,
    width: "100%",
  },
  statBox: { flex: 1, alignItems: "center" },
  statValue: { fontSize: 22, fontWeight: "800", color: "#58a6ff" },
  statLabel: { fontSize: 11, color: "#484f58", fontWeight: "600", marginTop: 2, textTransform: "uppercase", letterSpacing: 0.5 },
  statDivider: { width: 1, height: 28, backgroundColor: "#21262d", marginHorizontal: 8 },
  mainButton: { width: "100%", marginBottom: 16 },
  linkText: { color: "#e6edf3", fontSize: 15, fontWeight: "600", textDecorationLine: "underline", marginBottom: 12 },
  section: { width: "100%", marginBottom: 20 },
  sectionHeader: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 12 },
  sectionHeaderRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 12 },
  sectionTitleSmall: { fontSize: 16, fontWeight: "700", color: "#e6edf3" },
  seeAll: { color: "#58a6ff", fontSize: 13, fontWeight: "600" },
  progressCard: { padding: 16, gap: 8 },
  progressHeader: { flexDirection: "row", alignItems: "baseline", gap: 8 },
  progressPct: { fontSize: 28, fontWeight: "800", color: "#3fb950" },
  progressLabel: { fontSize: 12, color: "#8b949e", fontWeight: "600" },
  progressBarBg: { height: 8, backgroundColor: "#0d1117", borderRadius: 4, overflow: "hidden", borderWidth: 1, borderColor: "#21262d" },
  progressBarFill: { height: "100%", backgroundColor: "#3fb950", borderRadius: 4 },
  progressMeta: { fontSize: 12, color: "#8b949e", marginTop: 2 },
  progressEmptyTitle: { fontSize: 15, fontWeight: "700", color: "#e6edf3", marginBottom: 4 },
  muted: { fontSize: 13, color: "#8b949e", lineHeight: 19, textAlign: "center" },
  continueCard: { padding: 16 },
  continueTop: { flexDirection: "row", gap: 12 },
  continueTrilha: { fontSize: 15, fontWeight: "700", color: "#e6edf3", marginBottom: 4 },
  continueDesc: { fontSize: 12, color: "#8b949e", lineHeight: 17 },
  continuePctBox: { backgroundColor: "#0d1117", borderWidth: 1, borderColor: "#21262d", borderRadius: 10, paddingHorizontal: 12, paddingVertical: 8, alignItems: "center", justifyContent: "center" },
  continuePct: { color: "#3fb950", fontSize: 14, fontWeight: "800" },
  continueNext: { fontSize: 12, color: "#58a6ff", marginTop: 8, fontWeight: "600" },
  miniCard: {
    width: 220,
    backgroundColor: "#161b22",
    borderWidth: 1,
    borderColor: "#21262d",
    borderRadius: 14,
    padding: 14,
    gap: 8,
  },
  miniHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", gap: 8 },
  miniTitle: { flex: 1, fontSize: 14, fontWeight: "700", color: "#e6edf3", lineHeight: 18 },
  miniPct: { fontSize: 12, fontWeight: "800", color: "#3fb950", backgroundColor: "#0d1117", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8, borderWidth: 1, borderColor: "#21262d" },
  miniDesc: { fontSize: 11, color: "#8b949e", lineHeight: 15, minHeight: 30 },
  miniProgressBg: { height: 6, backgroundColor: "#0d1117", borderRadius: 3, overflow: "hidden", borderWidth: 1, borderColor: "#21262d" },
  miniProgressFill: { height: "100%", backgroundColor: "#58a6ff" },
  miniMeta: { fontSize: 11, color: "#484f58", fontWeight: "600" },
  recomendCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#161b22",
    borderWidth: 1,
    borderColor: "#21262d",
    borderRadius: 14,
    padding: 14,
  },
  recomendIcon: { width: 36, height: 36, borderRadius: 10, backgroundColor: "#1f6feb18", borderWidth: 1, borderColor: "#58a6ff22", alignItems: "center", justifyContent: "center" },
  recomendTitle: { fontSize: 14, fontWeight: "700", color: "#e6edf3" },
  recomendDesc: { fontSize: 11, color: "#8b949e", lineHeight: 15, marginTop: 2 },
  recomendMeta: { fontSize: 11, color: "#58a6ff", fontWeight: "600", marginTop: 4 },
  emptyCard: { alignItems: "center", paddingVertical: 18, gap: 8 },
  emptyTitle: { fontSize: 14, fontWeight: "700", color: "#e6edf3", marginTop: 6 },
  communityCard: { padding: 16, gap: 10 },
  communityTitle: { fontSize: 15, fontWeight: "700", color: "#e6edf3" },
  communityActions: { flexDirection: "row", gap: 10, marginTop: 4 },
  communityButton: { flexDirection: "row", gap: 6, backgroundColor: "#1f6feb18", borderWidth: 1, borderColor: "#58a6ff33", paddingHorizontal: 14, paddingVertical: 9, borderRadius: 10, alignItems: "center" },
  communityButtonText: { color: "#58a6ff", fontSize: 13, fontWeight: "700" },
  communityButtonSecondary: { backgroundColor: "#0d1117", borderWidth: 1, borderColor: "#21262d", paddingHorizontal: 14, paddingVertical: 9, borderRadius: 10 },
  communityButtonSecondaryText: { color: "#e6edf3", fontSize: 13, fontWeight: "600" },
  sectionTitle: { fontSize: 20, fontWeight: "700", color: "#e6edf3", marginBottom: 16, alignSelf: "center" },
  infoCard: { width: "100%", marginBottom: 12, alignItems: "center", paddingVertical: 20, paddingHorizontal: 16 },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1f6feb18",
    borderWidth: 1,
    borderColor: "#58a6ff22",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  cardTitle: { fontSize: 15, fontWeight: "700", color: "#e6edf3", marginBottom: 8, textAlign: "center" },
  cardDesc: { fontSize: 13, color: "#8b949e", textAlign: "center", lineHeight: 19 },
  ctaRow: { flexDirection: "row", gap: 10, width: "100%", marginTop: 8 },
  ctaBox: {
    flex: 1,
    backgroundColor: "#161b22",
    borderWidth: 1,
    borderColor: "#21262d",
    borderRadius: 14,
    padding: 14,
    alignItems: "center",
    gap: 4,
  },
  ctaTitle: { color: "#e6edf3", fontSize: 13, fontWeight: "700", marginTop: 4 },
  ctaDesc: { color: "#484f58", fontSize: 11, fontWeight: "600" },
});
