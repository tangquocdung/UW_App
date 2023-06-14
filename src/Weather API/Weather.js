// src/api/weather.js
import axios from 'axios';

const API_KEY = '910c4dd9d5c7b4db04a21facca7a14cb';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const fetchWeatherData = async (city) => {
  const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  return response.data;
};