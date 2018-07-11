import React from 'react';
import MainNavigator from './navigators/MainNavigator';

import { Provider } from 'react-redux';
import { store, persistor } from './store';

import { PersistGate } from 'redux-persist/lib/integration/react';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MainNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
