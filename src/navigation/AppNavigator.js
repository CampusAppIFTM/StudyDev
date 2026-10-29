import React, { useMemo } from "react";
import { View, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Header } from "../components/Header";
import { UserContext } from "../contexts/UserContext";
import HomeScreen from "../screens/HomeScreen";
import PerfilScreen from "../screens/PerfilScreen";
import ProgressoScreen from "../screens/ProgressoScreen";
import ExplorarScreen from "../screens/ExplorarScreen";
import TrilhasScreen from "../screens/TrilhasScreen";
import CatalogoScreen from "../screens/CatalogoScreen";
import LinguagemDetalhesScreen from "../screens/LinguagemDetalhesScreen";
import TrilhaDetalhesScreen from "../screens/TrilhaDetalhesScreen";
import StudyBotScreen from "../screens/StudyBotScreen";
import RecursosScreen from "../screens/RecursosScreen";
import EventosScreen from "../screens/EventosScreen";
import EventoDetalhesScreen from "../screens/EventoDetalhesScreen";
import VagasScreen from "../screens/VagasScreen";
import VagaDetalhesScreen from "../screens/VagaDetalhesScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const globalScreenOptions = {
  headerShown: false,
  contentStyle: { backgroundColor: "#0d1117" },
};

function TrilhasStack() {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="TrilhasLista" component={TrilhasScreen} />
      <Stack.Screen name="TrilhaDetalhes" component={TrilhaDetalhesScreen} />
    </Stack.Navigator>
  );
}

function CatalogoStack() {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="CatalogoLista" component={CatalogoScreen} />
      <Stack.Screen name="LinguagemDetalhes" component={LinguagemDetalhesScreen} />
    </Stack.Navigator>
  );
}

function ExplorarStack() {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="ExplorarMain" component={ExplorarScreen} />
      <Stack.Screen name="LinguagemDetalhes" component={LinguagemDetalhesScreen} />
      <Stack.Screen name="TrilhaDetalhes" component={TrilhaDetalhesScreen} />
    </Stack.Navigator>
  );
}

function EventosStack() {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="EventosLista" component={EventosScreen} />
      <Stack.Screen name="EventoDetalhes" component={EventoDetalhesScreen} />
    </Stack.Navigator>
  );
}

function VagasStack() {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="VagasLista" component={VagasScreen} />
      <Stack.Screen name="VagaDetalhes" component={VagaDetalhesScreen} />
    </Stack.Navigator>
  );
}

function FabStudyBot() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.fab}
      onPress={() => navigation.navigate("StudyBot")}
      activeOpacity={0.85}
      accessibilityLabel="Abrir StudyBot"
      accessibilityRole="button"
    >
      <Ionicons name="chatbubbles" size={24} color="#fff" />
    </TouchableOpacity>
  );
}

function BottomTabs() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => <Header />,
        tabBarActiveTintColor: "#58a6ff",
        tabBarInactiveTintColor: "#8b949e",
        tabBarStyle: {
          backgroundColor: "#161b22",
          borderTopColor: "#21262d",
          borderTopWidth: 1,
          height: 60 + insets.bottom,
          paddingTop: 4,
          paddingBottom: 4 + insets.bottom,
          paddingHorizontal: 2,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "600",
          marginTop: 1,
        },
        tabBarIconStyle: { marginTop: 2 },
        tabBarHideOnKeyboard: true,
        tabBarStyle: (() => {
          const routeName = getFocusedRouteNameFromRoute(route);
          if (routeName === "TrilhaDetalhes" || routeName === "LinguagemDetalhes" || routeName === "EventoDetalhes" || routeName === "VagaDetalhes") {
            return { display: "none" };
          }
          return {
            backgroundColor: "#161b22",
            borderTopColor: "#21262d",
            borderTopWidth: 1,
            height: 60 + insets.bottom,
            paddingTop: 4,
            paddingBottom: 4 + insets.bottom,
            paddingHorizontal: 2,
          };
        })(),
      })}
    >
      <Tab.Screen
        name="InícioTab"
        component={HomeScreen}
        options={{
          title: "Início",
          tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "home" : "home-outline"} size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="ExplorarTab"
        component={ExplorarStack}
        options={{
          title: "Explorar",
          tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "compass" : "compass-outline"} size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="TrilhasTab"
        component={TrilhasStack}
        options={{
          title: "Trilhas",
          tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "trail-sign" : "trail-sign-outline"} size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="EventosTab"
        component={EventosStack}
        options={{
          title: "Eventos",
          tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "calendar" : "calendar-outline"} size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="VagasTab"
        component={VagasStack}
        options={{
          title: "Vagas",
          tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "briefcase" : "briefcase-outline"} size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="PerfilTab"
        component={PerfilScreen}
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "person" : "person-outline"} size={20} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator({ usuario }) {
  const userValue = useMemo(() => usuario, [usuario?.uid, usuario?.email]);

  return (
    <UserContext.Provider value={userValue}>
      <View style={{ flex: 1 }}>
        <Drawer.Navigator
          screenOptions={{
            header: () => <Header />,
            drawerStyle: { backgroundColor: "#161b22", width: 280 },
            drawerActiveTintColor: "#58a6ff",
            drawerInactiveTintColor: "#e6edf3",
            drawerLabelStyle: { fontSize: 15, fontWeight: "500" },
            sceneContainerStyle: { backgroundColor: "#0d1117" },
          }}
        >
          <Drawer.Screen
            name="MainTabs"
            component={BottomTabs}
            options={{
              title: "StudyDev",
              headerShown: false,
              drawerIcon: ({ color, size }) => <Ionicons name="apps-outline" size={size} color={color} />,
            }}
          />
          <Drawer.Screen
            name="Catálogo"
            component={CatalogoStack}
            options={{ drawerItemStyle: { display: "none" } }}
          />
          <Drawer.Screen
            name="Recursos"
            component={RecursosScreen}
            options={{ drawerItemStyle: { display: "none" } }}
          />
          <Drawer.Screen
            name="Progresso"
            component={ProgressoScreen}
            options={{ drawerItemStyle: { display: "none" } }}
          />
          <Drawer.Screen
            name="StudyBot"
            component={StudyBotScreen}
            options={{ drawerIcon: ({ color, size }) => <Ionicons name="chatbubbles-outline" size={size} color={color} /> }}
          />
        </Drawer.Navigator>
        <FabStudyBot />
      </View>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 88,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#58a6ff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
    borderWidth: 1,
    borderColor: "#1f6feb",
  },
});
