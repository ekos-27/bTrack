import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';
import styles from './styles';

import Timer from '../Timer';

import { calculateDistance } from '../../utils';

import { connect } from 'react-redux';

import { withTranslation } from '../../contexts/i18n';
import translate from '../../dictionary';

import { 
  startTraining,
  finishTraining,
  addHistory,
  changeLongestDistance
} from '../../actions';

class TrackStatus extends Component {

  onPressButton = () => {
    const {
      training: { status, startDate, endDate, track }
    } = this.props;

    if (!status) {
      this.props.startTraining({
        status: true,
        startDate: new Date(),
      });
    } else {
      const  finishState = {
        status: false,
        endDate: new Date(),
      };

      this.props.finishTraining(finishState);
      this.props.addHistory({...this.props.training, ...finishState});
      this.props.changeLongestDistance(calculateDistance(track, {unit: 'km'}));
    }
  };


  render() {
    const {
      lang,
      training: { status, startDate, track },
      settings: { colorScheme }
    } = this.props;

    const startButtonStyleList = [
      styles.startButtonStyle,
      { backgroundColor: colorScheme }
    ]

    const valueStyleList = [
      styles.valueStyle,
      { color: colorScheme }
    ];

    return (
      <View style={styles.buttonContainerStyle}>
        <View style={styles.valueContainerStyle}>
          <View>
            <Text style={styles.labelStyle}>{translate(lang, 'Time')}</Text>
            
            <Timer
              style={valueStyleList}
              start={status}
              startTime={startDate}
            />
          </View>
          <View>
            <Text style={styles.labelStyle}>{translate(lang, 'Distance')}</Text>
            <Text style={valueStyleList}>
              { status ? calculateDistance(track, {unit: 'km'}) : '0'} {translate(lang, 'km')}
            </Text>
          </View>
        </View>

        <Button 
          title={ translate(lang, (status ? 'Finish' : 'Start'))}
          buttonStyle={[styles.buttonStyle, (!status ? startButtonStyleList : styles.finishButtonStyle)]}
          onPress={() => {
            this.onPressButton();
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ training, settings }) => ({ training, settings });

export default connect(
  mapStateToProps,
  {
    startTraining,
    finishTraining,
    addHistory,
    changeLongestDistance
  }
)(withTranslation(TrackStatus));
