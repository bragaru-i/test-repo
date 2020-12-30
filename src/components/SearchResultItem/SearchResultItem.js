import React, { useState, useRef } from 'react';

// UI
import Button from '../Button/Button';
import './SearchResultItem.scss';
import DIsplayWeatherModal from '../DisplayWeatherModal/DIsplayWeatherModal';
import { connect } from 'react-redux';
import { addCity, removeCity } from '../../actions/myCitiesAction';

const SearchResultItem = ({ item, addCity }) => {
  const [showMenu, setSHowMenu] = useState(false);
  const [showForecast, setShowForecats] = useState(false);

  const onAddCityClick = (e) => {
    console.log(item);
    const name = item.display_name;
    const { lat, lon, place } = item;
    addCity({ name, lat, lon, place });
  };

  const onClick = () => setSHowMenu((prevState) => !prevState);
  const modalToggler = () => setShowForecats((prevState) => !prevState);
  const onCloseModal = () => setShowForecats(false);
  const ref = useRef();
  const newMenu = (
    <div className='search-results-item__menu'>
      <Button
        size='sm'
        text='Check Weather'
        color='yellow'
        onClick={modalToggler}
        isValid
      />
      <Button
        isValid
        size='sm'
        text='Add To My Cities'
        color='green'
        onClick={() => onAddCityClick(item)}
      />
    </div>
  );
  return (
    <div className='search-results-item'>
      <div className='search-results-item__name' ref={ref} onClick={onClick}>
        {item.display_name}
      </div>
      {showMenu ? (
        newMenu
      ) : (
        <>
          {' '}
          <div className='search-results-item__type'>
            {item.type || 'not setted'}
          </div>
          <div className='search-results-item__lat'>{item.lat}</div>
          <div className='search-results-item__lon'>{item.lon}</div>
          <div className='search-results-item__importance'>
            {item.importance
              ? (Math.round(item.importance * 100) / 100).toFixed(2)
              : 'none'}
          </div>
        </>
      )}
      {showForecast && (
        <DIsplayWeatherModal
          showForecast={showForecast}
          onCloseModal={onCloseModal}
          lat={item.lat}
          addCity={addCity}
          lon={item.lon}
          name={item.display_name}
        />
      )}
    </div>
  );
};

export default connect(null, { addCity, removeCity })(SearchResultItem);
