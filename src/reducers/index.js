import { combineReducers } from "redux";
import fetchBlogReducer from "./fetchBlogReducer";

export default combineReducers({
  blog: fetchBlogReducer,
});
