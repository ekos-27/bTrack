import React from 'react';
import MainNavigator from './navigators/MainNavigator';

import { View, Text } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <MainNavigator />
    );
  }
}
