import React, { Component } from 'react';
import { Animated } from 'react-native';
import { Icon } from 'react-native-elements';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';
import styles from './styles';

import { connect } from 'react-redux';
import { 
  changePosition,
} from '../../actions';

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
      };
  
      if (location) {
        coords = { ...location.coords };
      }

      this.props.changePosition(coords);
    });
  }

  render() {
    const {
      currentCoords,
      track
    } = this.props.training;

    return (
      <MapView
        style={styles.mapStyle}
        showsUserLocation={true}
        region={{
          latitude: currentCoords.latitude,
          longitude: currentCoords.longitude,
          latitudeDelta: 0.0043,
          longitudeDelta: 0.0034
        }}>

        <Polyline coordinates={track} />

        <Marker.Animated coordinate={{
          latitude: currentCoords.latitude,
          longitude: currentCoords.longitude
        }}>
          <Icon name='directions-bike' size={24} />
        </Marker.Animated>
      </MapView>
    );
  }
}

const mapStateToProps = ({ training }) => ({ training });

export default connect(
  mapStateToProps,
  {
    changePosition
  }
)(Map);
