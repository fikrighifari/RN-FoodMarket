import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = () => {
  return (
    <View
      style={{
        backgroundColor: '#FFC700',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo />
      <Text
        style={{
          fontSize: 32,
          fontFamily: 'Poppins-Medium',
          color: '#020202',
        }}>
        RumahKentang
      </Text>
    </View>
  );
};

export default SplashScreen;
