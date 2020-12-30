import { useState } from 'react';

const useSearchResultItem = (addCity, item, setAlert) => {
  const [showMenu, setSHowMenu] = useState(false);
  const [showForecast, setShowForecats] = useState(false);

  const onAddCityClick = (e) => {
    const name = item.display_name;
    const { lat, lon, place } = item;
    setAlert(`City ${name} added`, 'Succsessfully added', 'special', 1000);
    addCity({ name, lat, lon, place });
  };

  const onClick = () => setSHowMenu((prevState) => !prevState);
  const modalToggler = () => setShowForecats((prevState) => !prevState);
  const onCloseModal = () => setShowForecats(false);
  return {
    modalToggler,
    onAddCityClick,
    showMenu,
    onClick,
    showForecast,
    onCloseModal,
  };
};

export default useSearchResultItem;
