import React from 'react';
import { BottomTabBar } from 'react-navigation-tabs';

import { connect } from 'react-redux';

const BottomTabBarContainer = ({...props}) => {
    const { settings: { colorScheme } } = props;

    props.activeTintColor = colorScheme;

    return <BottomTabBar {...props} />;
}

const mapStateToProps = ({ settings }) => ({ settings });

export default connect(
  mapStateToProps,
  null
)(BottomTabBarContainer);

