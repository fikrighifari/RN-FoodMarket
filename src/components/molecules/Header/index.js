import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <Text style={styles.subtitle}>Find your best ever meal</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({

    container:{
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop:30,
        paddingBottom: 24,
    },
    title:{
        fontSize: 22,
        fontFamily: 'Poppins-Medium',
        color: '#020202'
    },
    subtitle:{
        fontSize:12,
        fontFamily:'Poppins-Light',
        color:'#8D92A3'
    }
})
