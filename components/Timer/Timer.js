import React, { Component } from 'react';
import { Text } from 'react-native';

import moment from 'moment';

export default class Timer extends Component {
  
  intervalInstance = null;
  state = {
    timerValue: '00:00:00'
  }

  _stopTimer = () => {
    if (this.intervalInstance) {
      clearInterval(this.intervalInstance);
    }

    this.intervalInstance = null;

    this.setState({
      timerValue: '00:00:00'
    });
  };

  _startTimer = () => {
    this.intervalInstance = setInterval(() => {
      const { startTime } = this.props;
      const timerValue = moment
        .utc(moment(new Date()).diff(startTime))
        .format('HH:mm:ss');

      if (timerValue === this.state.timerValue) {
        return;
      }

      this.setState({
        timerValue
      });
    }, 200);
  };

  

  componentWillReceiveProps(nextProps) {
    const { start } = nextProps;

    if (start && !this.intervalInstance) {
      this._startTimer();
    } else if (!start && this.intervalInstance) {
      this._stopTimer();
    }
  }

  componentWillUnmount() {
    this._stopTimer();
  }

  render() {
    const { timerValue } = this.state;
    const { style } = this.props;

    return (
      <Text style={style}>{timerValue}</Text>
    );
  }
}