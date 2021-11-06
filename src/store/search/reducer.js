import { createSlice } from "@reduxjs/toolkit";
import { getForecast } from "../forecast/actions";
import { getLocations } from "./actions";

const searchInitialState = {
  locations: null,
  searchInput: "",
  isLoading: false,
  isFailed: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState: searchInitialState,
  reducers: {
    handleSearch(state, action) {
      state.searchInput = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLocations.request, (state) => {
        state.isLoading = true;
      })
      .addCase(getLocations.success, (state, action) => {
        state.locations = action.payload;
        state.isLoading = false;
        state.isFailed = false;
      })
      .addCase(getLocations.error, (state) => {
        state.isLoading = false;
        state.isFailed = true;
      });
  },
});

export const { handleSearch } = searchSlice.actions;

export default searchSlice.reducer;
