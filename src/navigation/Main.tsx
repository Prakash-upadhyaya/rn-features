import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

import LoginScreen from "../screens/LoginScreen"

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name='home' component={Home}/>
        <Stack.Screen name='login' component={LoginScreen}/>
        <Stack.Screen name='signup' component={Signup}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Main

const styles = StyleSheet.create({})