import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Picker, Text, TextInput } from 'react-native';
import styles from './styles';

import Header from '../../components/Header';

export default class SettingsScreen extends Component {
  state = {
    colorScheme: '',
    nickname: '',
    email: '',
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <Header />

        <ScrollView>
          <View style={styles.inputContainerStyle}>
            <Text style={styles.labelStyle}>Your nickname</Text>
            <TextInput
              underlineColorAndroid='rgba(0,0,0,0)'
              style={[styles.inputStyle, styles.marginLeft10]}
              onChangeText={(nickname) => this.setState({nickname})}
              value={this.state.nickname}
            />
          </View>

          <View style={styles.inputContainerStyle}>
            <Text style={styles.labelStyle}>Your email</Text>
            <TextInput
              underlineColorAndroid='rgba(0,0,0,0)'
              style={[styles.inputStyle, styles.marginLeft10]}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
            />
          </View>

          <View style={styles.inputContainerStyle}>
            <Text style={styles.labelStyle}>Color scheme</Text>
            <Picker
              selectedValue={this.state.colorScheme}
              style={styles.inputStyle}
              onValueChange={(itemValue, itemIndex) => this.setState({colorScheme: itemValue})}>
              <Picker.Item label="Green" value="green" />
              <Picker.Item label="Orange" value="orange" />
              <Picker.Item label="Blue" value="blue" />
              <Picker.Item label="Red" value="red" />
            </Picker>
          </View>
        </ScrollView>
      </View>
    );
  }
}
