import { IState, IAppState, IDataState } from "../types";

export const APP_INITIAL_STATE: IAppState = {
  status: "initial"
};

export const DATA_INITIAL_STATE: IDataState = {
  loadData: [],
  selectedHeader: Number(localStorage.getItem("selectedHeader")) || null,
  selectedMenu: Number(localStorage.getItem("selectedMenu")) || null,
  selectedPrice: Number(localStorage.getItem("selectedPrice")) || null
};

export const INITIAL_STATE: IState = {
  app: APP_INITIAL_STATE,
  data: DATA_INITIAL_STATE
};
