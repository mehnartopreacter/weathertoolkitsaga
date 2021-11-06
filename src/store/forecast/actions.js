import { createAction } from "@reduxjs/toolkit";

const sliceName = "forecast";

export const getForecast = {
  request: createAction(`${sliceName}/GET_FORECAST_REQUEST`),
  success: createAction(`${sliceName}/GET_FORECAST_REQUEST_SUCCESS`),
  error: createAction(`${sliceName}/GET_FORECAST_REQUEST_ERROR`),
};
