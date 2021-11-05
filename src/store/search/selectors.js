import { nanoid } from "@reduxjs/toolkit";

export const getSearchInput = (state) => state.search?.searchInput;

export const selectLocations = (state) => {
  const locations = state.search?.locations;
  if (locations) {
    return locations.map((item) => ({
      name: item.name,
      id: nanoid(),
    }));
  } else {
    return [];
  }
};
