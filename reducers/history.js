import {
  ADD_HISTORY,
  REMOVE_HISTORY
} from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_HISTORY: {
      return [
        ...state,
        action.payload
      ];
    }
    case REMOVE_HISTORY: {
      return state;
    }
    default:
      return state;
  }
}
