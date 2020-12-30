import * as actionTypes from '../actions/types/myCytiesTypes';

const initialState = [];
const alertReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_MY_CITIES:
      return [...state, payload];
    case actionTypes.REMOVE_MY_CITIES: {
      return state.filter((el) => el.id !== payload);
    }
    default:
      return state;
  }
};
export default alertReducer;
