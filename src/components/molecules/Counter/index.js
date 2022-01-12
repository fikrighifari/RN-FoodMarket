import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcAdd, IcMin} from '../../../assets';

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.3}>
        <IcMin />
      </TouchableOpacity>
      <Text style={styles.value}>14</Text>
      <TouchableOpacity activeOpacity={0.3}>
        <IcAdd />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
    marginHorizontal: 16,
  },
});
