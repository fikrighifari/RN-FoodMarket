import React from 'react';
import {
    ScrollView,
    StyleSheet, View
} from 'react-native';
import {
    FoodDummy1,
    FoodDummy2,
    FoodDummy3,
    FoodDummy4
} from '../../assets';
import { HomeProfile, HomeTabSection } from '../../components/molecules';
import FoodCard from '../../components/molecules/FoodCard';

const Home = () => {
  return (
    <View style={styles.page}>
      <View>
        <HomeProfile />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardContainer}>
            <FoodCard image={FoodDummy4} />
            <FoodCard image={FoodDummy1} />
            <FoodCard image={FoodDummy2} />
            <FoodCard image={FoodDummy3} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <HomeTabSection />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  foodCardContainer: {
    flexDirection: 'row',
    marginLeft: 24,
    marginTop: 24,
    marginBottom: 24,
  },
  tabContainer: {
    flex: 1,
  },
});
