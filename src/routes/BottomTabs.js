import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as NAVIGATORS from '../screens';
import {CustomTabBar} from '../components/CustomTabBar';
import {Home} from '../assets/svg';
const {Navigator, Screen} = createBottomTabNavigator();

export default () => {
  return (
    <Navigator>
      <Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => {
            return <Home width="50" height="50" />;
          },
        }}
        name="Home"
        component={NAVIGATORS.Home}
      />
      <Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => {
            return <Home width="24" height="24" />;
          },
        }}
        name="Appoitments"
        component={NAVIGATORS.Appoitments}
      />
      <Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => {
            return <Home width="50" height="50" />;
          },
        }}
        name="Search"
        component={NAVIGATORS.Search}
      />
      <Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => {
            return <Home width="50" height="50" />;
          },
        }}
        name="Favorites"
        component={NAVIGATORS.Favorites}
      />
      <Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => {
            return <Home width="50" height="50" />;
          },
        }}
        name="Profile"
        component={NAVIGATORS.Profile}
      />
    </Navigator>
  );
};
