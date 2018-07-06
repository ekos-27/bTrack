import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import styles from './styles';

import moment from 'moment';

import { connect } from 'react-redux';

class CurentState extends Component {
  timer = null;

  state = {
    timerValue: '00:00:00'
  };

  handleTimer = () => {
    const { status } = this.props.training;
    if (!status) {
      clearInterval(this.timer);
      return;
    }

    timer = setInterval(() => {
      const { status, startDate } = this.props.training;
      const timerValue = status ?
        moment.utc(moment(new Date()).diff(startDate)).format('HH:mm:ss') :
        '00:00:00';

      this.setState({
        timerValue
      });
    }, 1000);
  };


  render() {
    const { timerValue } = this.state;

    //this.handleTimer();
    
    return (
      <View style={styles.containerStyle}>
        <View style={styles.rowStyle}>
          <Text style={styles.titleStyle}>Current state</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.labelStyle}>Status</Text>
          <Text style={styles.valueStyle}>-</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.labelStyle}>Time</Text>
          <Text style={styles.valueStyle}>{timerValue}</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.labelStyle}>Distance</Text>
          <Text style={styles.valueStyle}>10 km</Text>
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

