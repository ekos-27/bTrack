import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

import styles from './styles';

import Header from '../../components/Header';
import HistoryList from '../../components/HistoryList';

export default class HistoryScreen extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Header />

        <ScrollView>

          <HistoryList />

        </ScrollView>
      </View>
    );
  }
}
