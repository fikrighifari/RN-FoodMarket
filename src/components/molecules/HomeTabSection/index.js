import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemListFood} from '..';
import {FoodDummy1, FoodDummy2, FoodDummy3} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      // width: '15%'
      //   marginLeft: '3%',
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal:24}}>
        <ItemListFood
        type="product"
        foodName="Soto Babat"
        price="10.000"
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
        type="product"
        foodName="Soto Babat"
        price="10.000"
          rating={3}
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
        type="product"
        foodName="Soto Babat"
        price="10.000"
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
        type="product"
        foodName="Soto Babat"
        price="10.000"
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
        type="product"
        foodName="Soto Babat"
        price="10.000"
          rating={3}
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
        type="product"
        foodName="Soto Babat"
        price="10.000"
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
        />
      </View>
    </ScrollView>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal:24}}>
        <ItemListFood
        type="product"
        foodName="Soto Babat"
        price="10.000"
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
        type="product"
        foodName="Soto Babat"
        price="10.000"
          rating={3}
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
        type="product"
        foodName="Soto Babat"
        price="10.000"
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
        type="product"
        foodName="Soto Babat"
        price="10.000"
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
        type="product"
        foodName="Soto Babat"
        price="10.000"
          rating={3}
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
        type="product"
        foodName="Soto Babat"
        price="10.000"
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
        />
      </View>
    </ScrollView>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal:24}}>
        <ItemListFood
        type="product"
        foodName="Soto Babat"
        price="10.000"
          rating={3}
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
        type="product"
        foodName="Soto Babat"
        price="10.000"
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
        type="product"
        foodName="Soto Babat"
        price="10.000"
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
        type="product"
        foodName="Soto Babat"
        price="10.000"
          rating={3}
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
        type="product"
        foodName="Soto Babat"
        price="10.000"
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
        type="product"
        foodName="Soto Babat"
        price="10.000"
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
        />
      </View>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  first: NewTaste,
  second: Popular,
  third: Recommended,
});

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'New Taste'},
    {key: 'second', title: 'Popular'},
    {key: 'third', title: 'Recommended'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
