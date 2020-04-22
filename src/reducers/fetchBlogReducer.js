import { fetchBlogType } from "../actions/types";

export const initialState = {
  payload: [],
  isLoading: false,
  error: {},
};

export default (state = initialState, { type, payload, error }) => {
  switch (type) {
    case fetchBlogType.STARTED:
      return { ...state, isLoading: true };

    case fetchBlogType.SUCCESS:
      return {
        ...state,
        payload: [...state.payload, payload],
        isLoading: false,
      };

    case fetchBlogType.ESUCCESS:
      return {
        ...state,
        payload: [
          ...state.payload.filter((item) => payload.id !== item.id),
          payload,
        ],
        isLoading: false,
      };

    case fetchBlogType.DSUCCESS:
      return {
        ...state,
        payload: state.payload.filter((item) => payload !== item.id),
        isLoading: false,
      };

    case fetchBlogType.FAILURE:
      return { ...state, error: error, isLoading: false };

    default:
      return state;
  }
};
