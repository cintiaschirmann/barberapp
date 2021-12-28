import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as NAVIGATORS from '../screens';
import {CustomTabBar} from '../components/CustomTabBar';
const {Navigator, Screen} = createBottomTabNavigator();

export default () => {
  return (
    <Navigator>
      <Screen name="Home" component={NAVIGATORS.Home} />
      <Screen name="Appoitments" component={NAVIGATORS.Appoitments} />
      <Screen name="Search" component={NAVIGATORS.Search} />
      <Screen name="Favorites" component={NAVIGATORS.Favorites} />
      <Screen name="Profile" component={NAVIGATORS.Profile} />
    </Navigator>
  );
};
