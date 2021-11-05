import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import { rootSaga } from "./sagas";

export const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewareEnhancer = applyMiddleware(sagaMiddleware);
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(middlewareEnhancer)
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
