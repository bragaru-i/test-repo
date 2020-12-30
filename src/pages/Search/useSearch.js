import { useState, useEffect } from 'react';

const validateCoords = (lat, long) => {
  if (!lat || !long) return false;
  const isLatitude = (lat) => isFinite(lat) && Math.abs(lat) <= 90;
  const isLongitude = (long) => isFinite(long) && Math.abs(long) <= 180;
  return isLatitude(lat) && isLongitude(long);
};
const useSearch = (searchForward, searchReverse, addSearch) => {
  const [inputs, setInputs] = useState({
    lat: '',
    lon: '',
    city: '',
    country: '',
  });
  const [validation, setValidation] = useState({
    coords: false,
    countries: false,
  });

  const onChangeInputs = (e) => {
    const { name, value } = e.target;

    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const timerValidation = setTimeout(() => {
      setValidation({
        coords: validateCoords(inputs.lat, inputs.lon),
        countries: inputs.city.length > 0 || inputs.country.length > 0,
      });
    }, 1000);

    return () => clearTimeout(timerValidation);
  }, [inputs]);

  const countriesValid = validation.countries;
  const coordsValid = validation.coords;

  const onSubmitCity = (e) => {
    e.preventDefault();
    const body = { city: inputs.city, country: inputs.country };
    if (countriesValid) {
      addSearch(body);
      searchForward(body);
    }
  };
  const onSubmitCoords = (e) => {
    e.preventDefault();
    const body = { lat: inputs.lat, lon: inputs.lon };
    if (coordsValid) {
      addSearch(body);

      searchReverse(body);
    }
  };
  const onCardClick = (el) => {
    if (el.lat) {
      searchReverse(el);
    } else {
      searchForward(el);
    }
  };
  return {
    inputs,
    onChangeInputs,
    onSubmitCity,
    countriesValid,
    coordsValid,
    onSubmitCoords,
    onCardClick,
  };
};

export default useSearch;
