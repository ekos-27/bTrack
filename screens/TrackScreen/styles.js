import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  mapStyle: {
    position: 'absolute',
    top: 76,
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonContainerStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    // backgroundColor: '#ffffff',
  },
  buttonStyle: {
    backgroundColor: "green",
    width: '100%',
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    marginBottom: 20,
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
