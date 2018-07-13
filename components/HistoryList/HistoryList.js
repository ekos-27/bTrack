import React, { Component } from 'react';
import { View, Modal } from 'react-native';
import { List, ListItem, Text, Button, Icon } from 'react-native-elements'
import styles from './styles';

import moment from 'moment';

import HistoryDetails from '../HistoryDetails';

import { calculateDistance } from '../../utils';
import { connect } from 'react-redux';

import { 
  removeHistory
} from '../../actions';

class HistoryList extends Component {
  state = {
    visible: false,
    selecetedHistory: null,
  }

  getHistorylist = () => {
    const { history } =  this.props;
    
    return [...history].reverse().map((item) => (
      {
        date: moment(item.startDate).format('DD-MM-YYYY'),
        subtitle: `Time: ${moment.utc(moment(item.endDate).diff(item.startDate)).format('HH:mm:ss')}, 
        Distance: ${calculateDistance(item.track, {unit: 'km'})} km`,
        selecetedHistory: item,
      })
    );
  };

  hideModal = () => {
    this.setState({'visible': false, selecetedHistory: null});
  };

  render() {
    const { visible, selecetedHistory } = this.state;
    const { settings: { colorScheme } } = this.props;

    const listStyles = [
      styles.listStyle,
      { borderTopColor: colorScheme }
    ];

    const itemTitleStyles = [
      styles.itemTitleStyle,
      { color: colorScheme }
    ];

    const leftIconStyles = [
      styles.leftIconStyle,
      { color: colorScheme }
    ];

    return (
      <View style={styles.containerStyle}>
        <List containerStyle={listStyles}>
          {
            this.getHistorylist().map((l, i) => (
              <ListItem
                leftIcon={{name: 'map-marker', type: 'font-awesome' , style: leftIconStyles}}
                key={i}
                title={l.date}
                subtitle={l.subtitle}
                titleStyle={itemTitleStyles}
                chevron={false}
                rightIcon={{name: 'map', type: 'font-awesome' , style: leftIconStyles}}
                onPress={() => { this.setState({visible: true, selecetedHistory: l.selecetedHistory }) }}
              />
            ))
          }
        </List>

        <Modal 
          animationType="slide"
          transparent={false}
          visible={visible}
          onRequestClose={() => {}}>

          <HistoryDetails history={selecetedHistory} color={colorScheme}/>

          <Icon
            raised
            name='close'
            type='font-awesome'
            color={colorScheme}
            size={24}
            containerStyle={styles.buttonStyle}
            onPress={() => this.hideModal()} />

        </Modal>
      </View>
    );
  }
}

const mapStateToProps = ({ history, settings }) => ({ history, settings });

export default connect(
  mapStateToProps,
  {
    removeHistory
  }
)(HistoryList);
