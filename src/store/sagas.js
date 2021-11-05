import { all } from "redux-saga/effects";
import { weatherWatcher } from "./forecast/sagas";
import { searchWatcher } from "./search/sagas";

export function* rootSaga() {
  yield all([weatherWatcher(), searchWatcher()]);
}
