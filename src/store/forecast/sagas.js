import axios from "axios";
import { put, call, takeLatest, select } from "redux-saga/effects";
import { getForecast } from "./actions";
import { getSearchInput } from "../search/selectors";

function* fetchForecast() {
  try {
    const searchInput = yield select(getSearchInput);

    const response = yield call(
      axios,
      `https://api.weatherapi.com/v1/forecast.json?key=34e791de0bd74b92b08143557210211&q=${searchInput}&days=10&aqi=no&alerts=no`
    );

    yield put(getForecast.success(response.data));
  } catch (err) {
    console.log(err);
    yield put(getForecast.error);
  }
}
export function* weatherWatcher() {
  yield takeLatest(getForecast.request, fetchForecast);
}
