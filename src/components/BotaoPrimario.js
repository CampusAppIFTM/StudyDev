import React from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";
import { colors, borderRadius, fontSize } from "../theme";

export const BotaoPrimario = ({ title, onPress, disabled, loading, style, small }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        small && styles.buttonSmall,
        (disabled || loading) && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={[styles.text, small && styles.textSmall]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: borderRadius.md,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonSmall: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: borderRadius.sm,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: colors.buttonDark,
    fontSize: fontSize.md,
    fontWeight: "600",
  },
  textSmall: {
    fontSize: fontSize.sm,
  },
});
