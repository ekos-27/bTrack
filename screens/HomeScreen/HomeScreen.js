import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles';

import Header from '../../components/Header';
import WeatherWidget from '../../components/WeatherWidget';
import CurrentState from '../../components/CurrentState';
import BestResultWidget from '../../components/BestResultWidget';
import BottomImage from '../../components/BottomImage';


class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />

        <ScrollView>
          <WeatherWidget />

          <CurrentState />

          <BestResultWidget />

          <BottomImage />
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;