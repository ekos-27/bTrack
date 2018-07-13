import React, { Component } from 'react';
import { View, ScrollView, Picker, Text, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

import { colorSchemes } from '../../config';

import styles from './styles';

import { connect } from 'react-redux';
import { 
  changeName,
  changeEmail,
  chnageColorScheme
} from '../../actions';

class Settings extends Component {
  getPickerItems = () => {
    return Object.keys(colorSchemes).map((key) => {
      return (<Picker.Item key={key} label={key} value={colorSchemes[key]} />);
    });
  };

  render() {
    const {
      name,
      email,
      colorScheme
    } = this.props.settings;

    const inputStyleList = [
      styles.inputStyle,
      { color: colorScheme }
    ];

    return (
      <View style={styles.containerStyle}>
        <View style={styles.inputContainerStyle}>
          <Text style={styles.labelStyle}>Your name</Text>
          <TextInput
            underlineColorAndroid='rgba(0,0,0,0)'
            style={[...inputStyleList, styles.marginLeft10]}
            onChangeText={name => this.props.changeName(name)}
            value={name}
          />
        </View>

        <View style={styles.inputContainerStyle}>
          <Text style={styles.labelStyle}>Your email</Text>
          <TextInput
            underlineColorAndroid='rgba(0,0,0,0)'
            style={[...inputStyleList, styles.marginLeft10]}
            onChangeText={email => this.props.changeEmail(email)}
            value={email}
          />
        </View>

        <View style={styles.inputContainerStyle}>
          <Text style={styles.labelStyle}>Color scheme</Text>
          <Picker
            selectedValue={colorScheme}
            style={inputStyleList}
            onValueChange={(itemValue, itemIndex) => this.props.chnageColorScheme(itemValue)}>

            { this.getPickerItems() }

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
