import React from "react";
import { View, StyleSheet, Text, ActivityIndicator, Image } from "react-native";

const CarregandoScreen = () => (
  <View style={styles.container}>
    <Image
      source={require("../../assets/logo.png")}
      style={styles.logoImage}
      resizeMode="contain"
    />

    <ActivityIndicator
      size="large"
      color="#58a6ff"
      style={styles.spinner}
    />
    <Text style={styles.mensagem}>Só um segundo...</Text>
  </View>
);

export default CarregandoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0d1117",
  },
  logoImage: {
    width: 200,
    height: 200,
    marginBottom: 32,
  },
  spinner: {
    marginBottom: 16,
  },
  mensagem: {
    fontSize: 14,
    color: "#8b949e",
  },
});
