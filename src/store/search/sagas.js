import { put, call, takeLatest, select } from "redux-saga/effects";
import { getSearchInput } from "./selectors";
import { getLocationSuggestionData } from "../../services/weatherService";
import { getLocations } from "./actions";

function* fetchLocations() {
  try {
    const searchInput = yield select(getSearchInput);

    const response = yield call(getLocationSuggestionData, searchInput);

    yield put(getLocations.success(response.data));
  } catch (err) {
    console.log(err);
    yield put(getLocations.error);
  }
}
export function* searchWatcher() {
  yield takeLatest(getLocations.request, fetchLocations);
}
