import React from 'react';
import { connect } from 'react-redux';
// UI components
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import WIndowWrapper from '../../components/WindowWrapper/WindowWrapper';

// custom hook
import useSearch from './useSearch';

// Action creator
import { searchForward, searchReverse } from '../../actions/fetchLocations';
import { addSearch, removeSearch } from '../../actions/prevCitiesActions';

//styles
import './Search.scss';
import SearchResult from '../../components/SearchResult/SearchResult';
import PrevSearches from '../../components/PrevSearches/PrevSearches';

const Search = ({
  searchForward,
  searchReverse,
  searchRes,
  addSearch,
  prevCities,
  removeSearch,
  getWeatherAction,
}) => {
  const {
    inputs,
    onChangeInputs,
    countriesValid,
    coordsValid,
    onSubmitCity,
    onSubmitCoords,
    onCardClick,
  } = useSearch(searchForward, searchReverse, addSearch);

  return (
    <>
      <div className='search f-center'>
        <WIndowWrapper title='Search by coordinates'>
          <div className='search__panel f-center'>
            <Input
              name='lat'
              value={inputs.lat}
              onChange={onChangeInputs}
              placeholder='Latitude'
              isValid
              size='lg'
            />
            <Input
              name='lon'
              value={inputs.lon}
              onChange={onChangeInputs}
              placeholder='Longitude'
              isValid
              size='lg'
            />
            <Button
              size='md'
              isValid={coordsValid}
              text='Search by coords'
              onClick={onSubmitCoords}
            />
          </div>
        </WIndowWrapper>
        <WIndowWrapper title='Search by City/Country'>
          <div className='search__panel f-center'>
            <Input
              name='city'
              value={inputs.city}
              onChange={onChangeInputs}
              placeholder='City'
              isValid
              size='lg'
            />
            <Input
              name='country'
              value={inputs.country}
              onChange={onChangeInputs}
              placeholder='Country'
              isValid
              size='lg'
            />
            <Button
              size='md'
              isValid={countriesValid}
              text='Search by coords'
              onClick={onSubmitCity}
            />
          </div>
        </WIndowWrapper>
      </div>
      <div className='search-results f-center'>
        <SearchResult searchRes={searchRes} />
      </div>
      <div className='search-other f-center'>
        <WIndowWrapper title='Your Other Searches'>
          <PrevSearches
            prevCities={prevCities}
            onCardClick={onCardClick}
            removeSearch={removeSearch}
          />
        </WIndowWrapper>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  searchRes: state.locations,
  prevCities: state.prevCities,
});

export default connect(mapStateToProps, {
  searchForward,
  searchReverse,
  addSearch,
  removeSearch,
})(Search);
