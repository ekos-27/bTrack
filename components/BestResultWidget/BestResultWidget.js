import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import styles from './styles';

import { connect } from 'react-redux';

class BestResultWidget extends Component {
  render() {
    const { settings: { colorScheme } } = this.props;

    const colorStyle = {
      color: colorScheme
    };

    const valueStyleList = [
      styles.valueStyle,
      colorStyle
    ];

    return (
      <View style={styles.containerStyle}>
        <View style={styles.rowStyle}>
          <Text style={styles.titleStyle}>Best results</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.labelStyle}>Longest distance</Text>
          <Text style={valueStyleList}>15 km</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.labelStyle}>Max speed</Text>
          <Text style={valueStyleList}>35 km/h</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ settings }) => ({ settings });

export default connect(
  mapStateToProps,
  null
)(BestResultWidget);