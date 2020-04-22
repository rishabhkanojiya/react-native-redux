import { fetchBlogType } from "./types";

export const fetchBlogStarted = () => ({
  type: fetchBlogType.STARTED,
});

export const fetchBlogSuccess = (term) => ({
  type: fetchBlogType.SUCCESS,
  payload: term,
});

export const editBlogSuccess = (term) => ({
  type: fetchBlogType.ESUCCESS,
  payload: term,
});

export const deleteBlogSuccess = (term) => ({
  type: fetchBlogType.DSUCCESS,
  payload: term,
});

export const fetchBlogFailure = (error) => ({
  type: fetchBlogType.FAILURE,
  payload: error,
});

export const fetchBlog = (dispatch, term) => {
  dispatch(fetchBlogStarted());

  try {
    dispatch(fetchBlogSuccess(term));
  } catch (error) {
    dispatch(fetchBlogFailure(error.message));
  }
};

export const editBlog = (dispatch, term) => {
  dispatch(fetchBlogStarted());

  try {
    dispatch(editBlogSuccess(term));
  } catch (error) {
    dispatch(fetchBlogFailure(error.message));
  }
};

export const deleteBlog = (dispatch, id) => {
  dispatch(fetchBlogStarted());

  try {
    dispatch(deleteBlogSuccess(id));
  } catch (error) {
    dispatch(fetchBlogFailure(error.message));
  }
};
