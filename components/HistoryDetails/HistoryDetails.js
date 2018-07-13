import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

import styles from './styles';

class HistoryDetails extends Component {
  render() {
    const { color, history: { track, currentCoords } } = this.props;

    return (
      <MapView
        style={styles.mapStyle}
        showsUserLocation={true}
        region={{
          latitude: currentCoords.latitude,
          longitude: currentCoords.longitude,
          latitudeDelta:  0.0044,
          longitudeDelta:  0.0043,
        }}>
        
        <Polyline 
          strokeWidth={4}
          strokeColor={color}
          coordinates={track} />
      </MapView>
    );
  }
}

export default HistoryDetails;
