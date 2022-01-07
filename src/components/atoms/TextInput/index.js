import React from 'react'
import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'

const TextInput = () => {
    return (
        <View>
            <Text style={styles.label}>Email Address</Text>
            <TextInputRN placeholder='Type your email address' style={styles.input}/>
        </View>
    )
}

export default TextInput

const styles = StyleSheet.create({
    label:{
        fontSize:16,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    },
    input:{
        fontFamily:'Poppins-Regular',
        fontSize:14,
        color:'#8D92A3',
        borderWidth:1,
        borderColor:'#020202',
        borderRadius:8,
        padding:10
        
    }
})
