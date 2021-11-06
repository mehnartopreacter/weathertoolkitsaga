import { searchAdapter } from "./reducer";

export const getSearchInput = (state) => state.search?.searchInput;

export const { selectAll: selectAllLocations } = searchAdapter.getSelectors(
  (state) => state.search
);
