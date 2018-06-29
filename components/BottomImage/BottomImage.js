import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

class BottomImage extends Component {
  render() {
    const imageSource = require('../../assets/images/bg_app.png');

    return (
      <View style={styles.containerStyle}>
        <Image
          style={styles.imageStyle}
          source={imageSource}
        />
      </View>
    );
  }
}

export default BottomImage;