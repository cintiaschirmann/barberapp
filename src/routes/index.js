import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';

import * as NAVIGATORS from '../screens';

const {Navigator, Screen} = createNativeStackNavigator();

const Routes = () => {
  return (
    <Navigator initialRouteName="Preload" screenOptions={{headerShown: false}}>
      <Screen name="Preload" component={NAVIGATORS.Preload} />
      <Screen name="SignIn" component={NAVIGATORS.SignIn} />
      <Screen name="SignUp" component={NAVIGATORS.SignUp} />
      <Screen name="BottomTabs" component={BottomTabs} />
    </Navigator>
  );
};

export default Routes;
