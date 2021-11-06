import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getLocations } from "./actions";

export const searchAdapter = createEntityAdapter({
  selectId: (location) => location.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const searchInitialState = searchAdapter.getInitialState({
  searchInput: "",
  isLoading: false,
  isFailed: false,
});

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
        searchAdapter.setAll(state, action.payload);
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
