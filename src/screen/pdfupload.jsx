import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { fonts } from '../utiles/fonts'
import {DocumentPicker} from 'react-native-document-picker'


const pdfupload = () => {
    const selectfile = async() => {
        try{
            const Doc =await DocumentPicker.pick();
        console.log(Doc)

        } catch(err) {
            if(DocumentPicker.isCancel(err))
                console.log('user cancel the upload',err);
            else
            console.log(err)
        }

        }

    
  return (
    <View>
    <View>
        <Button title="document" onPress={ selectfile }/>
    </View>
    <View>
      <Text style={styles.uploadbuttontext}>pdfupload</Text>
    </View>
    </View>
  )

}
export default pdfupload

const styles = StyleSheet.create({
    uploadbuttontext:{
     fontSize: 28,
     fontFamily:fonts.regular,
     color:'#45484A',
    }
})