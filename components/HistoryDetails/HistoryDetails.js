import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import MapView, { Polyline, Marker } from 'react-native-maps';

import styles from './styles';

class HistoryDetails extends Component {
  render() {
    const { color, history: { track, currentCoords } } = this.props;

    const startPoint = track[0] ? track[0] : null;
    const lastPoint = track.length > 0 ? track[track.length-1] : null;

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

          {
            startPoint ? (
              <Marker 
                anchor={{x: 0.5, y: 0.5}}
                title="Start"
                coordinate={{
                  latitude: startPoint.latitude,
                  longitude: startPoint.longitude
                }}>
                <Icon 
                  name='fiber-manual-record'
                  color={color}
                  size={24} />
              </Marker>
            ) : null
          }

          {
            lastPoint ? (
              <Marker 
                title="Finish"
                anchor={{x: 0.3, y: 1}}
                coordinate={{
                  latitude: lastPoint.latitude,
                  longitude: lastPoint.longitude
                }}>
                <Icon 
                  name='flag'
                  color={color}
                  size={34} />
              </Marker>
            ) : null
          }
          {
            lastPoint ? (
              <Marker 
                anchor={{x: 0.5, y: 0.5}}
                coordinate={{
                  latitude: lastPoint.latitude,
                  longitude: lastPoint.longitude
                }}>
                <Icon 
                  name='fiber-manual-record'
                  color={color}
                  size={24} />
              </Marker>
            ) : null
          }
      </MapView>
    );
  }
}

export default HistoryDetails;
