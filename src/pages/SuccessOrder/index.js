import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILSuccessOrder} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <ILSuccessOrder />
      </View>
      <Gap height={30} />
      <Text style={styles.labelOrder}>You’ve Made Order</Text>
      <Gap height={6} />
      <Text style={styles.labelDesc}>Just stay at home while we are</Text>
      <Text style={styles.labelDesc}>preparing your best foods</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          text={'Order Other Foods'}
          onPress={() => navigation.navigate('MainApp')}
        />
        <Gap height={12}/>
        <Button
          text={'View My Order'}
          textColor='white'
          color="#8D92A3"
          onPress={() => navigation.navigate('MainApp',{screen: 'Order'})}
        />
      </View>
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 200,
    height: 178,
  },
  labelOrder: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: '#020202',
  },
  labelDesc: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
  buttonContainer:{
      width:200
  }
});
