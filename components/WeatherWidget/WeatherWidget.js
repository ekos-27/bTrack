import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import styles from './styles';

class WeatherWidget extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Icon name="cloud" iconStyle={styles.iconStyle} />
        <Text h2 style={styles.labelStyle}>+16</Text>
      </View>
    );
  }
}

export default WeatherWidget;