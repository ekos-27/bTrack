import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
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

    let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    this.setState({ location });

    this._watchPositionAsync();
  };

  _watchPositionAsync() {
    Location.watchPositionAsync({ 
      enableHighAccuracy: true,
      timeInterval: 300,
    }, location => {
      let coords = {
        latitude: 0,
        longitude: 0,
      };
  
      if (this.state.location) {
        coords = this.state.location.coords;
      }

      this.props.changePosition(coords);
    });
  }

  render() {
    const {
      currentCoords
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

        <Marker coordinate={{
          latitude: currentCoords.latitude,
          longitude: currentCoords.longitude
        }}>
          <Icon name='directions-bike' size={24} />
        </Marker>
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
