import * as actionTypes from '../actions/types/prevCitiesSearchTypes';

const initialState = [];
const prevSearches = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.PREV_CITY_ADD:
      return [...state, payload];
    case actionTypes.PREV_CITY_REMOVE:
      return state.filter((el) => el.id !== payload);
    default:
      return state;
  }
};

export default prevSearches;
