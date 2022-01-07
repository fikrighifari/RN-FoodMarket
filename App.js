import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SplashScreen } from './src/pages';

const App = () => {
  return (
    <NavigationContainer>
      <SplashScreen/>
    </NavigationContainer>
  );
};

export default App;
