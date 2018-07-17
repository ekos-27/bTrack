import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  listStyle: {
    marginTop: 10,
    borderTopWidth: 4,
  },
  itemTitleStyle: {
  },
  leftIconStyle: {
  },
  buttonStyle: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  buttonCloseSubMenuStyle: {
    position: 'absolute',
    top: 3,
    right: 3,
  },
  titleStyle: {
    textAlign: 'center',
    width: '100%',
    color: '#aaaaaa',
    paddingTop: 10,
  },
  subMenuStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subMenuContainerStyle: {
    backgroundColor: '#eeeeee',
    padding: 40,
  },
  subMenuButtonStyle: {
    marginTop: 10,
  }
});

export default styles;
