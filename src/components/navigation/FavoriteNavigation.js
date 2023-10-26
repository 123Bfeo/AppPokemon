import React from 'react'
//import { View, Text } from 'react-native'
import Favorite from "../screens/Favorite";
import PokemonDetail from "../screens/PokemonDetail"
import { createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator();


export default function FavoriteNavigation() {
  return (
     <Stack.Navigator>
        <Stack.Screen name='Favorite' component={Favorite} options={{
            title:"Favoritos",
            headerTitleAlign:'center'
        }}/>
        <Stack.Screen name='Pokemon' component={PokemonDetail} options={{
            title:"",
            headerTransparent:true
        }}/>
     </Stack.Navigator>
  )
}