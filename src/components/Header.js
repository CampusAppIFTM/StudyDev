import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { colors, fontSize } from "../theme";

export const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          source={require("../../assets/header-logo.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Text style={styles.title}>StudyDev</Text>
      </View>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        accessibilityLabel="Abrir menu"
        accessibilityRole="button"
      >
        <View style={styles.hamburgerLine} />
        <View style={styles.hamburgerLine} />
        <View style={styles.hamburgerLine} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.headerBorder,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoImage: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textPrimary,
    letterSpacing: 0.3,
  },
  menuButton: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    padding: 8,
  },
  hamburgerLine: {
    height: 2,
    backgroundColor: colors.textPrimary,
    borderRadius: 1,
    width: 22,
  },
});
