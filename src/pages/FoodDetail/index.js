import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FoodDummy1, IcBackWhite} from '../../assets';
import {Button, Gap} from '../../components/atoms/';
import {Counter, Rating} from '../../components/molecules';

const FoodDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={FoodDummy1} style={styles.coverImage}>
        <TouchableOpacity style={styles.backButton}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContent}>
            <View>
              <Text style={styles.foodTitle}>BurgerKing</Text>
              <Rating />
            </View>
            <Counter />
          </View>
          <Gap height={14} />
          <Text style={styles.foodDescription}>
            Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            teratur.
          </Text>
          <Gap height={16} />
          <Text style={styles.labelIngredient}>Ingredients:</Text>
          <Text style={styles.labelIngredientDetails}>
            Seledri, telur, blueberry, madu.
          </Text>
          <Gap height={40} />
        </View>
        <View style={styles.footer}>
          <View>
            <Text style={styles.labelTotal}>Total Price:</Text>
            <Text style={styles.labelPrice}>IDR 12.289.000</Text>
          </View>
          <View style={styles.button}>
            <Button
              text={'Order Now'}
              onPress={() => navigation.navigate('OrderSummary')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  coverImage: {
    height: 330,
    paddingTop: 26,
    paddingLeft: 22,
  },
  backButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
  },
  content: {
    paddingTop: 26,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -40,
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
  productContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  foodTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  foodDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#8D92A3',
  },
  labelIngredient: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
  },
  labelIngredientDetails: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#8D92A3',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    alignItems: 'center',
  },
  labelPrice: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  labelTotal: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#020202',
  },
  button: {
    width: 163,
  },
});
