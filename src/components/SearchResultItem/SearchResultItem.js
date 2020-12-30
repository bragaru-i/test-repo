import React, { useState, useRef } from 'react';

// UI
import Button from '../Button/Button';
import './SearchResultItem.scss';
import DIsplayWeatherModal from '../DisplayWeatherModal/DIsplayWeatherModal';
import { connect } from 'react-redux';
import { addCity, removeCity } from '../../actions/myCitiesAction';
import setAlert from '../../actions/setAlert';
import useSearchResultItem from './useSearchResultItem';

const SearchResultItem = ({ item, addCity, setAlert }) => {
  const ref = useRef();
  const {
    modalToggler,
    onAddCityClick,
    showMenu,
    onClick,
    showForecast,
    onCloseModal,
  } = useSearchResultItem(addCity, item, setAlert);
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
    <div className='search-results-item' onClick={onClick}>
      <div className='search-results-item__name' ref={ref}>
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

export default connect(null, { addCity, removeCity, setAlert })(
  SearchResultItem
);
