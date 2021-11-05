const sliceName = "forecast";

export const REQUEST_FORECAST = `${sliceName}/REQUEST_FORECAST`;
export const FORECAST_RECEIVED = `${sliceName}/FORECAST_RECEIVED`;

export const requestForecast = () => ({
  type: REQUEST_FORECAST,
});

export const updateForecast = (forecast) => ({
  type: FORECAST_RECEIVED,
  forecast,
});
