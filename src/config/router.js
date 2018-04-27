import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from './../components/home';

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'ഇന്ന്',
      tabBarIcon: ({ tintColor }) => <Icon
        name="foot" type="foundation" size={35} color={tintColor}
      />
    },
  },
  English: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'കലണ്ടർ',
      tabBarIcon: ({ tintColor }) => <Icon
        name="calendar" type='evilicon' size={35} color={tintColor}
      />
    },
  },
  Saved: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'പ്രിയപ്പെട്ടവ',
      tabBarIcon: ({ tintColor }) => <Icon
        name='heart' type='evilicon' size={39} color={tintColor}
      />
    },
  },
  Settings: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => <Icon
        name="gear" type="evilicon" size={33} color={tintColor}
      />
    },
  },
}, {
  tabBarOptions: {
    // activeTintColor: colors.clearColor,
    activeTintColor: 'white',
    activeBackgroundColor: 'tomato',
    showLabel: true,
    style: {
      backgroundColor: '#fff',
      height: 60,
      padding: 0,
      margin: 0,
      // borderTopColor: 'transparent',
      // shadowColor: colors.clearColor,
      // shadowColor: 'blue',
      // shadowOffset: { width: 2, height: 10 },
      // shadowOpacity: 0.3,
      // shadowRadius: 20,
      elevation: 1,
    },
    labelStyle: {
      fontSize: 12,
    },
  },
});
