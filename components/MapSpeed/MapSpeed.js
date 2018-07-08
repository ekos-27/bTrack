import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

import { connect } from 'react-redux';

class MapSpeed extends Component {
  render() {
    const {
      currentCoords
    } = this.props.training;

    return (
      <View style={styles.containerStyle}>
        <Text style={styles.valueStyle}>
            {Number(currentCoords.speed).toFixed(2)} km/h
        </Text>
      </View>
    );
  }
}

const mapStateToProps = ({ training }) => ({ training });

export default connect(
  mapStateToProps,
  null
)(MapSpeed);

