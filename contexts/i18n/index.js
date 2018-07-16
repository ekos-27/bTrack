import React, { Component } from 'react';
import { Provider, Consumer } from './context';

import { connect } from 'react-redux';

export const withTranslation = Component => props => (
  <Consumer>
    {lang => <Component {...props} lang={lang} />}
  </Consumer>
);

class ProviderContainer extends Component {
  render() {
    const { language } = this.props.settings;

    return (
      <Provider value={language}>
        {this.props.children}
      </Provider>
    );
  }
}

const mapStateToProps = ({ settings }) => ({ settings });

export const TranslationProvider = connect(
  mapStateToProps,
  null
)(ProviderContainer);
