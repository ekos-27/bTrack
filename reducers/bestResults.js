import {
  CHANGE_MAX_SPEED,
  CHANGE_LONGEST_DISTANCE
} from '../actions/types';

const initialState = {
  maxSpeed: 0,
  longestDistance: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MAX_SPEED: {
      const { maxSpeed } = state;

      if (maxSpeed >= action.payload) {
        return state;
      }

      return {
        ...state,
        maxSpeed: action.payload
      };
    }
    case CHANGE_LONGEST_DISTANCE: {
      const { longestDistance } = state;

      if (longestDistance >= action.payload) {
        return state;
      }

      return {
        ...state,
        longestDistance: action.payload
      };
    }
    default:
      return state;
  }
}
