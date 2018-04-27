import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
// import { Icon } from 'react-native-elements';

import Home from './../components/home';

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      // tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Saved: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'favorite articles',
      // tabBarIcon: ({ tintColor }) => <Icon name='heart' type='evilicon' size={39} color={tintColor}/>
    },
  },
  Settings: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Settings',
      // tabBarIcon: ({ tintColor }) => <Icon name="gear" type="evilicon" size={33} color={tintColor}/>
    },
  },


  English: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'English',
      // tabBarIcon: ({ tintColor }) => <Icon name="language" size={35} color={tintColor} />
    },
  },
  Malayalam: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Malayalam',
      // tabBarIcon: ({ tintColor }) => <Icon name="language" size={35} color={tintColor} />
    },
  },
  About: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'About',
      // tabBarIcon: ({ tintColor }) => <Icon name="language" size={35} color={tintColor} />
    },
  },

}, {
  tabBarOptions: {
    // activeTintColor: colors.clearColor,
    activeTintColor: 'tomato',
    showLabel: false,
    style: {
      backgroundColor: '#fff',
      height: 60,
      padding: 0,
      margin: 0,
      borderTopColor: 'transparent',
      // shadowColor: colors.clearColor,
      shadowColor: 'blue',
      shadowOffset: { width: 2, height: 10 },
      shadowOpacity: 0.3,
      shadowRadius: 20,
      elevation: 1,
    },
  },
});
