import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, OrderTabSection, ProfileTabSection } from '../../components';
import { EmptyOrder } from '../../components/molecules';

const Order = () => {
  const [isEmpty] = useState(false);
  return (
    <View style={styles.page}>
      {isEmpty ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Header title={'Your Orders'} subTitle={'Wait for the best meal'}/>
          <View style={styles.tabContainer}>
            <OrderTabSection/>
            {/* <ProfileTabSection/> */}
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content:{
    flex:1
  },
  tabContainer:{
    flex:1,
    marginTop:24
    
  }
});
