import { all } from 'redux-saga/effects';
import { watchBlogs } from "./blogs";

export default function* root() {
  yield all([
    watchBlogs()
  ]);
}
