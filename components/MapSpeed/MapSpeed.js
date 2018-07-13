import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

import { formatSpeed } from '../../utils';

import { connect } from 'react-redux';

class MapSpeed extends Component {
  render() {
    const {
      training: { currentCoords },
      settings: { colorScheme }
    } = this.props;

    const valueStyleList = [
      styles.valueStyle,
      { color: colorScheme }
    ];

    return (
      <View style={styles.containerStyle}>
        <Text style={valueStyleList}>
          {formatSpeed(currentCoords.speed)} km/h
        </Text>
      </View>
    );
  }
}

const mapStateToProps = ({ training, settings }) => ({ training, settings });

export default connect(
  mapStateToProps,
  null
)(MapSpeed);
