import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SignIn, SignUp, SplashScreen } from './src/pages';
import Router from './src/router';


const App = () => {
  return (
    <NavigationContainer>
      <Router />
      {/* <SignUp/>       */}
    </NavigationContainer>
  );
};

export default App;
