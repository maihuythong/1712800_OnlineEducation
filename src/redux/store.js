/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSagas from "./sagas";
import rootReducer from "./reducer";
import { SIGNOUT } from "../services/user/constants";

let store = null;

const errorHook = (error) => {
  const status = error?.response?.header?.status;
  if (status === 401) {
    store.dispatch({
      type: SIGNOUT,
    });
  }
};

const sagaOptions = {
  onError: errorHook,
};

const sagaMiddleware = createSagaMiddleware(sagaOptions);

/**
 * redux devtools
 * ref: https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
 */
const composeEnhance =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

store = createStore(
  rootReducer,
  composeEnhance(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSagas);

export default store;
