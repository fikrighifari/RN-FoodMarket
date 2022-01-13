import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {back} from 'react-native/Libraries/Animated/Easing';
import {ProfileDummy} from '../../assets';
import {ProfileTabSection} from '../../components';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.profileDetail}>
        <View style={styles.photoLocation}>
          <View style={styles.borderPhoto}>
            <Image source={ProfileDummy} style={styles.photoContainer} />
          </View>
        </View>

        <Text style={styles.name}>Daenerys Targaryen</Text>
        <Text style={styles.email}>daenerys@gmail.com</Text>
      </View>

      <View style={styles.tabContainer}>
        <ProfileTabSection />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  profileDetail:{
      backgroundColor:'white',
      paddingBottom:26
  },
  tabContainer: {
    flex: 1,
    marginTop: 24,
  },
  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#020202',
    textAlign: 'center',
  },
  email: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
    textAlign: 'center',
  },
  photoLocation: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
  addPhotoLabel: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
