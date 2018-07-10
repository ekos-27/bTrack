import React, { Component } from 'react';

import WeatherWidget from '../components/WeatherWidget';

class WeatherWidgetContainer extends Component {

  WEATHER_URL = 'http://openweathermap.org/data/2.5/weather';
  APP_ID = 'b6907d289e10d714a6e88b30761fae22';
  IMAGE_URL = 'http://openweathermap.org/img/w/';

  state = {
    data: null,
    validData: false
  };

  intervalInstance = null;

  _getImagePath = imageCode => {
    return `${this.IMAGE_URL}${imageCode}.png`;
  }

  _getWheatherUrl = (lat, lon) => {
    return `${this.WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${this.APP_ID}`;
  }

  _loadWeatherData = async (lat, lon) => {
    const url = this._getWheatherUrl(lat, lon);
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  _convertWeatherResponse = response => {
    return {
      imageUrl: response && response.cod == 200 ? this._getImagePath(response.weather[0].icon) : '',
      tempMin: response && response.cod == 200 ? response.main.temp_min : 0,
      tempMax: response && response.cod == 200 ? response.main.temp_max : 0,
    };
  }

  getCurrentPosition() {
    return new Promise((res, rej) => {
      const config = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

      navigator.geolocation.getCurrentPosition(res, rej, config);
    });
  }

  updateCurrentWeatherData = async () => {
    try {
      const position = await this.getCurrentPosition();
      const response = await this._loadWeatherData(position.coords.latitude, position.coords.longitude);response

      const data = this._convertWeatherResponse(response);

      this.setState({
        validData: true,
        data
      })
    } catch (error) {
      console.error(error);
    }
  }

  _stopTimer = () => {
    if (this.intervalInstance) {
      clearInterval(this.intervalInstance);
    }

    this.intervalInstance = null;

    this.setState({
      data: null,
      validData: false
    });
  };

  _startTimer = () => {
    this.intervalInstance = setInterval(this.updateCurrentWeatherData, 1000 * 60 * 60 * 1);
  };

  componentDidMount() {
    this.updateCurrentWeatherData();
    this._startTimer();
  }

  componentWillUnmount() {
    this._stopTimer();
  }


  render() {
    const { data , validData } = this.state;

    return (
      <WeatherWidget data={data} validData={validData} />
    )
  }
}

export default WeatherWidgetContainer;
