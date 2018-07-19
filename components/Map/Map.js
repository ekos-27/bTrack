import React, { Component } from 'react';
import { Animated, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import MapView, { Marker, Polyline, UrlTile } from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';
import styles from './styles';

import { connect } from 'react-redux';
import { 
  changePosition,
  changeMaxSpeed,
} from '../../actions';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

class Map extends Component {
  componentWillMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    this._watchPositionAsync();
  };

  _watchPositionAsync() {
    Location.watchPositionAsync({ 
      enableHighAccuracy: true,
      distanceInterval: 2,
    }, location => {
      let coords = {
        latitude: 0,
        longitude: 0,
        speed: 0,
      };
  
      if (location) {
        coords = { ...location.coords };
      }

      const { speed } = coords;

      this.props.changePosition(coords);
      this.props.changeMaxSpeed(speed);
    });
  }

  render() {
    const {
      training: { currentCoords, track, status },
      settings: { colorScheme }
    } = this.props;

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
            strokeColor={colorScheme}
            coordinates={track} />

          {
            status && track[0] ? (
              <Marker 
              anchor={{x: 0.5, y: 0.5}}
                title="Start"
                coordinate={{
                  latitude: track[0].latitude,
                  longitude: track[0].longitude
                }}>
                <Icon 
                  name='fiber-manual-record'
                  color={colorScheme}
                  size={24} />
              </Marker>
            ) : null
          }

          <Marker.Animated coordinate={{
            latitude: currentCoords.latitude,
            longitude: currentCoords.longitude
          }}>

            <Icon name='directions-bike'
              color={colorScheme}
              size={24} />
          </Marker.Animated>
      </MapView>
    );
  }
}

const mapStateToProps = ({ training, settings }) => ({ training, settings });

export default connect(
  mapStateToProps,
  {
    changePosition,
    changeMaxSpeed
  }
)(Map);
