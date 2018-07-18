import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Icon, Header } from 'react-native-elements';
import styles from './styles';

import { connect } from 'react-redux';

class AppHeader extends Component {
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
      <Header
        backgroundColor={colorScheme}
        leftComponent={{ icon: 'directions-bike', color: '#fff' }}
        centerComponent={{ text: 'bTrack', style: styles.labelStyle }}
      />
    );
  }
}

const mapStateToProps = ({ settings }) => ({ settings });

export default connect(
  mapStateToProps,
  null
)(AppHeader);
