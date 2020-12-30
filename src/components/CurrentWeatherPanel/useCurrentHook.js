import { useEffect } from 'react';

const useCurrentHook = (setAlert, getWeather) => {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const params = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        getWeather(params);
      });
    } else {
      setAlert('Your Browser do not support Geolocation', 'Browser Support');
    }
  }, []);
  return;
};
export default useCurrentHook;
