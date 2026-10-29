import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, useWindowDimensions, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { recursos } from "../data/linguagens";

const recursosLinks = {
  mdn: "https://developer.mozilla.org/pt-BR/",
  roadmap: "https://roadmap.sh",
  freecodecamp: "https://www.freecodecamp.org",
  exercism: "https://exercism.org",
  docs: "https://devdocs.io",
  github: "https://github.com/explore",
};

const SOCIALS = [
  {
    id: "instagram",
    name: "Instagram",
    handle: "@studydevbrasil",
    url: "https://www.instagram.com/studydevbrasil/",
    icon: "logo-instagram",
    buttonText: "Seguir no Instagram",
    accent: "#E1306C",
    iconBg: "#E1306C",
    buttonBg: "#E1306C",
    buttonTextColor: "#fff",
    desc: "Dicas rápidas e bastidores do dia a dia no StudyDev.",
  },
  {
    id: "tiktok",
    name: "TikTok",
    handle: "@studydev",
    url: "https://www.tiktok.com/@studydev1",
    icon: "logo-tiktok",
    buttonText: "Seguir no TikTok",
    accent: "#00f2ea",
    iconBg: "#000000",
    iconBorder: "#ff0050",
    buttonBg: "#000000",
    buttonTextColor: "#fff",
    desc: "Vídeos curtos e tutoriais direto ao ponto.",
  },
];

const RecursosScreen = () => {
  const { width } = useWindowDimensions();
  const isWide = width >= 700;

  const openExternal = async (url) => {
    if (!url) return;
    if (Platform.OS === "web") {
      // Garante target="_blank" + rel="noopener noreferrer" na web
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }
    try {
      const can = await Linking.canOpenURL(url);
      if (can) await Linking.openURL(url);
    } catch {}
  };

  const handleOpen = async (id, fallbackUrl) => {
    const url = recursosLinks[id] || fallbackUrl;
    await openExternal(url);
  };

  const handleOpenSocial = async (url) => {
    await openExternal(url);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Recursos</Text>
      <Text style={styles.subtitle}>
        Seleção de cursos, livros e repositórios gratuitos que a comunidade usa e recomenda.
      </Text>

      <View style={styles.sectionHeader}>
        <Ionicons name="library-outline" size={18} color="#58a6ff" />
        <Text style={styles.sectionTitle}>Plataformas recomendadas</Text>
      </View>

      <View style={styles.buttonsContainer}>
        {recursos.map((rec) => (
          <TouchableOpacity
            key={rec.id}
            style={styles.recursoButton}
            activeOpacity={0.85}
            onPress={() => handleOpen(rec.id, rec.url)}
          >
            <View style={styles.buttonLeft}>
              <View style={styles.iconBox}>
                <Ionicons name="open-outline" size={18} color="#58a6ff" />
              </View>
              <View>
                <Text style={styles.buttonText}>{rec.titulo}</Text>
                <Text style={styles.buttonSub} numberOfLines={1}>
                  {recursosLinks[rec.id] || rec.url || "Recurso externo"}
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#0d172a" />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.divider} />

      {/* Nova seção - Siga o StudyDev */}
      <View style={styles.socialHeader}>
        <View style={styles.socialHeaderTop}>
          <View style={styles.socialHeaderIcon}>
            <Ionicons name="share-social" size={20} color="#fff" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.socialTitle}>Nos siga nas redes</Text>
            <Text style={styles.socialSubtitle}>Conteúdo direto da equipe e da comunidade</Text>
          </View>
        </View>
        <Text style={styles.socialDesc}>
          Dicas rápidas, tutoriais e bastidores de quem tá construindo o StudyDev no dia a dia.
        </Text>
      </View>

      <View style={[styles.socialGrid, isWide && styles.socialGridWide]}>
        {SOCIALS.map((social) => (
          <View
            key={social.id}
            style={[styles.socialCard, isWide && styles.socialCardWide]}
          >
            <View style={[styles.accentBar, { backgroundColor: social.accent }]} />
            <View style={styles.socialCardTop}>
              <View
                style={[
                  styles.socialIconBox,
                  { backgroundColor: social.iconBg },
                  social.iconBorder && { borderColor: social.iconBorder, borderWidth: 2 },
                ]}
              >
                <Ionicons name={social.icon} size={26} color="#fff" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.socialName}>{social.name}</Text>
                <Text style={styles.socialHandle}>{social.handle}</Text>
              </View>
              <View style={styles.socialBadge}>
                <Text style={styles.socialBadgeText}>Oficial</Text>
              </View>
            </View>

            <Text style={styles.socialCardDesc}>{social.desc}</Text>

            <TouchableOpacity
              style={[styles.socialButton, { backgroundColor: social.buttonBg, borderColor: social.id === 'tiktok' ? '#00f2ea' : social.buttonBg }]}
              activeOpacity={0.85}
              onPress={() => handleOpenSocial(social.url)}
              accessibilityRole="link"
              accessibilityLabel={social.buttonText}
            >
              <Ionicons name={social.icon} size={18} color={social.buttonTextColor} />
              <Text style={[styles.socialButtonText, { color: social.buttonTextColor }]}>{social.buttonText}</Text>
              <Ionicons name="open-outline" size={16} color={social.buttonTextColor} style={{ opacity: 0.8 }} />
            </TouchableOpacity>

            <Text style={styles.socialUrl} numberOfLines={1}>
              {social.url.replace('https://', '')}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.tipBox}>
        <Ionicons name="bulb-outline" size={18} color="#f0883e" />
        <Text style={styles.tipText}>
          Uma ideia: assista a aula, pratique e depois peça pro StudyBot revisar seu código.
        </Text>
      </View>
    </ScrollView>
  );
};

export default RecursosScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0d1117" },
  content: { padding: 20, paddingBottom: 40 },
  title: { fontSize: 26, fontWeight: "800", color: "#e6edf3", marginBottom: 8 },
  subtitle: { fontSize: 14, color: "#8b949e", lineHeight: 21, marginBottom: 22 },
  sectionHeader: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 12 },
  sectionTitle: { fontSize: 16, fontWeight: "700", color: "#e6edf3" },
  buttonsContainer: { gap: 10 },
  recursoButton: {
    backgroundColor: "#58a6ff",
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  buttonLeft: { flexDirection: "row", alignItems: "center", gap: 12, flex: 1 },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#ffffff22",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: { color: "#0d172a", fontSize: 14, fontWeight: "700" },
  buttonSub: { color: "#0d172a99", fontSize: 11, marginTop: 1 },
  divider: { height: 1, backgroundColor: "#21262d", marginVertical: 22 },
  // Siga o StudyDev
  socialHeader: {
    backgroundColor: "#161b22",
    borderWidth: 1,
    borderColor: "#21262d",
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
  },
  socialHeaderTop: { flexDirection: "row", gap: 12, alignItems: "center", marginBottom: 10 },
  socialHeaderIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#58a6ff",
    alignItems: "center",
    justifyContent: "center",
  },
  socialTitle: { fontSize: 18, fontWeight: "800", color: "#e6edf3", letterSpacing: 0.3 },
  socialSubtitle: { fontSize: 12, color: "#8b949e", marginTop: 2, fontWeight: "600" },
  socialDesc: { fontSize: 13, color: "#8b949e", lineHeight: 19 },
  socialGrid: { gap: 14, marginBottom: 6 },
  socialGridWide: { flexDirection: "row", alignItems: "stretch" },
  socialCard: {
    backgroundColor: "#161b22",
    borderWidth: 1,
    borderColor: "#21262d",
    borderRadius: 16,
    padding: 18,
    gap: 12,
    overflow: "hidden",
  },
  socialCardWide: { flex: 1 },
  accentBar: { position: "absolute", top: 0, left: 0, right: 0, height: 4, borderTopLeftRadius: 16, borderTopRightRadius: 16 },
  socialCardTop: { flexDirection: "row", alignItems: "center", gap: 12, marginTop: 4 },
  socialIconBox: {
    width: 52,
    height: 52,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  socialName: { fontSize: 16, fontWeight: "800", color: "#e6edf3" },
  socialHandle: { fontSize: 13, color: "#8b949e", fontWeight: "600", marginTop: 1 },
  socialBadge: {
    backgroundColor: "#0d1117",
    borderWidth: 1,
    borderColor: "#21262d",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
  },
  socialBadgeText: { fontSize: 10, fontWeight: "800", color: "#58a6ff", textTransform: "uppercase", letterSpacing: 0.5 },
  socialCardDesc: { fontSize: 13, color: "#8b949e", lineHeight: 19 },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 13,
    borderRadius: 12,
    marginTop: 2,
    borderWidth: 1,
  },
  socialButtonText: { fontSize: 14, fontWeight: "800", letterSpacing: 0.2 },
  socialUrl: { fontSize: 11, color: "#484f58", textAlign: "center", marginTop: 2 },
  tipBox: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#f0883e14",
    borderWidth: 1,
    borderColor: "#f0883e33",
    borderRadius: 10,
    padding: 14,
    marginTop: 20,
    alignItems: "flex-start",
  },
  tipText: { flex: 1, color: "#c9d1d9", fontSize: 13, lineHeight: 19 },
});
