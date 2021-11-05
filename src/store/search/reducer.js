import { createSlice } from "@reduxjs/toolkit";

const searchInitialState = {
  locations: null,
  searchInput: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState: searchInitialState,
  reducers: {
    handleLocationsReceived(state, action) {
      state.locations = action.payload;
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
