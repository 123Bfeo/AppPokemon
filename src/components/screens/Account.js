import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import PanelUser from "../auth/PanelUser"
import LoginForm from "../auth/LoginForm";
const Account = () => {
  const auth = null;
  return (
    <View style={styles.container}>
       {auth ? <PanelUser/> :  <LoginForm/>}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default Account
