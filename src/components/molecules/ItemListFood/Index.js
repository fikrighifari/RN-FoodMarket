import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Rating } from '..';

const ItemListFood = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.foodImage} />
      <View style={{flex: 1}}>
        <Text style={styles.foodTitle}>Smoothies Bowl</Text>
        <Text style={styles.foodPrice}>IDR 50.0000</Text>
      </View>
      <Rating />
    </View>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 8,
    alignItems: 'center',
  },
  foodImage: {
    borderRadius: 8,
    width: 60,
    height: 60,
    overflow: 'hidden',
    resizeMode: 'cover',
    marginRight: 12,
  },
  foodTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  foodPrice: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
});
