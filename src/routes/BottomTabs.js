import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as NAVIGATORS from '../screens';
import {CustomTabBar} from '../components/CustomTabBar';
const {Navigator, Screen} = createBottomTabNavigator();

export default () => {
  return (
    <Navigator tabBar={props => <CustomTabBar {...props/>}}
     /* screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: '#4EADBE',
        tabBarInactiveBackgroundColor: '#4EADBE',
        tabBarStyle: {
          height: 60,
          position: 'absolute',
        },
      }}*/>
      <Screen name="Home" component={NAVIGATORS.Home} />
      <Screen name="Appoitments" component={NAVIGATORS.Appoitments} />
      <Screen name="Search" component={NAVIGATORS.Search} />
      <Screen name="Favorites" component={NAVIGATORS.Favorites} />
      <Screen name="Profile" component={NAVIGATORS.Profile} />
    </Navigator>
  );
}

/*  screenOptions={{
        headerStyle: {backgroundColor: '#4eadbe'},
        headerShown: false,
        activeTintColor: '#4eadbe',
        tabBarBackgroundColor: '#4EADBE',
        tabBarLabelPosition: 'row',
        tabBarStyle: {
          height: 60,
        },
      }}*/
