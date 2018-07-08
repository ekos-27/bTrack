import React, { Component } from 'react';
import { Animated, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import MapView, { Marker, Polyline, UrlTile } from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';
import styles from './styles';

import { connect } from 'react-redux';
import { 
  changePosition,
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

    const {color} = styles.iconStyle;

    return (
      <MapView
        mapType="none"
        style={styles.mapStyle}
        showsUserLocation={true}
        region={{
          latitude: currentCoords.latitude,
          longitude: currentCoords.longitude,
          latitudeDelta:  0.0922,
          longitudeDelta:  0.0922 * ASPECT_RATIO,
        }}>

        <UrlTile 
          urlTemplate="http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
          zIndex={16}
        />
        
        <Polyline 
          strokeWidth={4}
          strokeColor='green'
          coordinates={track} />

        <Marker.Animated coordinate={{
          latitude: currentCoords.latitude,
          longitude: currentCoords.longitude
        }}>
          <Icon name='directions-bike'
            color='green'
            size={24} />
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
