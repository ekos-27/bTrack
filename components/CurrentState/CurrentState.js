import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import styles from './styles';

import Timer from '../Timer';

import { calculateDistance, formatSpeed } from '../../utils';

import { connect } from 'react-redux';

class CurentState extends Component {
  render() {
    const { status, startDate, track, currentCoords } = this.props.training;

    return (
      <View style={styles.containerStyle}>
        <View style={styles.rowStyle}>
          <Text style={styles.titleStyle}>Current state</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.labelStyle}>Status</Text>
          <Text style={styles.valueStyle}>{ status ? 'STARTED' : '-'}</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.labelStyle}>Time</Text>
          <Timer
            style={styles.valueStyle}
            start={status}
            startTime={startDate}
          />
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.labelStyle}>Distance</Text>
          <Text style={styles.valueStyle}>{ status ? calculateDistance(track, {unit: 'km'}) : 0 } km</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.labelStyle}>Speed</Text>
          <Text style={styles.valueStyle}>{formatSpeed(currentCoords.speed)} km/h</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ training }) => ({ training });

export default connect(
  mapStateToProps,
  null
)(CurentState);

