import axios from 'axios';

export const TYPES = {
  FETCH_WEATHER: 'FETCH_WEATHER',
};

const APY_KEY="25894b225fd680f6a433924db1597889";
const API_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${APY_KEY}`;

export function fetchWeathers(city) {

  const url = `${API_URL}&q=${city},FR`;
  const result = axios.get(url);

  return {
    type: TYPES.FETCH_WEATHER,
    payload: result,
  }
}


