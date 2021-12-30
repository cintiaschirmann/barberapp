import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as NAVIGATORS from '../screens';
import { Account, Favorite, Home, Search, Today } from '../assets/svg';
const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: '#2EADBE',
        tabBarInactiveBackgroundColor: '#7EADBE',
        tabBarStyle: {
          height: 60,
          position: 'absolute',
        },
      }}
    >
      <Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => {
            return <Home width="24" height="24" fill="#fff" />;
          },
        }}
        name="Home"
        component={NAVIGATORS.Home}
      />
      <Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => {
            return <Search width="24" height="24" fill="#fff" />;
          },
        }}
        name="Appoitments"
        component={NAVIGATORS.Search}
      />
      <Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => {
            return <Today width="50" height="50" fill="#fff" />;
          },
        }}
        name="Search"
        component={NAVIGATORS.Appoitments}
      />
      <Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => {
            return <Favorite width="24" height="24" fill="#fff" />;
          },
        }}
        name="Favorites"
        component={NAVIGATORS.Favorites}
      />
      <Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => {
            return <Account width="24" height="24" fill="#fff" />;
          },
        }}
        name="Profile"
        component={NAVIGATORS.Profile}
      />
    </Navigator>
  );
};

export default BottomTabs;
