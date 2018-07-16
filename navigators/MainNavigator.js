import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

import HomeScreen from '../screens/HomeScreen';
import TrackScreen from '../screens/TrackScreen';
import HistoryScreen from '../screens/HistoryScreen';
import AccountScreen from '../screens/AccountScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TabBarLabel from './TabBarLabel';

import BottomTabBar from './BottomTabBar';

const style = {
  alignSelf: 'center',
  fontSize: 12,
};

const MainNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: (props) => (
        <TabBarLabel {...props} label={'Home'} style={style} />
      ),
      tabBarIcon: ({tintColor}) => (
        <Icon name='home' color={tintColor} size={24} />
      ),
      tabBarOptions: {
        activeTintColor: 'red',
      }
    },
  },
  TrackScreen: {
    screen: TrackScreen,
    navigationOptions: {
      tabBarLabel: (props) => (
        <TabBarLabel {...props} label={'Track'} style={style} />
      ),
      tabBarIcon: ({tintColor}) => (
        <Icon name='directions-bike' color={tintColor} size={24} />
      )
    },
  },
  HistoryScreen: {
    screen: HistoryScreen,
    navigationOptions: {
      tabBarLabel: (props) => (
        <TabBarLabel {...props} label={'History'} style={style} />
      ),
      tabBarIcon: ({tintColor}) => (
        <Icon name='history' color={tintColor} size={24} />
      )
    },
   },
   SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: (props) => (
          <TabBarLabel {...props} label={'Settings'} style={style} />
        ),
        tabBarIcon: ({tintColor}) => (
          <Icon name='settings' color={tintColor} size={24} />
        )
      },
    }
  },
  {
    tabBarComponent: BottomTabBar,
    tabBarOptions: {
      style: {
        backgroundColor: '#ffffff',
      },
    }
  }
);

export default MainNavigator;
