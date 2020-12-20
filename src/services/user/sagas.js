import { call, put, takeLatest, all, takeEvery } from "redux-saga/effects";
import UserRepo from "./repo";
import {
  setLoggedAccount,
  showFlashMessage,
} from "../app/actions";
import {
  GET_USER_DATA,
  SIGNUP,
  SIGNIN,
  RESET_PASSWORD,
  SIGNOUT,
  UPDATE_PROFILE,
  APP_BOOT,
} from "./constants";
import AsyncStorage from "../../utils/storage/asyncStorage";

function* getLoggedAccount({ meta: { callback } = {} }) {
  try {
    const userData = yield call(UserRepo.getMe);
    if (userData?.payload) {
      yield put(setLoggedAccount(userData?.payload));
    }
  } catch (e) {
  } finally {
    if (typeof callback === "function") {
      yield call(callback);
    }
  }
}

function* signin({
  payload: { email, password } = {},
  meta: { callback } = {},
}) {
  try {
    const userData = yield call(UserRepo.signin, { email, password });
    yield all([
      call(AsyncStorage.setAccessToken, userData?.token),
      put(setLoggedAccount(userData?.userInfo ?? null)),
    ]);

    if (typeof callback === "function") {
      yield call(callback);
    }
  } catch (e) {
    yield put(
      showFlashMessage({
        description: e?.response?.data?.message ?? null,
      })
    );
  }
}

function* signup({ payload = {}, meta: { callback } = {} }) {
  try {
    yield call(UserRepo.signup, payload);
    if (typeof callback === "function") {
      yield call(callback);
    }
  } catch (e) {
    yield put(
      showFlashMessage({
        description: e?.response?.data?.message ?? null,
      })
    );
  }
}

function* signout() {
  yield put(setLoggedAccount(null));
  yield call(AsyncStorage.removeAccessToken);
}

function* updateProfile({
  payload: { name, phone, avatar } = {},
  meta: { afterSuccess = () => {}, afterFail = () => {} } = {},
}) {
  try {
    const userData = yield call(UserRepo.updateProfile, {
      name,
      phone,
      avatar,
    });

    yield put(setLoggedAccount(userData ?? null));

    yield call(afterSuccess);
  } catch (e) {
    yield call(afterFail);
  }
}

function* resetPassword({ payload, meta: { callback } = {} }) {
  try {
    yield call(UserRepo.sendEmailForgotPassword, payload.email);
    if (typeof callback === "function") {
      yield call(callback);
    }
  } catch (e) {
    yield put(
      showFlashMessage({
        description: e?.response?.data?.message ?? null,
      })
    );
  }
}

function* appBoot({
  meta: { afterSuccess = () => {}, afterFail = () => {} } = {},
}) {
  try {
    yield all([
      put({
        type: GET_USER_DATA,
      }),
    ]);
    yield call(afterSuccess);
  } catch (e) {
    yield call(afterFail);
  }
}

export default function* () {
  yield takeLatest(GET_USER_DATA, getLoggedAccount);
  yield takeLatest(SIGNIN, signin);
  yield takeLatest(SIGNUP, signup);
  yield takeLatest(RESET_PASSWORD, resetPassword);
  yield takeEvery(SIGNOUT, signout);
  yield takeLatest(UPDATE_PROFILE, updateProfile);
  yield takeLatest(APP_BOOT, appBoot);
}
