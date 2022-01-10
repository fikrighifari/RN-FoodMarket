import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ProfileDummy } from '../../assets'

const Home = () => {
    return (
        <View>
            <View style={styles.profileContainer}>
                <View>
                    <Text style={styles.Title}>Warung Jeha</Text>
                    <Text style={styles.subTitle}>Selamat berbelanja</Text>
                </View>
                <Image source={ProfileDummy} style={styles.profile}/>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop: 32,
        paddingHorizontal: 24,
        backgroundColor: 'white'
    },
    profile :{
        width:50,
        height:50,
        borderRadius: 8,
    },
    Title :{
        fontFamily: 'Poppins-Medium',
        fontSize: 22,
        color: '#020202',
    },
    subTitle:{
        fontFamily: 'Poppins-Light',
        fontSize: 14,
        color: '#8D92A3', 
    }
})
