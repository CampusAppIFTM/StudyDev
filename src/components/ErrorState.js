import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme";
import { BotaoPrimario } from "./BotaoPrimario";

export const ErrorState = ({ title = "Algo deu errado", description = "Checa sua internet e tenta de novo.", onRetry }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <Ionicons name="alert-circle-outline" size={28} color={colors.danger} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{description}</Text>
      {onRetry ? <BotaoPrimario title="Tentar novamente" onPress={onRetry} small style={{ marginTop: 12 }} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", padding: 32, gap: 8 },
  iconBox: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#f8514918",
    borderWidth: 1,
    borderColor: "#f8514933",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  title: { fontSize: 15, fontWeight: "700", color: colors.textPrimary, textAlign: "center" },
  desc: { fontSize: 13, color: colors.textSecondary, textAlign: "center", lineHeight: 18, maxWidth: 280 },
});
