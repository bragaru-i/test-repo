import * as actionTypes from '../actions/types/placesTypes';
const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const placesRed = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SEARCH_CITY_FAIL:
    case actionTypes.SEARCH_COORDS_FAIL:
      return { ...state, isLoading: false, err: payload };
    case actionTypes.SEARCH_CITY_START:
    case actionTypes.SEARCH_COORDS_START:
      return { ...state, isLoading: true, err: null };
    case actionTypes.SEARCH_CITY_SUCCESS:
      return { ...state, isLoading: false, err: null, data: [...payload] };

    case actionTypes.SEARCH_COORDS_SUCCESS:
      return { ...state, isLoading: false, err: null, data: [payload] };
    default:
      return state;
  }
};
export default placesRed;
