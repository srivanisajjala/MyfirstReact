import { StyleSheet, Text, View,RadioButton } from 'react-native'
import React from 'react'
import { colors } from '../utiles/colors'
import { fonts } from '../utiles/fonts'

const RegiterForm = () => {
  return (
    <View style={styles.mainregister}>
      <Text style={styles.title}>Register Form</Text>
      <Text style={styles.subtitle}>I want to create Address </Text>
      <View style={styles.radioContainer}>
      <View style={styles.radioButton}>
      
      <Text style={styles.radioText}>Mobile Number</Text>
    
      <Text style={styles.radioText}>Adhar Number</Text>
     
      <Text style={styles.radioText}>EmailId</Text>
      </View>
         </View>
    </View>
  )
}

export default RegiterForm

const styles = StyleSheet.create({
  mainregister: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontFamily:fonts.Bold,
    textAlign: 'center',
    marginBottom: 20,
    color:colors.primary,

  },
  subtitle: {
    color:colors.primary,
    fontFamily:fonts.Bold,
    fontSize: 20,
    marginBottom: 20,

  },
  radioButton: {
    flexDirection: 'coloum',
    alignItems: 'center',
    marginBottom: 10,
  },
})