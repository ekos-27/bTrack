import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import styles from './styles';

class CurentState extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.rowStyle}>
          <Text style={styles.titleStyle}>Current state</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.labelStyle}>Status</Text>
          <Text style={styles.valueStyle}>-</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.labelStyle}>Time</Text>
          <Text style={styles.valueStyle}>00:00:00</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.labelStyle}>Distance</Text>
          <Text style={styles.valueStyle}>10 km</Text>
        </View>
      </View>
    );
  }
}

export default CurentState;
