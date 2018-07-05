import { combineReducers } from 'redux';

import training from './training';
import history from './history';
import settings from './settings';

export  default combineReducers({
  training,
  history,
  settings,
});
