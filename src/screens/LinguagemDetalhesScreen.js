import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { languages, aboutDetails } from "../data/studyDevData";

const SectionCard = ({ title, children, icon }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      {icon && <Ionicons name={icon} size={18} color="#58a6ff" style={{ marginRight: 8 }} />}
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
    {children}
  </View>
);

const TagList = ({ items, variant }) => {
  if (!items || items.length === 0) return <Text style={styles.mutedText}>Nada cadastrado por enquanto</Text>;
  return (
    <View style={styles.tagsRow}>
      {items.map((tag) => (
        <View key={tag} style={[styles.tag, variant === "primary" && styles.tagPrimary]}>
          <Text style={[styles.tagText, variant === "primary" && styles.tagTextPrimary]}>{tag}</Text>
        </View>
      ))}
    </View>
  );
};

const BulletList = ({ items }) => (
  <View style={styles.bulletList}>
    {items.map((item, idx) => (
      <View key={idx} style={styles.bulletItem}>
        <View style={styles.bulletDot} />
        <Text style={styles.bulletText}>{item}</Text>
      </View>
    ))}
  </View>
);

const LinguagemDetalhesScreen = ({ route, navigation }) => {
  const paramLang = route.params?.linguagem;
  const paramId = route.params?.id;

  const linguagem = useMemo(() => {
    const id = paramId || paramLang?.id || "java";
    const found = languages.find((l) => l.id === id);
    if (found) return found;
    // fallback: se veio objeto legado sem id match, tenta usar paramLang
    if (paramLang && paramLang.nome) {
      return {
        id: paramLang.id || "unknown",
        name: paramLang.nome || paramLang.name,
        desc: paramLang.desc,
        ecosystem: paramLang.ecossistema || paramLang.ecosystem || [],
        paradigms: Array.isArray(paramLang.paradigms)
          ? paramLang.paradigms
          : (paramLang.paradigmas || "").split(",").map((s) => s.trim()).filter(Boolean),
        typing: paramLang.tipagem || paramLang.typing,
        year: paramLang.ano || paramLang.year,
        creators: Array.isArray(paramLang.creators)
          ? paramLang.creators
          : (paramLang.criadores || "").split(",").map((s) => s.trim()).filter(Boolean),
        runtime: paramLang.runtime,
        use_cases: paramLang.use_cases || [],
        hello_world: paramLang.hello_world,
        docs: paramLang.docs,
        site: paramLang.site,
      };
    }
    // ultimate fallback: java entry
    return (
      languages.find((l) => l.id === "java") || {
        name: "Java",
        desc: "Backend, Android e sistemas corporativos.",
        ecosystem: ["Spring", "Quarkus", "Micronaut"],
        paradigms: ["OO", "Imperativa"],
        year: "1995",
        runtime: "JVM",
        typing: "Estática",
        creators: ["James Gosling"],
      }
    );
  }, [paramId, paramLang]);

  const about = aboutDetails[linguagem.id];

  const handleOpenUrl = async (url) => {
    if (!url) return;
    try {
      const can = await Linking.canOpenURL(url);
      if (can) await Linking.openURL(url);
    } catch {}
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={20} color="#8b949e" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.hero}>
        <Text style={styles.title}>{linguagem.name || linguagem.nome}</Text>
        <Text style={styles.subtitle}>{linguagem.desc}</Text>

        <View style={styles.heroMeta}>
          {(Array.isArray(linguagem.paradigms) ? linguagem.paradigms : []).slice(0, 3).map((p) => (
            <View key={p} style={styles.heroBadge}>
              <Text style={styles.heroBadgeText}>{p}</Text>
            </View>
          ))}
          <View style={styles.heroBadgeDark}>
            <Text style={styles.heroBadgeDarkText}>{linguagem.typing || linguagem.tipagem}</Text>
          </View>
        </View>
      </View>

      <SectionCard title="Ecossistema" icon="layers-outline">
        <TagList items={linguagem.ecosystem || linguagem.ecossistema} />
      </SectionCard>

      <SectionCard title="Ficha técnica" icon="information-circle-outline">
        <View style={styles.metaGrid}>
          <View style={styles.metaBox}>
            <Text style={styles.metaLabel}>Paradigmas</Text>
            <Text style={styles.metaValue}>
              {Array.isArray(linguagem.paradigms)
                ? linguagem.paradigms.join(", ")
                : linguagem.paradigmas || linguagem.paradigmas}
            </Text>
          </View>
          <View style={styles.metaBoxSmall}>
            <Text style={styles.metaLabel}>Ano</Text>
            <Text style={styles.metaValue}>{linguagem.year || linguagem.ano}</Text>
          </View>
        </View>
        <View style={styles.metaGrid}>
          <View style={styles.metaBoxSmall}>
            <Text style={styles.metaLabel}>Runtime</Text>
            <Text style={styles.metaValue}>{linguagem.runtime}</Text>
          </View>
          <View style={styles.metaBoxSmall}>
            <Text style={styles.metaLabel}>Tipagem</Text>
            <Text style={styles.metaValue}>{linguagem.typing || linguagem.tipagem}</Text>
          </View>
        </View>
        <View style={styles.metaBoxFull}>
          <Text style={styles.metaLabel}>Criadores</Text>
          <Text style={styles.metaValue}>
            {Array.isArray(linguagem.creators)
              ? linguagem.creators.join(", ")
              : linguagem.creators || linguagem.criadores}
          </Text>
        </View>
      </SectionCard>

      {(linguagem.use_cases || []).length > 0 && (
        <SectionCard title="Casos de Uso" icon="rocket-outline">
          <TagList items={linguagem.use_cases} variant="primary" />
        </SectionCard>
      )}

      {(linguagem.docs || linguagem.site) && (
        <SectionCard title="Links Oficiais" icon="link-outline">
          <View style={styles.actionsRow}>
            {linguagem.docs ? (
              <TouchableOpacity style={styles.primaryButton} onPress={() => handleOpenUrl(linguagem.docs)}>
                <Ionicons name="book-outline" size={16} color="#0d172a" />
                <Text style={styles.primaryButtonText}>Documentação</Text>
              </TouchableOpacity>
            ) : null}
            {linguagem.site ? (
              <TouchableOpacity style={styles.ghostButton} onPress={() => handleOpenUrl(linguagem.site)}>
                <Ionicons name="globe-outline" size={16} color="#e6edf3" />
                <Text style={styles.ghostButtonText}>Site Oficial</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </SectionCard>
      )}

      {linguagem.hello_world?.code && (
        <SectionCard title={`Hello, World em ${linguagem.hello_world.language}`} icon="code-slash-outline">
          <View style={styles.codeBox}>
            <Text style={styles.codeText}>{linguagem.hello_world.code}</Text>
          </View>
        </SectionCard>
      )}

      {about ? (
        <>
          {about.strengths?.length ? (
            <SectionCard title="Pontos fortes" icon="star-outline">
              <BulletList items={about.strengths} />
            </SectionCard>
          ) : null}
          {about.weaknesses?.length ? (
            <SectionCard title="Limitações" icon="warning-outline">
              <BulletList items={about.weaknesses} />
            </SectionCard>
          ) : null}
          {about.when_to_use?.length ? (
            <SectionCard title="Quando usar" icon="checkmark-circle-outline">
              <BulletList items={about.when_to_use} />
            </SectionCard>
          ) : null}
          {about.best_practices?.length ? (
            <SectionCard title="Boas práticas" icon="bulb-outline">
              <BulletList items={about.best_practices} />
            </SectionCard>
          ) : null}
          {about.pitfalls?.length ? (
            <SectionCard title="Armadilhas comuns" icon="alert-circle-outline">
              <BulletList items={about.pitfalls} />
            </SectionCard>
          ) : null}
          {about.stack?.length ? (
            <SectionCard title="Stack típico" icon="construct-outline">
              <TagList items={about.stack} variant="primary" />
            </SectionCard>
          ) : null}
        </>
      ) : (
        <View style={styles.mutedCard}>
          <Ionicons name="information-circle-outline" size={20} color="#484f58" />
          <Text style={styles.mutedCardText}>Ainda estamos preparando os detalhes dessa linguagem.</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default LinguagemDetalhesScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0d1117" },
  content: { padding: 20, paddingBottom: 40 },
  backButton: { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 16 },
  backText: { color: "#8b949e", fontSize: 15, fontWeight: "500" },
  hero: { marginBottom: 20 },
  title: { fontSize: 28, fontWeight: "800", color: "#e6edf3", marginBottom: 8 },
  subtitle: { fontSize: 15, color: "#8b949e", lineHeight: 22, marginBottom: 14 },
  heroMeta: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  heroBadge: {
    backgroundColor: "#1f6feb22",
    borderWidth: 1,
    borderColor: "#58a6ff33",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  heroBadgeText: { color: "#58a6ff", fontSize: 12, fontWeight: "600" },
  heroBadgeDark: {
    backgroundColor: "#161b22",
    borderWidth: 1,
    borderColor: "#21262d",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  heroBadgeDarkText: { color: "#8b949e", fontSize: 12, fontWeight: "600" },
  card: {
    backgroundColor: "#161b22",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#21262d",
    padding: 18,
    marginBottom: 16,
  },
  cardHeader: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  cardTitle: { fontSize: 16, fontWeight: "700", color: "#e6edf3" },
  tagsRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  tag: {
    backgroundColor: "#0d1117",
    borderWidth: 1,
    borderColor: "#21262d",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  tagPrimary: { backgroundColor: "#58a6ff14", borderColor: "#58a6ff33" },
  tagText: { color: "#8b949e", fontSize: 13, fontWeight: "500" },
  tagTextPrimary: { color: "#58a6ff" },
  mutedText: { color: "#484f58", fontSize: 14, fontStyle: "italic" },
  metaGrid: { flexDirection: "row", gap: 10, marginBottom: 10 },
  metaBox: {
    flex: 1.5,
    backgroundColor: "#0d1117",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#21262d",
  },
  metaBoxSmall: {
    flex: 1,
    backgroundColor: "#0d1117",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#21262d",
  },
  metaBoxFull: {
    backgroundColor: "#0d1117",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#21262d",
  },
  metaLabel: { fontSize: 11, fontWeight: "700", color: "#8b949e", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 },
  metaValue: { fontSize: 13, color: "#e6edf3", lineHeight: 18 },
  actionsRow: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  primaryButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#58a6ff",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
  },
  primaryButtonText: { color: "#0d172a", fontSize: 14, fontWeight: "700" },
  ghostButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#0d1117",
    borderWidth: 1,
    borderColor: "#30363d",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
  },
  ghostButtonText: { color: "#e6edf3", fontSize: 14, fontWeight: "600" },
  codeBox: {
    backgroundColor: "#0d1117",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#21262d",
    padding: 14,
  },
  codeText: { color: "#e6edf3", fontFamily: "monospace", fontSize: 12, lineHeight: 18 },
  bulletList: { gap: 10 },
  bulletItem: { flexDirection: "row", gap: 10, alignItems: "flex-start" },
  bulletDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: "#58a6ff", marginTop: 7, flexShrink: 0 },
  bulletText: { flex: 1, color: "#c9d1d9", fontSize: 14, lineHeight: 20 },
  mutedCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#161b2211",
    borderWidth: 1,
    borderColor: "#21262d",
    borderStyle: "dashed",
    borderRadius: 12,
    padding: 16,
  },
  mutedCardText: { color: "#484f58", fontSize: 13, flex: 1 },
});
