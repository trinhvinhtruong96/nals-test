import * as blogAction from "../actions/blogs";
import agent from "../../services/agent";
import { call, takeLatest, put } from "redux-saga/effects";

export function* getBlogsStartSaga(action) {
    try {
        console.log("action", action);
        const res = yield call(agent.Blogs.list, action.payload);
        if (!res) {
            yield put([]);
        } else {
            yield put(blogAction.getBlogsSuccess(res));
        }

    } catch (error) {
        yield put(blogAction.getBlogsSuccess([]));
    }
}


export function* watchBlogs() {
    yield takeLatest(blogAction.GET_BLOGS_START, getBlogsStartSaga);
}