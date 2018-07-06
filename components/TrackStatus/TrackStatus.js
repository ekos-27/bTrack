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
  finishTraining
} from '../../actions';

class TrackStatus extends Component {
   render() {
    const {
      status,
      startDate,
      endDate,
    } = this.props.training;

    return (
      <View style={styles.buttonContainerStyle}>
        <View style={styles.valueContainerStyle}>
          <View>
            <Text style={styles.labelStyle}>Time</Text>
            <Text style={styles.valueStyle}>
              { status ? moment(startDate).format('HH:mm:ss') : '00:00:00'}
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
            if (!status) {
              this.props.startTraining();
            } else {
              this.props.finishTraining();
            }
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
  }
)(TrackStatus);
