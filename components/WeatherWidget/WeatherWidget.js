import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-elements';
import styles from './styles';

import { connect } from 'react-redux';

import { formatTemperature } from '../../utils';

class WeatherWidget extends Component {
  render() {
    const { data, validData, settings: { colorScheme } } = this.props;

    const colorStyle = {
      color: colorScheme
    };

    const labelStyleList = [
      styles.labelStyle,
      colorStyle
    ];

    return (
      <View style={styles.containerStyle}>
        <Image 
          style={styles.imageStyle}
          source={{uri: data ? data.imageUrl : null}}
        />
        <Text h3 style={labelStyleList}>{data ? formatTemperature(data.tempMin, data.tempMax) : '-'}</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ settings }) => ({ settings });

export default connect(
  mapStateToProps,
  null
)(WeatherWidget);
