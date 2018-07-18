import { combineReducers } from 'redux';

import training from './training';
import history from './history';
import settings from './settings';
import bestResults from './bestResults';

export  default combineReducers({
  training,
  history,
  settings,
  bestResults,
});
