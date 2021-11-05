import axios from "axios";
import { put, call, takeLatest, select } from "redux-saga/effects";
import { REQUEST_LOCATIONS } from "./actions";
import { handleLoading, handleError, handleLocationsReceived } from "./reducer";
import { getSearchInput } from "./selectors";

function* getLocations() {
  try {
    yield put(handleLoading());

    const searchInput = yield select(getSearchInput);

    const response = yield call(
      axios,
      `https://api.weatherapi.com/v1/search.json?key=34e791de0bd74b92b08143557210211&q=${searchInput}`
    );

    yield put(handleLocationsReceived(response.data));
  } catch (err) {
    console.log(err);
    yield put(handleError());
  }
}
export function* searchWatcher() {
  yield takeLatest(REQUEST_LOCATIONS, getLocations);
}