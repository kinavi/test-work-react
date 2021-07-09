import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { INITIAL_STATE } from "./initial";
import reducers from "../reducers";

const middleware = [applyMiddleware(thunk)];

export const Store = createStore(
  reducers,
  INITIAL_STATE,
  compose(...middleware)
);
