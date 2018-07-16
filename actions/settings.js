import {
  CHANGE_LANGUAGE,
  CHANGE_COLOR_SCHEME
} from './types';

export const changeColorScheme = payload => ({ type: CHANGE_COLOR_SCHEME, payload});
export const changeLanguage = payload => ({ type: CHANGE_LANGUAGE, payload});
