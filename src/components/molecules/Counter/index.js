import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Counter = () => {
  return (
    <View>
      <Text style={styles.labelCounter}>Counter</Text>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  labelCounter: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
});
