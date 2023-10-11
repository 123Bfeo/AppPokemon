import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  Button,
} from "react-native";
import React from "react";

export default function LoginForm() {
  return (
    <View>
      <Text style={styles.title}>Iniciar sesion</Text>
      <View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Nombre de Usuario"
            autoCapitalize="none"
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Contraseña de Usuario"
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.btn}>
        <Button  title="Entrar"/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  btn:{
    margin: 12,
  }
});
