import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  ProfileDummy,
} from '../../assets';
import FoodCard from '../../components/molecules/FoodCard';

const Home = () => {
  return (
    <View>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.Title}>Warung Jeha</Text>
          <Text style={styles.subTitle}>
            Where you can find your wonderFOODS
          </Text>
        </View>
        <Image source={ProfileDummy} style={styles.profile} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.foodCardContainer}>
          <FoodCard image={FoodDummy4} />
          <FoodCard image={FoodDummy1} />
          <FoodCard image={FoodDummy2} />
          <FoodCard image={FoodDummy3} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 32,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  Title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
  },
  subTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
  foodCardContainer: {
    flexDirection: 'row',
    marginLeft: 24,
    marginTop: 24,
    marginBottom: 24,
  },
});
