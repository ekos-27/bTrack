import React, { Component } from 'react';
import { List, ListItem, Text } from 'react-native-elements'
import styles from './styles';

import moment from 'moment';

import { connect } from 'react-redux';
import { 
  removeHistory
} from '../../actions';

class HistoryList extends Component {
  getHistorylist = () => {
    const { history } =  this.props;
    
    return [...history].reverse().map((item) => (
      {
        date: moment(item.startDate).format('DD-MM-YYYY'),
        subtitle: `Time: ${moment.utc(moment(item.endDate).diff(item.startDate)).format('HH:mm:ss')}, Distance: 3.1 km`
      })
    );
  };

  render() {
    return (
      <List containerStyle={styles.listStyle}>
        {
          this.getHistorylist().map((l, i) => (
            <ListItem
              leftIcon={{name: 'map-marker', type: 'font-awesome' , style: styles.leftIconStyle}}
              key={i}
              title={l.date}
              subtitle={l.subtitle}
              titleStyle={styles.itemTitleStyle}
            />
          ))
        }
      </List>
    );
  }
}

const mapStateToProps = ({ history }) => ({ history });

export default connect(
  mapStateToProps,
  {
    removeHistory
  }
)(HistoryList);
