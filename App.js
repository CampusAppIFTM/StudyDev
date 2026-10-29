import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { useAutenticacao } from "./src/hooks/useAutenticacao";
import CarregandoScreen from "./src/screens/CarregandoScreen";
import LoginScreen from "./src/screens/LoginScreen";
import AppNavigator from "./src/navigation/AppNavigator";

const DarkTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: "#0d1117",
    card: "#161b22",
    text: "#e6edf3",
    border: "#21262d",
    primary: "#58a6ff",
  },
};

const App = () => {
  const { usuario, verificando, entrar, erro } = useAutenticacao();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {verificando ? (
        <CarregandoScreen />
      ) : usuario && !usuario.isAnonymous ? (
        <NavigationContainer theme={DarkTheme}>
          <AppNavigator usuario={usuario} />
        </NavigationContainer>
      ) : (
        <LoginScreen entrar={entrar} erro={erro} />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d1117",
  },
});
