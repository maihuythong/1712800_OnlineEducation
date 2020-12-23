import { all } from 'redux-saga/effects';
import userSaga from '../services/user/sagas';
import courseSaga from '../services/course/sagas';

function* rootSaga() {
  yield all([userSaga(), courseSaga()]);
}

export default rootSaga;
