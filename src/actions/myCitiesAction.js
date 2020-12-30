import { v4 as uuidv4 } from 'uuid';

import * as actionTypes from './types/myCytiesTypes';

export const addCity = (body) => (dispatch) =>
  dispatch({
    type: actionTypes.ADD_MY_CITIES,
    payload: {
      id: uuidv4(),
      ...body,
    },
  });

export const removeCity = (id) => (dispatch) =>
  dispatch({ type: actionTypes.REMOVE_MY_CITIES, payload: id });
