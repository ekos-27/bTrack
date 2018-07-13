import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderColor: '#dddddd',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  labelStyle: {
    fontSize: 20,
    color: '#999999',
    minWidth: 30
  },
  valueStyle: {
    fontSize: 19,
  },
  titleStyle: {
    textAlign: 'center',
    width: '100%',
    color: '#aaaaaa',
  },
});

export default styles;