import React from 'react';
import { Button } from 'react-native';
import { TabNavigator, StackNavigator, SwitchNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Register from './../components/Register';
import DueDate from './../components/DueDate';
import Home from './../components/Home';
import Calendar from './../components/Calendar';
import Favourite from './../components/Favourite';
import Settings from './../components/Settings';

export const App = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'ഇന്ന്',
      tabBarIcon: ({ tintColor }) => <Icon
        name="foot" type="foundation" size={35} color={tintColor}
      />
    },
  },
  Calendar: {
    screen: Calendar,
    navigationOptions: {
      tabBarLabel: 'കലണ്ടർ',
      tabBarIcon: ({ tintColor }) => <Icon
        name="calendar" type='evilicon' size={35} color={tintColor}
      />
    },
  },
  Favourite: {
    screen: Favourite,
    navigationOptions: {
      tabBarLabel: 'പ്രിയപ്പെട്ടവ',
      tabBarIcon: ({ tintColor }) => <Icon
        name='heart' type='evilicon' size={39} color={tintColor}
      />
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => <Icon
        name="gear" type="evilicon" size={33} color={tintColor}
      />
    },
  }
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

export const NewUser = StackNavigator({
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'രജിസ്റ്റർ',
      // headerStyle
    }
  },
  DueDate: {
    screen: DueDate,
    navigationOptions: {
      title: 'തിയ്യതി',
      // headerStyle
    }
  }
});

export const createRootNavigator = (signedIn = false) => SwitchNavigator(
    {
      NewUser: {
        screen: NewUser
      },
      App: {
        screen: App
      }
    },
    {
      initialRouteName: signedIn ? 'App' : 'NewUser'
    }
  );
