import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IcStarOff, IcStarOn} from '../../../assets';

const FoodCard = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.foodImage} />
      <View style={styles.content}>
        <Text style={styles.foodTitle}>Christmas Candy</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.starContainer}>
            <IcStarOn />
            <IcStarOn />
            <IcStarOn />
            <IcStarOn />
            <IcStarOff />
          </View>
          <Text style={styles.foodRating}>4.5</Text>
        </View>
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
  foodRating: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  starContainer: {
    flexDirection: 'row',
  },
});
