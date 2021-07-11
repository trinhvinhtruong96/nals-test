export const GET_BLOGS_START = 'GET_BLOGS_START';
export const GET_BLOGS_SUCCESS = 'GET_BLOGS_SUCCESS';
export const GET_BLOGS_FAIL = 'GET_BLOGS_FAIL';

export const GET_BLOG_DETAIL_START = 'GET_BLOG_DETAIL_START';
export const GET_BLOG_DETAIL_SUCCESS = 'GET_BLOG_DETAIL_SUCCESS';
export const GET_BLOG_DETAIL_FAIL = 'GET_BLOG_DETAIL_FAIL';

export const getBlogsStart = (payload) => ({
  type: GET_BLOGS_START,
  payload,
});
export const getBlogsSuccess = (payload) => ({
  type: GET_BLOGS_SUCCESS,
  payload,
});
export const getBlogsFail = (payload) => ({
  type: GET_BLOGS_FAIL,
  payload,
});

export const getBlogDetailStart = (payload) => ({
  type: GET_BLOG_DETAIL_START,
  payload,
});
export const getBlogDetailSuccess = (payload) => ({
  type: GET_BLOG_DETAIL_SUCCESS,
  payload,
});
export const getBlogDetailFail = (payload) => ({
  type: GET_BLOG_DETAIL_FAIL,
  payload,
});
