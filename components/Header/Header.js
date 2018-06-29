import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import styles from './styles';

class Header extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Icon name="directions-bike" iconStyle={styles.iconStyle} />
        <Text h4 style={styles.labelStyle}>bTrack</Text>
      </View>
    );
  }
}

export default Header;