import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

import HomeScreen from '../screens/HomeScreen';
import TrackScreen from '../screens/TrackScreen';
import HistoryScreen from '../screens/HistoryScreen';
import AccountScreen from '../screens/AccountScreen';

const MainNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <Icon name='home' color={tintColor} size={24} />
      )
    },
  },
  TrackScreen: {
    screen: TrackScreen,
    navigationOptions: {
      tabBarLabel: 'Track',
      tabBarIcon: ({tintColor}) => (
        <Icon name='motorcycle' color={tintColor} size={24} />
      )
    },
  },
  HistoryScreen: {
    screen: HistoryScreen,
    navigationOptions: {
      tabBarLabel: 'History',
      tabBarIcon: ({tintColor}) => (
        <Icon name='history' color={tintColor} size={24} />
      )
    },
   },
  AccountScreen: {
    screen: AccountScreen,
    navigationOptions: {
      tabBarLabel: 'My account',
      tabBarIcon: ({tintColor}) => (
        <Icon name='people' color={tintColor} size={24} />
      )
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      //borderTopWhidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
});

export default MainNavigator;