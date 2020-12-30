import * as actionTypes from '../actions/types/alertTypes';

const initialState = [];
const alertReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_ALERT:
      return [...state, payload];
    case actionTypes.REMOVE_ALERT: {
      return state.filter((el) => el.id !== payload);
    }
    default:
      return state;
  }
};
export default alertReducer;
