import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  Button,
} from "react-native";

import React, { useState } from "react";
//Dependencia para envío y manejo de formularios
import { useFormik } from "formik";
//Dependencia para la validación
import * as Yup from "yup";
//DB
import { user, userDetail } from "../../util/userDB";
//importacion de nuestro hook que accede al context
import useAuth from "../../hooks/useAuth";

export default function LoginForm() {
  const [error, setError] = useState("");
  //accedo a la funcion login para guardar la data generada en el formulario
  const {login}= useAuth()
 
 //objeto de configuracion
  const formik = useFormik({
    //Valores iniciales del formulario
    initialValues: iniacialFormValue(),
    //Parámetros de validación
    validationSchema: Yup.object(validationSchema()),

    /*
     -function que se ejecutara al momento de enviar los datos del formulario
     -También llevará los datos del formulario.
      */
    onSubmit: (formData) => {
      setError("");
      //console.log("Datos del formulario", formData);
      /**
       * Validaremos los datos del formulario con la informacion en la DB
       */
      if (
        formData.username !== user.username ||
        formData.password !== user.password
      ) {
        setError("Las credenciales son incorrectas!");
      } else {
        login(userDetail)
      }
    },
  });
  return (
    <View>
      <Text style={styles.title}>Iniciar sesion</Text>
      <View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Nombre de Usuario"
            autoCapitalize="none"
            value={formik.values.username}
            onChangeText={(text) => formik.setFieldValue("username", text)}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Contraseña de Usuario"
            autoCapitalize="none"
            secureTextEntry={true}
            value={formik.values.password}
            onChangeText={(text) => formik.setFieldValue("password", text)}
          />
        </View>
        <View style={styles.btn}>
          {/* La function handleSubmit es proporcionada por la dependencia formik
            al igual la forma como estamos llenando los valores de los input
        */}
          <Button title="Entrar" onPress={formik.handleSubmit} />
        </View>
        {formik.errors && (
          <Text style={styles.error}>
            {formik.errors.username || formik.errors.password || error}
          </Text>
        )}
      </View>
    </View>
  );
}
//function que definirá los valores iniciales del formulario
function iniacialFormValue() {
  return {
    username: "",
    password: "",
  };
}
// function encargada de definir los parámetros de validación
function validationSchema() {
  return {
    username: Yup.string().required("¡El usuario es obligatorio!"),
    password: Yup.string().required("¡La contraseña es obligatoria!"),
  };
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
  btn: {
    margin: 12,
  },
  conteError: {
    backgroundColor: "#FF5733",
    borderRadius: 10,
    height: 30,
    margin: 12,
  },
  error: {
    textAlign: "center",
    color: "#FF5733",
    margin: 5,
  },
});
