import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import styles from './styles';

import { connect } from 'react-redux';

class Header extends Component {
  render() {

    const {
      settings: { colorScheme }
    } = this.props;

    const iconStyles = [
      styles.iconStyle,
      { color: colorScheme }
    ];

    const labelStyles = [
      styles.labelStyle,
      { color: colorScheme }
    ];

    return (
      <View style={styles.containerStyle}>
        <Icon name="directions-bike" iconStyle={iconStyles} />
        <Text h4 style={labelStyles}>bTrack</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ settings }) => ({ settings });

export default connect(
  mapStateToProps,
  null
)(Header);
