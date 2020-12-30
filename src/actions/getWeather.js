import weatherApi from '../api/weatherApi';
import * as actionTypes from './types/getWeatherTypes';
const apiKey = process.env.REACT_APP_WEATHER_KEY;

const getWeather = (body) => (dispatch) => {
  dispatch({ type: actionTypes.GET_WEATHER_START });
  const params = {
    lat: body.lat,
    lon: body.lon,
    appid: apiKey,
    units: 'metric',
  };
  weatherApi
    .get('', { params })
    .then((res) => {
      return dispatch({
        type: actionTypes.GET_WEATHER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({ type: actionTypes.GET_WEATHER_FAIL, payload: err })
    );
};

export default getWeather;
