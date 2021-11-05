import { createSlice } from "@reduxjs/toolkit";

const searchInitialState = {
  locations: null,
  searchInput: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState: searchInitialState,
  reducers: {
    handleLoading(state) {
      state.isLoading = true;
    },
    handleError(state) {
      state.isLoading = false;
      state.isFailed = true;
    },
    handleLocationsReceived(state, action) {
      state.locations = action.payload;
      state.isLoading = false;
      state.isFailed = false;
    },
    handleSearch(state, action) {
      state.searchInput = action.payload;
    },
  },
});

export const {
  handleLoading,
  handleError,
  handleLocationsReceived,
  handleSearch,
} = searchSlice.actions;

export default searchSlice.reducer;
