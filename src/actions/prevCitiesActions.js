import * as actionTypes from './types/prevCitiesSearchTypes';
import { v4 as uuidv4 } from 'uuid';

export const addSearch = (payload) => {
  payload.id = uuidv4();
  return {
    type: actionTypes.PREV_CITY_ADD,
    payload,
  };
};
export const removeSearch = (id) => ({
  type: actionTypes.PREV_CITY_REMOVE,
  payload: id,
});
