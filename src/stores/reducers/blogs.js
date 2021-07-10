import * as blogsAction from "../actions/blogs";

const initialState = {
    list: [],
    articleDetail: null
};

const blogReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case blogsAction.GET_BLOGS_SUCCESS:
            return {
                ...state,
                list: payload
            }
        case blogsAction.GET_BLOGS_FAIL:
            return {
                ...state,
                list: []
            }
        case blogsAction.GET_BLOG_DETAIL_SUCCESS:
            return {
                ...state,
                articleDetail: payload
            }
        case blogsAction.GET_BLOG_DETAIL_FAIL:
            return {
                ...state,
                articleDetail: null
            }
        default:
            return state;
    }
}

export default blogReducer;