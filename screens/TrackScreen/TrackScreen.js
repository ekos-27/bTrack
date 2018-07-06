import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';

import Header from '../../components/Header';
import Map from '../../components/Map';
import TrackStatus from '../../components/TrackStatus';

export default class TrackScreen extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Header />
        
        <Map />

        <TrackStatus />
      </View>
    );

  }
}
