import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme";
import { BotaoPrimario } from "./BotaoPrimario";

export const EmptyState = ({ icon = "file-tray-outline", title = "Nada por aqui", description, actionLabel, onAction }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <Ionicons name={icon} size={32} color={colors.textMuted} />
      </View>
      <Text style={styles.title}>{title}</Text>
      {description ? <Text style={styles.desc}>{description}</Text> : null}
      {actionLabel && onAction ? <BotaoPrimario title={actionLabel} onPress={onAction} small style={{ marginTop: 12 }} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", padding: 32, gap: 8 },
  iconBox: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  title: { fontSize: 16, fontWeight: "700", color: colors.textPrimary, textAlign: "center" },
  desc: { fontSize: 13, color: colors.textSecondary, textAlign: "center", lineHeight: 18, maxWidth: 280 },
});
