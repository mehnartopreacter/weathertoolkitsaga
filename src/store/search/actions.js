const sliceName = "search";

export const REQUEST_LOCATIONS = `${sliceName}/REQUEST_LOCATIONS`;
export const LOCATIONS_RECEIVED = `${sliceName}/LOCATIONS_RECEIVED`;

export const requestLocations = () => ({
  type: REQUEST_LOCATIONS,
});

export const updateLocations = (locations) => ({
  type: LOCATIONS_RECEIVED,
  locations,
});
