import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import WindowWrapper from '../WindowWrapper/WindowWrapper';

import setAlert from '../../actions/setAlert';
import getWeather from '../../actions/getWeather';

import useCurrent from './useCurrentHook';
import LoadingCubes from '../LoadingCubes/LoadingCubes';

// styles
import './CurrentWeatherPanel.scss';

const CurrentWeatherPanel = ({ setAlert, getWeather, weather }) => {
  useCurrent(setAlert, getWeather);
  //   Loading state
  if (weather.isLoading)
    return (
      <WindowWrapper title='Loading Weather'>
        <div className='current-weather'>
          <LoadingCubes />
        </div>
      </WindowWrapper>
    );
  // Error state
  if (weather.error || !weather.data.current)
    return (
      <WindowWrapper title='Error Loading Data'>
        <div className='current-weather'>Something Went Wrong</div>
      </WindowWrapper>
    );
  // Display Data
  return (
    <WindowWrapper title='Your City Weather'>
      <div className='current-weather'>
        Current timezone: {weather.data.timezone}
        <ul className='current-weather-now'>
          <li className='current-weather-now__item'>
            Sunrise at:{' '}
            {moment.unix(weather.data.current.sunrise).format('HH:mm:ss')}
          </li>
          <li className='current-weather-now__item'>
            Sunset at:
            {moment.unix(weather.data.current.sunset).format('HH:mm:ss')}
          </li>
          <li className='current-weather-now__item'>
            Temperature now: {weather.data.current.temp} C
          </li>
          <li className='current-weather-now__item'>
            Feels like: {weather.data.current.feels_like} C
          </li>
          {weather.data.alerts && (
            <li className='current-weather-now__item current-weather-now__item--alert '>
              Weather Alerts:
              {weather.data.alerts.map((alert) => (
                <div key={alert.event} className='weather-alerts'>
                  <p className='weather-alerts-description'>
                    {alert.event}: {alert.description}
                  </p>
                  <p className='weather-alerts-description'>
                    From - To {moment.unix(alert.start).format('HH:mm:ss')} -
                    {moment.unix(alert.end).format('HH:mm:ss')}
                  </p>
                </div>
              ))}
            </li>
          )}
        </ul>
      </div>
    </WindowWrapper>
  );
};

const mapStateToProps = (state) => ({ weather: state.weatherCurrent });
export default connect(mapStateToProps, { setAlert, getWeather })(
  CurrentWeatherPanel
);
