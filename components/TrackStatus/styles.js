import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonContainerStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    // backgroundColor: '#ffffff',
  },
  buttonStyle: {
    width: '100%',
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    marginBottom: 20,
  },
  startButtonStyle: {
    backgroundColor: "green",
  },
  finishButtonStyle: {
    backgroundColor: "red",
  },
  labelStyle: {
    color: '#aaaaaa',
  },
  valueStyle: {
    color: 'green',
    fontSize: 26,
  },
  valueContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  }
});

export default styles;
