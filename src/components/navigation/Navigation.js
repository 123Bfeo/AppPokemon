import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
//importacion para el uso de iconos
import Icon from "react-native-vector-icons/FontAwesome5";
const Tab = createBottomTabNavigator();

//Importaciones de Component
import AccountNavigation from "./AccountNavigation";
import PokedexNavigation from "./PokedexNavigation";
import FavoriteNavigation from "./FavoriteNavigation";

const Navigation = () => {
  return (
    //Definira las opciones de navegacion y los componentes a renderizar
       <Tab.Navigator initialRouteName="Account">
        <Tab.Screen name="Favorite" component={FavoriteNavigation} options={{
          tabBarLabel:"Favoritos",
          tabBarIcon:({color, size})=>(
            <Icon name="heart" color={color} size={size}/>
          )
        }}/>
        <Tab.Screen name="Pokedex" component={PokedexNavigation} options={{
          tabBarLabel:'',
          // Se hace uso de una funcion que contendra una imagen para nuestro icono
          tabBarIcon:()=>renderPokeball(),
        }} />
        <Tab.Screen name="Account" component={AccountNavigation} options={{
          tabBarLabel:"Mi cuenta",
          tabBarIcon:({color, size})=>(
          //Color y size son valores que los proporcina Tab.Navigator 
          // permite que el icono se ajuste de forma dinamica 
            <Icon name="user" color={color} size={size}/>
          )
        }} />
      </Tab.Navigator>
  );
};

// Funcion que contine una imagen y sera asociada al icon
function renderPokeball (){
  return (
    <Image 
    source={require('../../img/pokeball.png')}
    style={{width: 65, height:65, top:-18}}
    />
  )
}

export default Navigation;
