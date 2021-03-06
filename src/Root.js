import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ({ children, initialState = {} }) => {
  return (
    <Provider
      store={createStore(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware(reduxThunk))
      )}
    >
      {children}
    </Provider>
  );
};
