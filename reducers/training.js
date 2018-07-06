import {
  CHANGE_POSITION,
  START_TRAINING,
  FINISH_TRAINING
} from '../actions/types';

const initialState = {
  starDate: null,
  endDate: null,
  status: false,
  track: [],
  currentCoords: {
    latitude: 0,
    longitude: 0,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_POSITION: {
      if (!state.status) {
        return {
          ...state,
          currentCoords: action.payload,
        };
      } else {
        return {
          ...state,
          currentCoords: action.payload,
          track: [
            ...state.track,
            action.payload
          ]
        };
      }
    }
    case START_TRAINING: {
      return {
        ...state,
        ...action.payload
      };
    }
    case FINISH_TRAINING: {
      return {
        ...state,
        ...action.payload,
        track: []
      };
    }
    default:
      return state;
  }
}
