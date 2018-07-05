import {
  START_TRAINING,
  FINISH_TRAINING,
  CHANGE_POSITION
} from './types';

export const startTraining = payload => ({ type: START_TRAINING, payload});
export const finishTraining = payload => ({ type: FINISH_TRAINING, payload});
export const changePosition = payload => ({ type: CHANGE_POSITION, payload});
