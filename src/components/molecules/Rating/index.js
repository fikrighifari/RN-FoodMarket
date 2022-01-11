import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcStarOff, IcStarOn} from '../../../assets';

const Rating = () => {
  return (
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
  );
};

export default Rating;

const styles = StyleSheet.create({
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
