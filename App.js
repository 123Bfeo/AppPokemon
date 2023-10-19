import "react-native-gesture-handler";
import { react } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import Navigation from "./src/components/navigation/Navigation";
//importacion de nuestro context
import { AuthProvider } from "./src/context/AuthContext";
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
