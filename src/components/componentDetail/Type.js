import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {capitalize, map}from 'lodash'
import getColor from '../../util/getColor'

export default function Type({types}) {
   
  return (
    <View style={styles.content}>
        {types.map((item, index)=>{
          return(
            <View key={index} style={{...styles.pill, backgroundColor:getColor(item.type.name)}}>
            <Text>{capitalize(item.type.name)}</Text>
           </View>
          ) 
        })}
   
    </View>
  )
}

const styles = StyleSheet.create({
    content:{
        marginTop:50,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    pill:{
        paddingHorizontal:30,
        paddingVertical:5,
        borderRadius:20,
        marginHorizontal:10,
        backgroundColor:'red'
    }
})