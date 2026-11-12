import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, borderRadius } from "../theme";
import { ProgressBar } from "./ProgressBar";

export const CourseCard = ({ title, description, level = "Iniciante", countText = "8 aulas", progress = 0, onPress, cta = "Continuar" }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8} accessibilityRole="button" accessibilityLabel={`${title}, ${progress}% concluído`}>
      <View style={styles.top}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.desc} numberOfLines={2}>
          {description}
        </Text>
        <View style={styles.metaRow}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{level}</Text>
          </View>
          <Text style={styles.count}>{countText}</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.progressRow}>
          <Text style={styles.progressText}>{progress}% concluído</Text>
          <Ionicons name="chevron-forward" size={14} color={colors.textMuted} />
        </View>
        <ProgressBar progress={progress} height={6} />
      </View>
      {onPress ? (
        <View style={styles.ctaRow}>
          <Text style={styles.ctaText}>{cta}</Text>
          <Ionicons name="arrow-forward" size={14} color={colors.primary} />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.lg,
    padding: 16,
    gap: 12,
  },
  top: { gap: 6 },
  title: { fontSize: 15, fontWeight: "700", color: colors.textPrimary },
  desc: { fontSize: 12, color: colors.textSecondary, lineHeight: 16, minHeight: 32 },
  metaRow: { flexDirection: "row", gap: 8, alignItems: "center", marginTop: 2 },
  badge: { backgroundColor: colors.background, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20 },
  badgeText: { fontSize: 11, fontWeight: "600", color: colors.textSecondary },
  count: { fontSize: 11, color: colors.textMuted, fontWeight: "600" },
  bottom: { gap: 6 },
  progressRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  progressText: { fontSize: 11, color: colors.textSecondary, fontWeight: "600" },
  ctaRow: { flexDirection: "row", gap: 6, alignItems: "center", marginTop: 2 },
  ctaText: { fontSize: 13, fontWeight: "700", color: colors.primary },
});
