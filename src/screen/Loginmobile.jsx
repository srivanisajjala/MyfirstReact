import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../utiles/colors'
import  { useState } from 'react';

const Loginmobile = ( {navigation}) => {
 const [mobileNumber, setMobileNumber] = useState('') ;
    const inputText= (text) =>{
      console.log(text)

    }
    const submitmobile=()=> {
      console.log(mobileNumber)
      navigation.navigate('HomePage');
    }
  
  return (
    <View style={styles.appcontainer}>
      <View style={styles.inputcontainer}>
      <TextInput placeholder='Enter Mobile Number' 
      style = {styles.textinput} 
      onChangeText={inputText}
      
      keyboardType='phone-pad' />
      <Button title='Continue' borderColor='red' onPress={submitmobile} />
      
      </View>
      
    </View>
  )
}

export default Loginmobile

const styles = StyleSheet.create({
  appcontainer:{
    padding: 20,
    flex:1,
    justifyContent:'center',
    alignContent:'center',
  },
  inputcontainer:{
    flexDirection:'column',
  
    
   
  },
  textinput:{
    borderWidth: 1,
    padding: 10,
    marginBottom:20,
    borderRadius: 20,
    borderColor:colors.primary,

  }

})