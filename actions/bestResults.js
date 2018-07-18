import {
  CHANGE_MAX_SPEED,
  CHANGE_LONGEST_DISTANCE
} from './types';

export const changeMaxSpeed = payload => ({ type: CHANGE_MAX_SPEED, payload});
export const changeLongestDistance = payload => ({ type: CHANGE_LONGEST_DISTANCE, payload});
