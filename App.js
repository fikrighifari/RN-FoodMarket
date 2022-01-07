import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SignIn, SplashScreen } from './src/pages';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SplashScreen/> */}
      <SignIn/>
    </NavigationContainer>
  );
};

export default App;
