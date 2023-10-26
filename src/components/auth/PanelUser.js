import React, {useCallback, useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { size} from "lodash"
import useAuth from "../../hooks/useAuth";
import {getPokemonFavorite} from "../../service/favoriteService"

export default function PanelUser() {
  const { auth, logout } = useAuth();
  const [total, setTotal] = useState(0)

  useFocusEffect(
    useCallback(()=>{
      (async ()=>{
        try {
          const response = await getPokemonFavorite();
          const result = size(response)
          setTotal(result)
        } catch (error) {
          setTotal(0)
        }
      })()
    },[])
  )
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Bienvenido,{""}
        <Text style={styles.subTitle}> {auth.firstName} {auth.lastName}</Text>
        </Text>
      </View>
      <View style={styles.dtaContent}>
        <ItemMenu  title = "Nombre" text={` ${auth.firstName} ${auth.lastName}`}/>
        <ItemMenu  title = "Username" text={auth.username}/>
        <ItemMenu  title = "Email" text={auth.email}/>
        <ItemMenu  title = "Favoritos" text={`${total} pokemon`}/>
      </View>
      <Button title="Log out" onPress={logout} style={styles.btn}/>
    </View>
  );
}

function ItemMenu ({title, text}){
    return (
      <View style={styles.itemMenu}>
        <Text style={styles.itemMenuTitle}>{title}:</Text>
        <Text style={styles.itemMenuText}>{text}</Text>
      </View>
    )

}

const styles = StyleSheet.create({
  container:{
    marginHorizontal:20,
    marginTop:20,
  },
  containerTitle:{
    marginBottom:30
  },
  title:{
    fontWeight:"bold",
    fontSize:24
  },
  subTitle:{
    fontWeight:"600",
    fontSize:18
  },
  dtaContent:{
    marginBottom:30,

  },
  itemMenu:{
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth:1,
    borderColor:"#CFCFCF"
  },
  itemMenuTitle:{
    fontWeight:'bold',
    paddingRight:10,
    width:120
  }
});
