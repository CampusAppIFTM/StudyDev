/**
 * src/screens/LoginScreen.js
 * ---------------------------------------------------------------------------
 * Tela de login do StudyDev.
 *
 * NÃO instancia useAutenticacao() — recebe `entrar` e `erro` via props
 * do App.js para evitar múltiplos listeners de onAuthStateChanged.
 * ---------------------------------------------------------------------------
 */
import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";

const { width } = Dimensions.get("window");

const LoginScreen = ({ entrar, erro }) => {
  const [carregando, setCarregando] = useState(false);

  const aoPressionar = useCallback(async () => {
    if (carregando) return;
    setCarregando(true);
    try {
      await entrar();
    } finally {
      setCarregando(false);
    }
  }, [carregando, entrar]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        bounces={false}
      >
        <View style={styles.topGlow} />

        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.titulo}>
            Aprenda programação{"\n"}de forma organizada
          </Text>
          <Text style={styles.subtitulo}>
            Conteúdos e trilhas feitos por estudantes pra te ajudar a evoluir na prática.
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.botaoGoogle, carregando && styles.botaoDesabilitado]}
          onPress={aoPressionar}
          disabled={carregando}
          activeOpacity={0.85}
          accessibilityLabel={
            carregando ? "Entrando na sua conta" : "Entrar com Google"
          }
          accessibilityRole="button"
          accessibilityState={{ disabled: carregando }}
        >
          {carregando ? (
            <View style={styles.botaoConteudo}>
              <ActivityIndicator color="#ffffff" size="small" />
              <Text style={styles.botaoTexto}>Entrando...</Text>
            </View>
          ) : (
            <View style={styles.botaoConteudo}>
              <Text style={styles.googleG}>G</Text>
              <Text style={styles.botaoTexto}>Entrar com Google</Text>
            </View>
          )}
        </TouchableOpacity>

        <Text style={styles.avisoInstituicao}>
          Você precisa de uma conta @iftm.edu.br pra entrar
        </Text>

        {erro ? (
          <View style={styles.erroContainer}>
            <Text style={styles.erroTexto}>{erro}</Text>
          </View>
        ) : null}

        <View style={styles.rodape}>
          <Text style={styles.rodapeTexto}>
            Feito por estudantes do IFTM
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0d1117",
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingVertical: 48,
  },
  topGlow: {
    position: "absolute",
    top: -120,
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: "rgba(139, 92, 246, 0.08)",
    alignSelf: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  logoImage: {
    width: 200,
    height: 200,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 44,
    maxWidth: 320,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "700",
    color: "#e6edf3",
    textAlign: "center",
    lineHeight: 32,
    marginBottom: 14,
  },
  subtitulo: {
    fontSize: 15,
    color: "#8b949e",
    textAlign: "center",
    lineHeight: 22,
  },
  botaoGoogle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#58a6ff",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 14,
    width: Math.min(width - 64, 340),
  },
  botaoDesabilitado: {
    opacity: 0.5,
  },
  botaoConteudo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  googleG: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    width: 28,
    height: 28,
    textAlign: "center",
    lineHeight: 28,
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 6,
    overflow: "hidden",
  },
  botaoTexto: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
  },
  avisoInstituicao: {
    marginTop: 20,
    fontSize: 13,
    color: "#484f58",
    textAlign: "center",
  },
  erroContainer: {
    marginTop: 20,
    backgroundColor: "rgba(248, 81, 73, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(248, 81, 73, 0.25)",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    maxWidth: 320,
  },
  erroTexto: {
    color: "#f85149",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
  rodape: {
    marginTop: 48,
  },
  rodapeTexto: {
    fontSize: 12,
    color: "#484f58",
    textAlign: "center",
  },
});
