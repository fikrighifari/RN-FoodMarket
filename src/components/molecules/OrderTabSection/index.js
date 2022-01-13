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

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
          type="in-progress"
          items={4}
          price="100.000"
          foodName="Seblak"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
          type="in-progress"
          items={4}
          price="50.000"
          foodName="Nasgor"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
          type="in-progress"
          items={4}
          price="100.000"
          foodName="BUrger"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
          type="in-progress"
          items={4}
          price="10.000"
          foodName="Permen Yosan"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
          type="in-progress"
          items={4}
          price="7500"
          foodName="Cimol"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
          type="in-progress"
          items={4}
          price="100.000"
          foodName="Rujak"
        />
      </View>
    </ScrollView>
  );
};

const PastOrder = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
          type="past-orders"
          items={4}
          price="100.000"
          foodName="Rujak"
          date="Jun 12, 14:00"
          status="Cancelled"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
          type="past-orders"
          items={4}
          price="100.000"
          foodName="Rujak"
          date="Jun 12, 14:00"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
          type="past-orders"
          items={4}
          price="100.000"
          foodName="Rujak"
          date="Jun 12, 14:00"
          status="Cancelled"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
          type="past-orders"
          items={4}
          price="100.000"
          foodName="Rujak"
          date="Jun 12, 14:00"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
          type="past-orders"
          items={4}
          price="100.000"
          foodName="Rujak"
          date="Jun 12, 14:00"
          status="Cancelled"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
          type="past-orders"
          items={4}
          price="100.000"
          foodName="Rujak"
          date="Jun 12, 14:00"
          status="Cancelled"
        />
      </View>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  first: InProgress,
  second: PastOrder,
});

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'In Progress'},
    {key: 'second', title: 'Past Order'},
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

export default OrderTabSection;

const styles = StyleSheet.create({});
