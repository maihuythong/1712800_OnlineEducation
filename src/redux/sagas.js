import { all } from 'redux-saga/effects';
import userSaga from '../services/user/sagas';

function* rootSaga() {
  yield all([userSaga()]);
}

export default rootSaga;
