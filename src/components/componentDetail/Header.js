import React from "react";
import { StyleSheet, View, Text, Image, Platform } from "react-native";
import { capitalize, get } from "lodash";
import getColor from "../../util/getColor";
export default function Header({ name, order, image, type }) {
  const color = getColor(type);
  const bgStyle = [{backgroundColor:color, ...styles.bg}]
  return (
    <View>
      <View style={bgStyle}/>
      <View style={styles.content}>
        <View style={styles.containerText}>
            <Text style={styles.name}>{capitalize(name)}</Text>
            <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
      <View style={styles.containerImg}>
        <Image source={{ uri: image }} style={styles.img} />
      </View>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
    bg:{
        width:'100%',
        height:400,
        position:'absolute',
        borderBottomEndRadius: Platform.OS === 'android' ? 300 : 400,
        borderBottomLeftRadius: Platform.OS === 'android' ? 300 : 400,
        transform: [{ scaleX: 2 }]
    },
    content:{
        marginHorizontal:20,
        marginTop:20
    },
    containerText:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:40,
    },
    name:{
     color:"#fff",
     fontWeight:"bold",
     fontSize:27,
    },
    order:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:18,
    },
  containerImg: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    top:30
  },
  img: {
    width: 250,
    height: 300,
    resizeMode:'contain'
  },
});
