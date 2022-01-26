import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { Rating } from '..';


const FoodCard = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.foodImage} />
      <View style={styles.content}>
        <Text style={styles.foodTitle}>Surabi Haneut</Text>
        <Rating/>
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    width: 200,
    overflow: 'hidden',
    marginRight: 24,
  },
  foodImage: {
    borderRadius: 8,
    width: 200,
    height: 140,
    resizeMode: 'cover',
  },
  content: {
    padding: 12,
  },
  foodTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  
});
