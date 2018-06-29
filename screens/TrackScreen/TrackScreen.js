import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import MapView, { Overlay } from 'react-native-maps';
import styles from './styles';

import Header from '../../components/Header';

export default class TrackScreen extends Component {

  render() {
    return (
      <View style={styles.containerStyle}>
        <Header />
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />

        <View style={styles.buttonContainerStyle}>
          <View style={styles.valueContainerStyle}>
            <View>
              <Text style={styles.labelStyle}>Time</Text>
              <Text style={styles.valueStyle}>00:00:00</Text>
            </View>
            <View>
              <Text style={styles.labelStyle}>Distance</Text>
              <Text style={styles.valueStyle}>10 km</Text>
            </View>
          </View>

          <Button title="Start" buttonStyle={styles.buttonStyle} />
        </View>
      </View>
    );

  }
}
