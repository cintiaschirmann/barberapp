import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const {Navigator, Screen} = createStackNavigator();

const Routes = () => {
  return (
    <Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>
      <Screen name="Preload" component={Preload} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
};

export default Routes;
