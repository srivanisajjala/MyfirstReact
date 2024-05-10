import { Image, StyleSheet, Text, View ,Tittle, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { fonts } from '../utiles/fonts'
import Ionicons from  'react-native-vector-icons/Ionicons'
import Foundation from 'react-native-vector-icons/Foundation'

const ProfileForm= () => {
  return (
    
       
        <View style ={styles.maincontainer}>
      <Text style = {styles.subtitle}>Sign up</Text>
        <View style={styles.formcontainer}>
            <View style={styles.inputcontainer}>
             <Ionicons name={'mail-open-outline'} size={25} color ={Colors.primary}/>
                <TextInput style= {styles.textinput} 
                placeholder='Enter Your Email '/>
            </View>


            <View style={styles.inputcontainer}>
             <Ionicons name={'lock-closed-outline'} size={25} color ={Colors.primary}/>
                <TextInput style= {styles.textinput} 
                placeholder='Enter Your Password '/>
              

            </View>

        
            <View style={styles.inputcontainer}>
             <Ionicons name={'phone-portrait-outline'} size={25} color ={Colors.primary}/>
                <TextInput style= {styles.textinput} a
                placeholder='Enter Your Number '/>
              

            </View>


        </View>


      
      <TouchableOpacity style ={styles.submitbuttonwraper}>
      <Text style ={styles.buttoncontainer}>Submit</Text>
      </TouchableOpacity>
      </View>
  )
}

export default ProfileForm

const styles = StyleSheet.create({
    maincontainer:{
        margin:8,
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        

    },
    subtitle:{
        fontSize: 30,
        textAlign:'center',
        color: Colors.primary,
       fontFamily: fonts.Bold,

    },
    buttoncontainer:{
        
        width: 100,
        alignItems:' center',
        color:Colors.white,
        textAlign: 'center',
        
        borderRadius:98,
        backgroundColor:Colors.primary,
        fontFamily:fonts.Bold,
        fontSize: 20,
        padding: 6  ,
    },
    submitbuttonwraper: {
        justifyContent:'center',
        alignItems: 'center',
    },
    loginbuttonwraper:{
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor:Colors.secondary,
        

    },
    formcontainer:{
        marginTop:20,


    },
    inputcontainer:{
        borderWidth:1,
        color:Colors.secondary,
        borderRadius:20,
        flexDirection:'row',
        alignItems: 'center',
        padding: 5,
        marginVertical: 20,
    },
    textinput:{
        flex:1,
        paddingHorizontal: 10,
        fontFamily: fonts.light,

    }
})
