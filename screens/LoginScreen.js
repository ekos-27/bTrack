import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class LoginScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Username or E-mail"
            onChangeText={(login) => this.setState({login})}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(password) => this.setState({password})}
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => {}}
            title="Login"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7D9CFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 60,
    padding: 10,
    backgroundColor: '#FFF',
    marginBottom: 10,
    borderRadius: 10,
  },
  button: {
    width: 300,
    height: 60,
    padding: 10,
  },
});
