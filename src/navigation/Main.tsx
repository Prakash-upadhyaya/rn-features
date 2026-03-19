import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';


const Stack = createNativeStackNavigator();

const Main = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='home' component={Home}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Main

const styles = StyleSheet.create({})