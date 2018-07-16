import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import styles from './styles';

import Timer from '../Timer';

import { calculateDistance, formatSpeed } from '../../utils';

import { connect } from 'react-redux';

import { withTranslation } from '../../contexts/i18n';
import translate from '../../dictionary';

class CurentState extends Component {
  render() {
    const {
      lang,
      training: { status, startDate, track, currentCoords },
      settings: { colorScheme }
    } = this.props;

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
          <Text style={styles.titleStyle}>{translate(lang, 'Current state')}</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.labelStyle}>{translate(lang, 'Status')}</Text>
          <Text style={valueStyleList}>{ status ? translate(lang, 'STARTED') : '-'}</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.labelStyle}>{translate(lang, 'Time')}</Text>
          <Timer
            style={valueStyleList}
            start={status}
            startTime={startDate}
          />
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.labelStyle}>{translate(lang, 'Distance')}</Text>
          <Text style={valueStyleList}>{ status ? calculateDistance(track, {unit: 'km'}) : 0 } {translate(lang, 'km')}</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.labelStyle}>{translate(lang, 'Speed')}</Text>
          <Text style={valueStyleList}>{formatSpeed(currentCoords.speed)} {translate(lang, 'km/h')}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ training, settings }) => ({ training, settings });

export default connect(
  mapStateToProps,
  null
)(withTranslation(CurentState));

