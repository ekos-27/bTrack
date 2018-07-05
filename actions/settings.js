import {
  CHANGE_NAME,
  CHANGE_EMAIL,
  CHANGE_COLOR_SCHEME
} from './types';

export const changeName = payload => ({ type: CHANGE_NAME, payload});
export const changeEmail = payload => ({ type: CHANGE_EMAIL, payload});
export const chnageColorScheme = payload => ({ type: CHANGE_COLOR_SCHEME, payload});
