import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FoodDummy3} from '../../assets';
import {Button} from '../../components/atoms';
import {Header, ItemListFood, ItemValue} from '../../components/molecules';

const OrderSummary = ({navigation}) => {
  return (
    <ScrollView>
      <Header
        title={'Payment'}
        subTitle={'You deserve better meal'}
        onBack={() => {}}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          image={FoodDummy3}
          items={14}
          type="order-summary"
          foodName="Pasta la Vista"
          price="45.000"
        />
        <Text style={styles.label}>Detail Transaction</Text>
        <ItemValue label={'Cherry Healthy'} value={'IDR 18.390.000'} />
        <ItemValue label={'Driver'} value={'IDR 50.000'} />
        <ItemValue label={'Tax 10%'} value={'IDR 1.800.390'} />
        <ItemValue
          label={'Total Price'}
          value={'IDR 390.803.000'}
          valueColor="#1ABC9C"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label={'Name'} value={'Daenerys Targaryen'} />
        <ItemValue label={'Phone No.'} value={'0822 0819 9688'} />
        <ItemValue label={'Address'} value={'Winterfell'} />
        <ItemValue label={'House No.'} value={'A5 Hook'} />
        <ItemValue label={'City'} value={'Bandung'} />
      </View>
      <View style={styles.button}>
        <Button
          text={'Checkout Now'}
          onPress={() => navigation.replace('SuccessOrder')}
        />
      </View>
    </ScrollView>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingTop: 14,
    paddingHorizontal: 24,
    marginTop: 24,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
    marginBottom: 8,
  },
  button: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
