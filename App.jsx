import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileForm from './src/screen/ProfileForm';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator 
    screenOptions={{headerShown:false,}}>
      <Stack.Screen name="Home" component={ProfileForm} />
    </Stack.Navigator>
  </NavigationContainer>



  )
}

export default App

const styles = StyleSheet.create({})