import { Reducer } from "react";
import { AnyAction } from "redux";
import { APP_INITIAL_STATE } from "../store/initial";
import { IAppState } from "../types";
import { AppActions } from "../actions/enum";

export const AppReducer: Reducer<IAppState, AnyAction> = (
  state = APP_INITIAL_STATE,
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case AppActions.setAppStatus:
      return {
        ...state,
        status: payload
      };
    default:
      return state;
  }
};
