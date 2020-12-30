import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import moment from 'moment';

import Modal from '../Modal/Modal';
import './DisplayWeatherModal.scss';
import LoadingCubes from '../LoadingCubes/LoadingCubes';
import getWeatherAction from '../../actions/getWeather';

import setAlert from '../../actions/setAlert';

const DIsplayWeatherModal = ({
  showForecast,
  onCloseModal,
  weather,
  lat,

  lon,
  getWeatherAction,
  setAlert,
  addCity,
  name,
}) => {
  useEffect(() => {
    const body = {
      lat,
      lon,
    };
    getWeatherAction(body);
  }, [lat, lon]);
  let display = '';
  const onAddCityClick = (city) => {
    addCity(city);
  };
  const onClick = (data) => {
    const title = 'Weather Details Daily';
    const message = `Sunrise/Sunset at: ${moment
      .unix(data.sunrise)
      .format('HH:mm:ss')} / ${moment
      .unix(data.sunset)
      .format('HH:mm:ss')}       
             Temperature and how (feels like) :  
     Morning: ${data.temp.morn} (${data.feels_like.morn})  Day: ${
      data.temp.day
    } (${data.feels_like.day})
     Evening: ${data.temp.eve} (${data.feels_like.eve})  Night: ${
      data.temp.night
    } (${data.feels_like.night})
    Humidity: ${data.humidity}
    Clouds: ${data.clouds}
    Wind Speed: ${data.wind_speed}
      `;
    setAlert(message, title);
  };

  const onClickHourly = (data) => {
    const title = 'Weather Details Daily';
    const message = `
    ${data.weather[0].main} - ${data.weather[0].description} 
    Temperature: ${data.temp} / feels like: ${data.feels_like}
    Humidity: ${data.humidity}
    Clouds: ${data.clouds}
    Wind Speed: ${data.wind_speed}
      `;
    setAlert(message, title);
  };
  if (weather.isLoading) display = <LoadingCubes />;
  if (weather.error && weather.data) display = 'No data to display';
  if (weather.data) {
    const { hourly, daily } = weather.data;

    const hourlyDiv = hourly.map((hour) => {
      return (
        <>
          <div
            key={`${hour.dt}--${Date.now()}`}
            className='forecast__daily-box f-center'
            onClick={() => onClickHourly(hour)}
          >
            <span className='forecast__daily-box-day '>
              {moment.unix(hour.dt).format('HH')}
            </span>
            <span className='forecast__daily-box-month '>
              {moment.unix(hour.dt).format('Do')}
            </span>
          </div>
        </>
      );
    });
    const dailyDIiv = daily.map((day) => {
      return (
        <>
          <div
            key={`${day.dt}--${Date.now()}`}
            className='forecast__daily-box f-center'
            onClick={() => onClick(day)}
          >
            <span className='forecast__daily-box-day '>
              {moment.unix(day.dt).format('Do')}
            </span>
            <span className='forecast__daily-box-month '>
              {moment.unix(day.dt).format('MMM')}
            </span>
          </div>
        </>
      );
    });
    display = (
      <div className='forecast'>
        <h3 className='forecast__place'>{name}</h3>
        <div className='forecast__timezone'>
          Timezone: {weather.data.timezone} lat: {weather.data.lat} & lon:{' '}
          {weather.data.lon}
        </div>
        <h4>Forecast Daily / Click on days for updates</h4>
        <div className='forecast__daily'>{dailyDIiv}</div>
        <h4>Forecast Hourly / Click on days for updates</h4>
        <div className='forecast__hourly'>{hourlyDiv}</div>
      </div>
    );
  }
  return (
    <Modal
      title='Forecast'
      close={showForecast}
      onDismiss={onCloseModal}
      onAccept={() => onAddCityClick({ name, lat, lon })}
      onAcceptType='green'
      onDissmissType='error'
      onAcceptText='Add To My Cities'
      onAcceptIsValid
    >
      <div className='forecast'>{display}</div>
    </Modal>
  );
};
const mapStateToProps = (state) => ({ weather: state.weatherCurrent });

export default connect(mapStateToProps, {
  getWeatherAction,
  setAlert,
})(DIsplayWeatherModal);
