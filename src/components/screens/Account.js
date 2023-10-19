import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import PanelUser from "../auth/PanelUser"
import LoginForm from "../auth/LoginForm";
import useAuth from '../../hooks/useAuth';
const Account = () => {
  const {auth} = useAuth()
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
