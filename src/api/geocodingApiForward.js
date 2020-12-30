import axios from 'axios';

const apiKey = process.env.REACT_APP_GEOCODING_KEY;
const url = `https://eu1.locationiq.com/v1/`;

export default axios.create({
  baseURL: url,
});
