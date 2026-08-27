import { StyleSheet, Text, View, Button, ActivityIndicator, Image } from "react-native";
import { useState } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

// ⚠️ CORRIGIDO: Agora usando o webClientId real do seu google-services.json
GoogleSignin.configure({
  webClientId: "306092179601-bi1nj442mh3jh31t3h77hjgb7umkap2q.apps.googleusercontent.com",
});

// Funções de autenticação
export const onLogin = async () => {
  try {
    const user = await GoogleSignin.signIn();
    return user;
  } catch (error) {
    console.error("Erro no Google Sign-In:", error);
    return null;
  }
};

export const onLogout = async () => {
  try {
    await GoogleSignin.signOut();
    return true;
  } catch (error) {
    console.error("Erro no Google Sign-Out:", error);
    return false;
  }
};

// Telas
const LoginScreen = ({ login }) => {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);

  const handleLogin = async () => {
    setIsSigninInProgress(true);
    try {
      const user = await onLogin();
      if (user) {
        login(user);
      }
    } finally {
      setIsSigninInProgress(false);
    }
  };

  return (
    <View style={styles.layout}>
      {isSigninInProgress && <ActivityIndicator size="large" color="#0000ff" style={{ marginBottom: 20 }} />}
      <Text style={styles.title}>Login</Text>
      <Button
        title={isSigninInProgress ? "Carregando..." : "Entrar com o Google"}
        onPress={handleLogin}
        disabled={isSigninInProgress}
      />
    </View>
  );
};

const HomeScreen = ({ user, login }) => {
  const handleLogout = async () => {
    const success = await onLogout();
    if (success) {
      login(false);
    }
  };

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Home</Text>
      {user?.data?.user?.photo && (
        <Image
          style={styles.avatar}
          source={{ uri: user.data.user.photo }}
        />
      )}
      <Text style={styles.username}>Olá, {user?.data?.user?.name || "Usuário"}</Text>
      <Button title="Sair" onPress={handleLogout} />
    </View>
  );
};

const App = () => {
  const [user, setUser] = useState(false);
  return (
    <View style={styles.container}>
      {user ? <HomeScreen user={user} login={setUser} /> : <LoginScreen login={setUser} />}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  username: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: "bold",
  },
  avatar: {
    width: 150,
    height: 150,
    marginBottom: 30,
    borderRadius: 75,
  },
});
