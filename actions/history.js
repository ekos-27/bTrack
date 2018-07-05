import {
  ADD_HISTORY,
  REMOVE_HISTORY
} from './types';

export const addHistory = payload => ({ type: ADD_HISTORY, payload});
export const removeHistory = payload => ({ type: REMOVE_HISTORY, payload});