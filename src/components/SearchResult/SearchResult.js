import React from 'react';
import WIndowWrapper from '../../components/WindowWrapper/WindowWrapper';
import LoadingCUbes from '../../components/LoadingCubes/LoadingCubes';

import './SearchResult.scss';
import SearchResultItem from '../SearchResultItem/SearchResultItem';

const SearchResult = ({ searchRes }) => {
  let searchResults = (
    <div className='search-results__data'> No data to display</div>
  );

  if (
    searchRes.data &&
    searchRes.data.length > 0 &&
    !searchRes.err &&
    !searchRes.isLoading
  ) {
    searchResults = (
      <div className='search-results__data'>
        {searchRes.data.map((item) => (
          <SearchResultItem item={item} key={item.place_id} />
        ))}
      </div>
    );
  }
  return (
    <WIndowWrapper title='Search Results'>
      {searchRes.isLoading && <LoadingCUbes />}
      {searchResults}
    </WIndowWrapper>
  );
};

export default SearchResult;
