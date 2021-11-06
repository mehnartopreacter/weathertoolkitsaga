import { put, call, takeLatest, select } from "redux-saga/effects";
import { getForecast } from "./actions";
import { getSearchInput } from "../search/selectors";
import { getForecastData } from "../../services/weatherService";

function* fetchForecast() {
  try {
    const searchInput = yield select(getSearchInput);

    const response = yield call(getForecastData, searchInput);

    yield put(getForecast.success(response.data));
  } catch (err) {
    console.log(err);
    yield put(getForecast.error);
  }
}
export function* weatherWatcher() {
  yield takeLatest(getForecast.request, fetchForecast);
}
