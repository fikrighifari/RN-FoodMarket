import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Rating} from '..';

const ItemListFood = ({
  image,
  onPress,
  rating,
  items,
  price,
  type,
  foodName,
  date,
  status,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        //List in Home Page
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.foodTitle}>{foodName}</Text>
              <Text style={styles.foodPrice}>IDR {price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        );
      case 'order-summary':
        //List in Order Page
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.foodTitle}>{foodName}</Text>
              <Text style={styles.foodPrice}>IDR {price}</Text>
            </View>
            <Text style={styles.items}>{items} items</Text>
          </>
        );
      case 'in-progress':
        //List item in progress page
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.foodTitle}>{foodName}</Text>
              <Text style={styles.foodPrice}>
                {items} items • IDR {price}
              </Text>
            </View>
          </>
        );
      case 'past-orders':
        //List item in Past-Orders page
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.foodTitle}>{foodName}</Text>
              <Text style={styles.foodPrice}>
                {items} items • IDR {price}
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        );
      default:
        //item product list
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.foodTitle}>{foodName}</Text>
              <Text style={styles.foodPrice}>IDR {price}</Text>
            </View>
            <Rating />
          </>
        );
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.foodImage} />
        {renderContent()}
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
  content: {
    flex: 1,
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
  items: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  date:{
    fontFamily:'Poppins-Regular',
    fontSize:10,
    color:'#8D92A3'
  },
  status:{
    fontFamily:'Poppins-Regular',
    fontSize:10,
    color:'#D9435E'
  }
});
