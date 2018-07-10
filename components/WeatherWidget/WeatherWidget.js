import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-elements';
import styles from './styles';

import { formatTemperature } from '../../utils';

class WeatherWidget extends Component {
  render() {
    const { data, validData } = this.props;

    return (
      <View style={styles.containerStyle}>
        <Image 
          style={styles.imageStyle}
          source={{uri: data ? data.imageUrl : null}}
        />
        <Text h3 style={styles.labelStyle}>{data ? formatTemperature(data.tempMin, data.tempMax) : '-'}</Text>
      </View>
    );
  }
}

export default WeatherWidget;
