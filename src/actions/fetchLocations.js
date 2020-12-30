import geoCodingApi from '../api/geocodingApiForward';

import * as actionTypes from './types/placesTypes';

const key = process.env.REACT_APP_GEOCODING_KEY;

export const searchForward = (body) => (dispatch) => {
  dispatch({ type: actionTypes.SEARCH_CITY_START });
  const params = {
    key,
    ...body,
    format: 'json',
  };
  geoCodingApi
    .get('search.php/forward', { params })
    .then((res) => {
      return dispatch({
        type: actionTypes.SEARCH_CITY_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({ type: actionTypes.SEARCH_CITY_FAIL, payload: err })
    );
};
export const searchReverse = (body) => (dispatch) => {
  dispatch({ type: actionTypes.SEARCH_COORDS_START });
  const params = {
    key,
    ...body,
    format: 'json',
  };
  geoCodingApi
    .get('/reverse.php', { params })
    .then((res) => {
      return dispatch({
        type: actionTypes.SEARCH_COORDS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({ type: actionTypes.SEARCH_COORDS_FAIL, payload: error });
    });
};
