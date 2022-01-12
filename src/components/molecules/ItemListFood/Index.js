import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Rating} from '..';

const ItemListFood = ({image, onPress, items, rating}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.foodImage} />
        <View style={{flex: 1}}>
          <Text style={styles.foodTitle}>Smoothies Bowl</Text>
          <Text style={styles.foodPrice}>IDR 50.0000</Text>
        </View>
        {items && !rating && <Text style={styles.items}>{items} items</Text>}

        {rating && !items && <Rating />}
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
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
  items:{
    fontFamily:'Poppins-Regular',
    fontSize:13,
    color:'#8D92A3'
  }
});
