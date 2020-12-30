import axios from 'axios';

const url = `https://api.openweathermap.org/data/2.5/onecall`;

export default axios.create({
  baseURL: url,
});
