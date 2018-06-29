import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';

import Header from '../../components/Header';

export default class SettingsScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text>Settings</Text>
      </View>
    );
  }
}
