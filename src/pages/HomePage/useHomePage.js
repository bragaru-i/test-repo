import { useState } from 'react';

const useHomePage = (item, setAlert) => {
  const [showForecast, setShowForecats] = useState(false);

  const modalToggler = () => setShowForecats((prevState) => !prevState);
  const onCloseModal = () => setShowForecats(false);
  return {
    modalToggler,

    showForecast,
    onCloseModal,
  };
};

export default useHomePage;
