import * as blogsAction from "../actions/blogs";

const initialState = {
    list: [],
};

const blogReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case blogsAction.GET_BLOGS_SUCCESS:
            return {
                ...state,
                list: payload
            }
        default:
            return state;
    }
}

export default blogReducer;