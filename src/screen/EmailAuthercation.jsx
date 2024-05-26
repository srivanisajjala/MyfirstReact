import { StyleSheet, Text, View,TextInput,Button} from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import { useState } from 'react';


const EmailAuthercation = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleLogin = async () => {
        try {
          await auth().signInWithEmailAndPassword(email, password);
         
        } catch (err) {
          setError(err.message);
        }
      };
  return (
    <View>
     <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
    
      //{error ? <Text style={styles.errorText}>{error}</Text> : null}//
      <Button title="Login" onPress={handleLogin} />
    </View>
    </View>
  )
}

export default EmailAuthercation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent:'center',
        padding: 16,
        marginTop: 40,
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
      },
      errorText: {
        color: 'red',
        marginBottom: 12,
      },
    });