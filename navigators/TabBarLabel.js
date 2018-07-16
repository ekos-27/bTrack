import React from 'react';
import { Text } from 'react-native';

import { connect } from 'react-redux';

import { withTranslation } from '../contexts/i18n';
import translate from '../dictionary';

const TabBarLabel = ({...props}) => {
    const { lang, tintColor, focused, style, label } = props;

    return (
      <Text style={[style, {color: focused ? tintColor : 'gray'}]}>
        {translate(lang, label)}
      </Text>
    );
}

export default withTranslation(TabBarLabel);
