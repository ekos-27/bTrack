import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import styles from './styles';

import { connect } from 'react-redux';

import { withTranslation } from '../../contexts/i18n';
import translate from '../../dictionary';

class BestResultWidget extends Component {
  render() {
    const {
      lang,
      settings: { colorScheme },
      bestResults: { maxSpeed, longestDistance }
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
          <Text style={styles.titleStyle}>{translate(lang, 'Best results')}</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.labelStyle}>{translate(lang, 'Longest distance')}</Text>
          <Text style={valueStyleList}>{ longestDistance } {translate(lang, 'km')}</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.labelStyle}>{translate(lang, 'Max speed')}</Text>
          <Text style={valueStyleList}>{ maxSpeed } {translate(lang, 'km/h')}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ settings, bestResults }) => ({ settings, bestResults });

export default connect(
  mapStateToProps,
  null
)(withTranslation(BestResultWidget));