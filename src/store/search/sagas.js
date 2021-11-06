import axios from "axios";
import { put, call, takeLatest, select } from "redux-saga/effects";
import { REQUEST_LOCATIONS } from "./actions";
import { handleLocationsReceived } from "./reducer";
import { getSearchInput } from "./selectors";
import { getLocationSuggestionData } from "../../services/weatherService";

function* getLocations() {
  try {
    const searchInput = yield select(getSearchInput);

    const response = yield call(getLocationSuggestionData, searchInput);

    yield put(handleLocationsReceived(response.data));
  } catch (err) {
    console.log(err);
  }
}
export function* searchWatcher() {
  yield takeLatest(REQUEST_LOCATIONS, getLocations);
}
