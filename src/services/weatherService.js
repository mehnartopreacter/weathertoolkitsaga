import axios from "axios";

const WEATHER_API_KEY = "34e791de0bd74b92b08143557210211";

export const getForecastData = (location) => {
  return axios(
    `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${location}&days=10&aqi=no&alerts=no`
  );
};

export const getLocationSuggestionData = (location) => {
  return axios(
    `https://api.weatherapi.com/v1/search.json?key=${WEATHER_API_KEY}&q=${location}`
  );
};
