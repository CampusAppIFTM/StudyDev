import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../theme";

export const ProgressBar = ({ progress = 0, height = 6, color = colors.success }) => {
  const pct = Math.max(0, Math.min(100, Math.round(progress)));
  return (
    <View style={[styles.bg, { height }]}>
      <View style={[styles.fill, { width: `${pct}%`, backgroundColor: color }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: colors.background,
    borderRadius: 4,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.border,
  },
  fill: { height: "100%", borderRadius: 4 },
});
