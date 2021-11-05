import { createSlice } from "@reduxjs/toolkit";

const forecastInitialState = {
  isLoading: false,
  isFailed: false,
  todayCast: null,
  weekCast: null,
  location: null,
};

export const forecastSlice = createSlice({
  name: "forecast",
  initialState: forecastInitialState,
  reducers: {
    handleLoading(state) {
      state.isLoading = true;
    },
    handleError(state) {
      state.isLoading = false;
      state.isFailed = true;
    },
    handleForecastReceived(state, action) {
      state.todayCast = action.payload.current;
      state.weekCast = action.payload.forecast;
      state.location = action.payload.location;
      state.isLoading = false;
      state.isFailed = false;
    },
  },
});

export const { handleLoading, handleError, handleForecastReceived } =
  forecastSlice.actions;

export default forecastSlice.reducer;
