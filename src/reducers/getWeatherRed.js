import * as actionTypes from '../actions/types/getWeatherTypes';

const initialState = {
  isLoading: false,
  data: {},
  error: null,
};

const getWeatherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_WEATHER_START:
      return {
        isLoading: true,
      };
    case actionTypes.GET_WEATHER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case actionTypes.GET_WEATHER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };

    default:
      return state;
  }
};
export default getWeatherReducer;
