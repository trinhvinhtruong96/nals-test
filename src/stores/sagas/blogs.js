import * as blogAction from "../actions/blogs";
import agent from "../../services/agent";
import { call, takeLatest, put } from "redux-saga/effects";

export function* getBlogsStartSaga(action) {
    try {
        const res = yield call(agent.Blogs.list, action.payload);
        if (!res) {
            yield put(blogAction.getBlogsFail());
        } else {
            yield put(blogAction.getBlogsSuccess(res));
        }
    } catch (error) {
        yield put(blogAction.getBlogsFail());
    }
}

export function* getBlogDetailStartSaga(action) {
    try {
        const res = yield call(agent.Blogs.details, action.payload);
        if (!res) {
            yield put(blogAction.getBlogDetailFail());
        } else {
            yield put(blogAction.getBlogDetailSuccess(res));
        }
    } catch (error) {
        yield put(blogAction.getBlogDetailFail());
    }
}

export function* watchBlogs() {
    yield takeLatest(blogAction.GET_BLOGS_START, getBlogsStartSaga);
    yield takeLatest(blogAction.GET_BLOG_DETAIL_START, getBlogDetailStartSaga);
}