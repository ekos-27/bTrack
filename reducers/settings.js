import {
  CHANGE_NAME,
  CHANGE_EMAIL,
  CHANGE_COLOR_SCHEME
} from '../actions/types';

const initialState = {
  colorScheme: 'green',
  name: 'Eugene',
  email: 'ekos@ekos.by',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME: {
      return {
        ...state,
        name: action.payload,
      };
    }
    case CHANGE_EMAIL: {
      return {
        ...state,
        email: action.email,
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
