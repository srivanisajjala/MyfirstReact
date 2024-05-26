import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screen/HomeScreen';
import EmailAuthercation from './src/screen/EmailAuthercation';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator 
    initialRouteName="Login">
      <Stack.Screen name="Login" component={EmailAuthercation} />
      <Stack.Screen name="HomePage" component={ HomeScreen}/>

      
    </Stack.Navigator>
  </NavigationContainer>



  )
}

export default App

const styles = StyleSheet.create({})