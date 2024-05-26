import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const HomeScreen = ({ navigation }) => {
  const handleLogout = async () => {
    await auth().signOut();
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;