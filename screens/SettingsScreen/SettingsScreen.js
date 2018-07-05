import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';

import Header from '../../components/Header';
import Settings from '../../components/Settings';

export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Header />

        <ScrollView>

          <Settings />

        </ScrollView>
      </View>
    );
  }
}
