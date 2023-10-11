import React from 'react'
import { View, Text } from 'react-native'
import Account from "../screens/Account";
import { createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator();



export default function AccountNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Accunt' component={Account} options={{
            title:'Mi Cuenta',
            headerTitleAlign:'center'
        }}/>
    </Stack.Navigator>
  )
}