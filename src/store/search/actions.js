import { createAction } from "@reduxjs/toolkit";

const sliceName = "search";

export const getLocations = {
  request: createAction(`${sliceName}/GET_LOCATIONS_REQUEST`),
  success: createAction(`${sliceName}/GET_LOCATIONS_REQUEST_SUCCESS`),
  error: createAction(`${sliceName}/GET_LOCATIONS_REQUEST_ERROR`),
};
