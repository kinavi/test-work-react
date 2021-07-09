import { Reducer } from "react";
import { AnyAction } from "redux";
import { IDataState } from "../types";
import { DataActions } from "../actions/enum";
import { DATA_INITIAL_STATE } from "../store/initial";

export const DataReducer: Reducer<IDataState, AnyAction> = (
  state = DATA_INITIAL_STATE,
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case DataActions.setData:
      return { ...state, loadData: payload };
    case DataActions.selectHeader:
      localStorage.setItem("selectedHeader", payload);
      localStorage.removeItem("selectedMenu");
      localStorage.removeItem("selectedPrice");
      return {
        ...state,
        selectedHeader: payload,
        selectedMenu: null,
        selectedPrice: null
      };
    case DataActions.selectMenu:
      localStorage.setItem("selectedMenu", payload);
      localStorage.removeItem("selectedPrice");
      return {
        ...state,
        selectedMenu: payload,
        selectedPrice: null
      };
    case DataActions.selectPrice:
      localStorage.setItem("selectedPrice", payload);
      return {
        ...state,
        selectedPrice: payload
      };
    default:
      return state;
  }
};
