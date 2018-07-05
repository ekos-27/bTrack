import React, { Component } from 'react';
import { View, ScrollView, Picker, Text, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';

import { connect } from 'react-redux';
import { 
  changeName,
  changeEmail,
  chnageColorScheme
} from '../../actions';

class Settings extends Component {
  render() {
    const {
      name,
      email,
      colorScheme
    } = this.props.settings;

    return (
      <View style={styles.containerStyle}>
        <View style={styles.inputContainerStyle}>
          <Text style={styles.labelStyle}>Your name</Text>
          <TextInput
            underlineColorAndroid='rgba(0,0,0,0)'
            style={[styles.inputStyle, styles.marginLeft10]}
            onChangeText={name => this.props.changeName(name)}
            value={name}
          />
        </View>

        <View style={styles.inputContainerStyle}>
          <Text style={styles.labelStyle}>Your email</Text>
          <TextInput
            underlineColorAndroid='rgba(0,0,0,0)'
            style={[styles.inputStyle, styles.marginLeft10]}
            onChangeText={email => this.props.changeEmail(email)}
            value={email}
          />
        </View>

        <View style={styles.inputContainerStyle}>
          <Text style={styles.labelStyle}>Color scheme</Text>
          <Picker
            selectedValue={colorScheme}
            style={styles.inputStyle}
            onValueChange={(itemValue, itemIndex) => this.props.chnageColorScheme(itemValue)}>
            <Picker.Item label="Green" value="green" />
            <Picker.Item label="Orange" value="orange" />
            <Picker.Item label="Blue" value="blue" />
            <Picker.Item label="Red" value="red" />
          </Picker>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ settings }) => ({ settings });

export default connect(
  mapStateToProps,
  {
    changeName,
    changeEmail,
    chnageColorScheme
  }
)(Settings);
