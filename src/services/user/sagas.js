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
  UPDATE_LANGUAGE,
  AFTER_SIGN_IN_GOOGLE
} from "./constants";
import { GET_ALL_CATEGORIES } from '../course/constant';
import AsyncStorage from "../../utils/storage/asyncStorage";
import i18n, { initI18n } from '../../i18n/i18n';

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
      put({
        type: GET_ALL_CATEGORIES,
      }),
      call(initI18n),
    ]);
    yield call(afterSuccess);
  } catch (e) {
    yield call(afterFail);
  }
}

function * changeLanguage({ payload: { language } }){ 
  try {
    const changeLanguage = (lng) => {
      console.log(lng);
      return new Promise((resolve, reject) => {
        i18n.changeLanguage(lng).then(resolve).catch(reject);
      });
    };
    yield call(changeLanguage, language);
    yield call(AsyncStorage.setLanguage, language);
  } catch (e) {
    console.log('Error when change language! ' + e);
  }
}

function * afterSignInGoogle(  {payload: { data } = {},
  meta: { callback } = {}}){ 
  try {
    yield all([
      call(AsyncStorage.setAccessToken, data?.token),
      put(setLoggedAccount(data?.userInfo ?? null)),
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

export default function* () {
  yield takeLatest(GET_USER_DATA, getLoggedAccount);
  yield takeLatest(SIGNIN, signin);
  yield takeLatest(SIGNUP, signup);
  yield takeLatest(RESET_PASSWORD, resetPassword);
  yield takeEvery(SIGNOUT, signout);
  yield takeLatest(UPDATE_PROFILE, updateProfile);
  yield takeLatest(APP_BOOT, appBoot);
  yield takeLatest(UPDATE_LANGUAGE, changeLanguage);
  yield takeLatest(AFTER_SIGN_IN_GOOGLE, afterSignInGoogle);
}
