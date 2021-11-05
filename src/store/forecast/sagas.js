import axios from "axios";
import { put, call, takeLatest, select } from "redux-saga/effects";
import { REQUEST_FORECAST } from "./actions";
import { handleLoading, handleError, handleForecastReceived } from "./reducer";
import { getSearchInput } from "../search/selectors";

function* getForecast() {
  try {
    const searchInput = yield select(getSearchInput);

    yield put(handleLoading());

    const response = yield call(
      axios,
      `https://api.weatherapi.com/v1/forecast.json?key=34e791de0bd74b92b08143557210211&q=${searchInput}&days=10&aqi=no&alerts=no`
    );

    yield put(handleForecastReceived(response.data));
  } catch (err) {
    console.log(err);
    yield put(handleError());
  }
}
export function* weatherWatcher() {
  yield takeLatest(REQUEST_FORECAST, getForecast);
}
