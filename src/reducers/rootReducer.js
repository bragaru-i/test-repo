import { combineReducers } from 'redux';

import fetchLocationsRed from './fetchLocationsRed';
import prevCitiesRed from './prevCitiesRed';
import getWeatherReducer from './getWeatherRed';
import alertReducer from './alertReducer';
import myCitiesReducer from './myCitiesReducer';
//  root reducers defined here:

const rootReducer = combineReducers({
  alerts: alertReducer,
  locations: fetchLocationsRed,
  prevCities: prevCitiesRed,
  weatherCurrent: getWeatherReducer,
  cities: myCitiesReducer,
});

export default rootReducer;
