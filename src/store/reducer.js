import { combineReducers } from "@reduxjs/toolkit";
import forecastReducer from "./forecast/reducer";
import searchReducer from "./search/reducer";

export const rootReducer = combineReducers({
  forecast: forecastReducer,
  search: searchReducer,
});
