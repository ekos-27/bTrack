import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import MapView, { Overlay } from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';
import styles from './styles';

import Header from '../../components/Header';

export default class TrackScreen extends Component {
  state = {
    location: null,
    errorMessage: null,
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice && false) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    this.setState({ location });

    this._watchPositionAsync();
  };

  _watchPositionAsync() {
    Location.watchPositionAsync({ 
      enableHighAccuracy: true,
      timeInterval: 100,
    }, location => {
      this.setState({ location });

    });
  }

  render() {
    let coords = {
      latitude: 0,
      longitude: 0,
    };

    if (this.state.location) {
      coords = this.state.location.coords;
    }

    return (
      <View style={styles.containerStyle}>
        <Header />
        <MapView
          style={styles.mapStyle}
          showsUserLocation={true}
          region={{
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.0043,
            longitudeDelta: 0.0034
          }}
        />

        <View style={styles.buttonContainerStyle}>
          <View style={styles.valueContainerStyle}>
            <View>
              <Text style={styles.labelStyle}>Time</Text>
              <Text style={styles.valueStyle}>00:00:00</Text>
            </View>
            <View>
              <Text style={styles.labelStyle}>Distance</Text>
              <Text style={styles.valueStyle}>10 km</Text>
            </View>
          </View>

          <Button title="Start" buttonStyle={styles.buttonStyle} />
        </View>
      </View>
    );

  }
}
