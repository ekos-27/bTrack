import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { List, ListItem, Text } from 'react-native-elements'

import styles from './styles';

import Header from '../../components/Header';

export default class HistoryScreen extends React.Component {

  list = [
    {
      date: '07.06.2018',
      subtitle: 'Time: 00:00:00, Distance: 3.1 km'
    },
    {
      date: '06.06.2018',
      subtitle: 'Time: 00:00:00, Distance: 3.1 km'
    },
    {
      date: '05.06.2018',
      subtitle: 'Time: 00:00:00, Distance: 3.1 km'
    },
    {
      date: '04.06.2018',
      subtitle: 'Time: 00:00:00, Distance: 3.1 km'
    },
    {
      date: '03.06.2018',
      subtitle: 'Time: 00:00:00, Distance: 3.1 km'
    },
    {
      date: '02.06.2018',
      subtitle: 'Time: 00:00:00, Distance: 3.1 km'
    },
    {
      date: '01.06.2018',
      subtitle: 'Time: 00:00:00, Distance: 3.1 km'
    },
    {
      date: '30.05.2018',
      subtitle: 'Time: 00:00:00, Distance: 3.1 km'
    },
    {
      date: '09.05.2018',
      subtitle: 'Time: 00:00:00, Distance: 3.1 km'
    },
  ]

  render() {
    return (
      <View style={styles.containerStyle}>
        <Header />

        <ScrollView>

          <Text style={styles.titleStyle}>My History</Text>

          <List containerStyle={styles.listStyle}>
            {
              this.list.map((l, i) => (
                <ListItem
                  leftIcon={{name: 'explore', style: styles.leftIconStyle}}
                  key={i}
                  title={l.date}
                  subtitle={l.subtitle}
                  titleStyle={styles.itemTitleStyle}
                />
              ))
            }
          </List>

        </ScrollView>
      </View>
    );
  }
}
