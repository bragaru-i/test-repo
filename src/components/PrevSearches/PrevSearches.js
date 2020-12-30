import React from 'react';
import Icon from '../Icons/Icons';
import './PrevSearches.scss';
const PrevSearches = ({ prevCities, onCardClick, removeSearch }) => {
  let prevSearches = '';
  const onClick = (el) => {
    onCardClick(el);
  };
  const removeElement = (id) => {
    removeSearch(id);
  };
  if (!prevCities && prevCities.length === 0) {
    prevSearches = 'Your search history is empty';
  } else {
    prevSearches = prevCities.map((el) => (
      <div key={el.id} className=' search-card f-center'>
        <div className='search-card__title'> You searched for:</div>
        <span
          className='search-card__icon--delete'
          onClick={() => removeElement(el.id)}
        >
          <Icon name='delete-record' width='2rem' />
        </span>
        <div className='search-card__content' onClick={() => onClick(el)}>
          <p>{el.lat ? `Latitude: ${el.lat}` : `Country: ${el.country}`}</p>
          <p>{el.lon ? `Longitude: ${el.lon}` : `City: ${el.city}`}</p>
        </div>
      </div>
    ));
  }
  return <div className='prev-searches'>{prevSearches}</div>;
};

export default PrevSearches;
