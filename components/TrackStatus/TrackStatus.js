import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';
import styles from './styles';

import Timer from '../Timer';

import { connect } from 'react-redux';

import { 
  startTraining,
  finishTraining,
  addHistory
} from '../../actions';

class TrackStatus extends Component {

  onPressButton = () => {
    const {
      status,
      startDate,
      endDate,
    } = this.props.training;

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
    }
  };

  render() {
    const {
      status,
      startDate
    } = this.props.training;

    return (
      <View style={styles.buttonContainerStyle}>
        <View style={styles.valueContainerStyle}>
          <View>
            <Text style={styles.labelStyle}>Time</Text>
            
            <Timer
              style={styles.valueStyle}
              start={status}
              startTime={startDate}
            />
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
