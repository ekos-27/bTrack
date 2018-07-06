import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';
import styles from './styles';

import moment from 'moment';

import { connect } from 'react-redux';

import { 
  startTraining,
  finishTraining,
  addHistory
} from '../../actions';

class TrackStatus extends Component {
  timer = null;

  state = {
    timerValue: '00:00:00'
  };

  startTimer = () => {
    clearInterval(this.timer);

    timer = setInterval(() => {
      const { status, startDate, endDate } = this.props.training;
      const timerValue = status ?
        moment.utc(moment(new Date()).diff(startDate)).format('HH:mm:ss') :
        '00:00:00';

      this.setState({
        timerValue
      });
    }, 300);
  };

  finishTimer = () => {
    clearInterval(this.timer);
  };

  onPressButton = () => {
    const {
      status,
      startDate,
      endDate,
    } = this.props.training;

    if (!status) {
      this.startTimer();
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

      this.finishTimer();
    }
  };

  render() {
    const {
      status
    } = this.props.training;

    const { timerValue } = this.state;

    return (
      <View style={styles.buttonContainerStyle}>
        <View style={styles.valueContainerStyle}>
          <View>
            <Text style={styles.labelStyle}>Time</Text>
            <Text style={styles.valueStyle}>
              { timerValue }
            </Text>
          </View>
          <View>
            <Text style={styles.labelStyle}>Distance</Text>
            <Text style={styles.valueStyle}>
              { status ? '10' : '0'} km
            </Text>
          </View>
        </View>

        <Button 
          title={ status ? 'Finish' : 'Start'}
          buttonStyle={[styles.buttonStyle, (!status ? styles.startButtonStyle : styles.finishButtonStyle)]}
          onPress={() => {
            this.onPressButton();
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ training }) => ({ training });

export default connect(
  mapStateToProps,
  {
    startTraining,
    finishTraining,
    addHistory
  }
)(TrackStatus);
