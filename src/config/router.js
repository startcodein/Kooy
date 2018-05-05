import React from 'react';
import { TabNavigator, StackNavigator, SwitchNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Register from './../components/Register';
import CalculateDueDate from './../components/CalculateDueDate';
import Dashboard from './../views/Dashboard';
import Calendar from './../components/Calendar';
import Week from './../views/Week';
import Favourite from './../components/Favourite';
import Settings from './../components/Settings';

export const App = TabNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Today',
      tabBarLabel: 'ഇന്ന്',
      tabBarIcon: ({ tintColor }) => <Icon
        name="foot" type="foundation" size={35} color={tintColor}
      />
    },
  },
  Week: {
    screen: Week,
    navigationOptions: {
      title: 'Week',
      tabBarLabel: 'ഈ ആഴ്ച',
      tabBarIcon: ({ tintColor }) => <Icon
        name="child-care" type='materialIcons' size={35} color={tintColor}
      />
    },
  },
  Calendar: {
    screen: Calendar,
    navigationOptions: {
      title: 'Calender',
      tabBarLabel: 'കലണ്ടർ',
      tabBarIcon: ({ tintColor }) => <Icon
        name="calendar" type='evilicon' size={35} color={tintColor}
      />
    },
  },
  Favourite: {
    screen: Favourite,
    navigationOptions: {
      title: 'Favourite',
      tabBarLabel: 'പ്രിയപ്പെട്ടവ',
      tabBarIcon: ({ tintColor }) => <Icon
        name='heart' type='evilicon' size={39} color={tintColor}
      />
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => <Icon
        name="gear" type="evilicon" size={33} color={tintColor}
      />
    },
  }
}, {
  tabBarOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: 'tomato',
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

const Home = StackNavigator({
    App: {
        screen: App
    }
});

export const NewUser = StackNavigator({
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'രജിസ്റ്റർ',
      // headerStyle
    }
  },
  CalculateDueDate: {
    screen: CalculateDueDate,
    navigationOptions: {
      title: 'തിയ്യതി',
      // headerStyle
    }
  }
},
{
  mode: 'modal',
  headerMode: 'none',
}
);

export const createRootNavigator = (signedIn = false) => SwitchNavigator(
    {
      NewUser: {
        screen: NewUser
      },
      App: {
        screen: Home
      }
    },
    {
      initialRouteName: signedIn ? 'App' : 'NewUser'
    }
  );
