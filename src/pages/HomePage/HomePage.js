import React from 'react';
import WIndowWrapper from '../../components/WindowWrapper/WindowWrapper';
import { connect } from 'react-redux';

import Button from '../../components/Button/Button';
// styles
import styles from './HomePage.module.scss';

// ACTIONS
import { removeCity } from '../../actions/myCitiesAction';

const HomePage = ({ cities, removeCity }) => {
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
              text='Remove from Cities'
              onClick={() => onRemoveCity(item.id)}
              color='error'
            />
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
      <WIndowWrapper title='Last Searches'>searches</WIndowWrapper>
    </div>
  );
};

const mapStateToProps = (state) => ({ cities: state.cities });
export default connect(mapStateToProps, { removeCity })(HomePage);
