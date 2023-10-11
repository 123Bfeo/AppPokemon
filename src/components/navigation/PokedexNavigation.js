import React from 'react'
//import { View, Text } from 'react-native'
import Pokedex from "../screens/Pokedex";
import PokemonDetail from '../screens/PokemonDetail';
import { createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator();



export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Pokedex' component={Pokedex} options={{
            title:"",
            headerTitleAlign:'center',
            headerTransparent:true
        }} />
        <Stack.Screen name='Pokemon' component={PokemonDetail} options={{
          title:'',
          headerTransparent:true
        }}/>
    </Stack.Navigator>
  )
}
