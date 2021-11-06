import { createSlice } from "@reduxjs/toolkit";
import { getForecast } from "./actions";

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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getForecast.request, (state) => {
        state.isLoading = true;
      })
      .addCase(getForecast.success, (state, action) => {
        state.todayCast = action.payload.current;
        state.weekCast = action.payload.forecast;
        state.location = action.payload.location;
        state.isLoading = false;
        state.isFailed = false;
      })
      .addCase(getForecast.error, (state) => {
        state.isLoading = false;
        state.isFailed = true;
      });
  },
});

export default forecastSlice.reducer;
