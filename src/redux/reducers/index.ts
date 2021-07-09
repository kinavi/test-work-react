import { combineReducers } from "redux";
import { AppReducer } from "./app";
import { DataReducer } from "./data";

export default combineReducers({
  app: AppReducer,
  data: DataReducer
});
