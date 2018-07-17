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
      const { startDate, endDate } = action.payload;

      return state.filter(i => !(i.startDate === startDate && i.endDate == endDate));
    }
    default:
      return state;
  }
}
