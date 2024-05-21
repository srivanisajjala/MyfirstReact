import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { colors } from '../utiles/colors'
import { fonts } from '../utiles/fonts'

const Options = () => {
    
  return (
    <View style={styles.optioncontainer}>
         <View style={styles.profileHeader}>
         <Image source = {{uri: 'https://example.com/user-profile.jpg' }} style = {styles.profileImage} />
        
     <View style={styles.profileDetails}>
          <Text style={styles.name}>Srivani</Text>
          <Text style={styles.info}>905644555324</Text>
          <Text style={styles.info}>srivani.sajjala25@gmail.com</Text>
        </View>
        </View>
        <View style={styles.menuItem}>
            <View>
        <Text style={styles.menuText} >Profile</Text>
        </View>
        <View>
        <Text style={styles.menuText}>Create/Reset consent pin</Text>
        </View>
        <View>
        <Text style={styles.menuText}>Health Locker</Text>
        </View>
        <View>
        <Text style={styles.menuText}>Face Authentication</Text>
        </View>
        <View >
        <Text style={styles.menuText}>Language Change</Text>
        </View>
        <View>
        <Text style={styles.menuText}>FAQ</Text>
        </View>

        <View >
        <Text style={styles.menuText}>Privacy Notice</Text>
        </View>
        <View >
        <Text style={styles.menuText}>Terms of use</Text>
        </View >
        <View >
            <Text style={styles.menuText}>About Us</Text>
        </View>
        <View >
        <Text style={styles.menuText}>Settings</Text>
        <View >
            <Text style={styles.menuText}>Logout</Text>
        </View>

        </View>



        </View>
      
    </View>
  )
}

export default Options

const styles = StyleSheet.create({
    optioncontainer: {
        flex: 1,
        backgroundColor:Colors.white,
        
      },
      profileHeader: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#2196f3',
      },
      profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor:colors.primary,
      
    
      },
      profileDetails: {
        marginLeft: 20,
        justifyContent: 'center',
      },
      name: {
        color: colors.primary,
        fontSize: 18,
        fontWeight: 'bold',
      },
      info: {
        color: colors.primary,
        fontSize: 14,
      },
      menuItem: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flexDirection: 'coloum',
        justifyContent: 'space-between',
        
        backgroundColor:colors.white,
       
      },
      menuText: {
        fontSize: 20,
        fontFamily:fonts.Bold,
        marginTop: 20,
      },
    
      
})