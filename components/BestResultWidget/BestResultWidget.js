import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import styles from './styles';

class BestResultWidget extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.rowStyle}>
          <Text style={styles.titleStyle}>Best results</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.labelStyle}>Longest distance</Text>
          <Text style={styles.valueStyle}>15 km</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.labelStyle}>Max speed</Text>
          <Text style={styles.valueStyle}>35 km/h</Text>
        </View>
      </View>
    );
  }
}

export default BestResultWidget;