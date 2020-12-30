import React from 'react';
import WIndowWrapper from '../../components/WindowWrapper/WindowWrapper';
import { connect } from 'react-redux';

import Button from '../../components/Button/Button';
// styles
import styles from './HomePage.module.scss';

// ACTIONS
import { removeCity } from '../../actions/myCitiesAction';
import CurrentWeatherPanel from '../../components/CurrentWeatherPanel/CurrentWeatherPanel';

// Weather Modal
import DIsplayWeatherModal from '../../components/DisplayWeatherModal/DIsplayWeatherModal';

import useHomePage from './useHomePage';

import setAlert from '../../actions/setAlert';

const HomePage = ({ cities, removeCity }) => {
  const {
    modalToggler,

    showForecast,
    onCloseModal,
  } = useHomePage(setAlert);
  let homeDIsplay = '';
  const onRemoveCity = (id) => {
    removeCity(id);
  };
  if (!cities || cities.length === 0) {
    homeDIsplay = 'You Have No cities Choosen. Please navigate to search tab';
  } else {
    homeDIsplay = (
      <div className='cities'>
        {cities.map((item) => (
          <div item={item} key={item.id} className={styles.city}>
            <div className={styles.cityName}>{item.name}</div>
            <div className={styles.cityLat}>{item.lat}</div>
            <div className={styles.cityLon}>{item.lon}</div>
            <Button
              text='Open Forecast'
              onClick={modalToggler}
              color='yellow'
            />
            <Button
              text='Remove from Cities'
              onClick={() => onRemoveCity(item.id)}
              color='error'
            />
            {showForecast && (
              <DIsplayWeatherModal
                showForecast={showForecast}
                onCloseModal={onCloseModal}
                lat={item.lat}
                lon={item.lon}
                addCity={() => {}}
                name={item.display_name}
              />
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <WIndowWrapper title='Weather Now in Your cities'>
        <div className={styles.cities}>{homeDIsplay}</div>
      </WIndowWrapper>
      <CurrentWeatherPanel />
    </div>
  );
};

const mapStateToProps = (state) => ({ cities: state.cities });
export default connect(mapStateToProps, { removeCity })(HomePage);
