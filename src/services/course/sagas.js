import { call, put, takeLatest } from "redux-saga/effects";
import CourseRepo from "./repo";
import { updateCategories } from '../app/actions';
import { GET_ALL_CATEGORIES } from "./constant";

function* getAllCategories({ meta: { callback } = {} }) {
  try {
    const categories = yield call(CourseRepo.getAllCategory);
    yield put(updateCategories(categories));
  } catch (e) {
    console.log("Error when get all categories " + e);
  }
}

export default function* () {
  yield takeLatest(GET_ALL_CATEGORIES, getAllCategories);
}
