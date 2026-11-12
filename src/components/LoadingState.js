import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { colors } from "../theme";

export const LoadingState = ({ text = "Carregando..." }) => {
  // texto padrão é genérico; telas passam mensagens mais específicas
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", padding: 32, gap: 12 },
  text: { color: colors.textSecondary, fontSize: 13, fontWeight: "600" },
});
