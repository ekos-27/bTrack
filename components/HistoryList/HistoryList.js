import React, { Component } from 'react';
import { View, Modal } from 'react-native';
import { List, ListItem, Text, Button, Icon } from 'react-native-elements'
import moment from 'moment';
import styles from './styles';
import HistoryDetails from '../HistoryDetails';

import { calculateDistance } from '../../utils';
import { connect } from 'react-redux';

import { withTranslation } from '../../contexts/i18n';
import translate from '../../dictionary';

import { 
  removeHistory
} from '../../actions';

class HistoryList extends Component {
  state = {
    detailsVisible: false,
    subMenuVisible: false,
    selecetedHistory: null,
  }

  getHistorylist = () => {
    const { history, lang } =  this.props;

    return [...history].reverse().map((item) => (
      {
        date: moment(item.startDate).format('DD-MM-YYYY'),
        subtitle: `${translate(lang, 'Time')}: ${moment.utc(moment(item.endDate).diff(item.startDate)).format('HH:mm:ss')}, 
        ${translate(lang, 'Distance')}: ${calculateDistance(item.track, {unit: 'km'})} ${translate(lang, 'km')}`,
        selecetedHistory: item,
      })
    );
  };

  hideModal = () => {
    this.setState({'detailsVisible': false, 'subMenuVisible': false});
  };

  onPressRemoveButton = () => {
    const { selecetedHistory } = this.state;

    this.setState({'subMenuVisible': false});
    this.props.removeHistory(selecetedHistory);
  };

  render() {
    const { detailsVisible, subMenuVisible, selecetedHistory } = this.state;
    const { lang, settings: { colorScheme } } = this.props;

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
      <View>
        <Text style={styles.titleStyle}>{translate(lang, 'My History')}</Text>
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
                  onPressRightIcon={() => {
                    this.setState({
                      detailsVisible: true,
                      subMenuVisible: false,
                      selecetedHistory: l.selecetedHistory
                    }); 
                  }}
                  onPress={() => {
                    this.setState({
                      detailsVisible: false,
                      subMenuVisible: true,
                      selecetedHistory: l.selecetedHistory
                    }); 
                  }}
                />
              ))
            }
          </List>

          <Modal 
            animationType="slide"
            transparent={false}
            visible={detailsVisible}
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

          <Modal 
            animationType="slide"
            transparent={true}
            visible={subMenuVisible}
            onRequestClose={() => {}}>

            <View style={styles.subMenuStyle}>
              <View style={styles.subMenuContainerStyle}>
                <Button
                  onPress={() => (this.setState({'detailsVisible': true, 'subMenuVisible': false}))}
                  buttonStyle={styles.subMenuButtonStyle}
                  icon={{name: 'map', type: 'font-awesome' , style: leftIconStyles}}
                  title={translate(lang, 'Show map')} />

                <Button
                  onPress={this.onPressRemoveButton}
                  buttonStyle={styles.subMenuButtonStyle}
                  icon={{name: 'trash', type: 'font-awesome' , style: leftIconStyles}}
                  title={translate(lang, 'Remove item')} />

                <Icon
                  raised
                  name='close'
                  type='font-awesome'
                  color={colorScheme}
                  size={15}
                  containerStyle={styles.buttonCloseSubMenuStyle}
                  onPress={() => this.hideModal()} />
              </View>
            </View>

          </Modal>
        </View>
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
)(withTranslation(HistoryList));
