import { v4 as uuidv4 } from 'uuid';

import * as actionTypes from './types/alertTypes';

const setAlert = (
  msg = 'Please update notes here',
  title = 'Notification',
  type = '',
  timer = 5000
) => {
  return (dispatch) => {
    const id = uuidv4();
    dispatch({
      type: actionTypes.SET_ALERT,
      payload: { msg, title, type, id },
    });
    setTimeout(() => {
      dispatch({ type: actionTypes.REMOVE_ALERT, payload: id });
    }, timer);
  };
};
export default setAlert;
