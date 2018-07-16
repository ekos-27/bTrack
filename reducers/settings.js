import {
  CHANGE_LANGUAGE,
  CHANGE_COLOR_SCHEME
} from '../actions/types';

const initialState = {
  colorScheme: 'green',
  language: 'en'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return {
        ...state,
        language: action.payload,
      };
    }
    case CHANGE_COLOR_SCHEME: {
      return {
        ...state,
        colorScheme: action.payload,
      };
    }
    default:
      return state;
  }
}
