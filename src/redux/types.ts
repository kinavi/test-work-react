import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

export type AppStatus = "initial" | "ready" | "loading" | "error";

type DataType = "item" | "group";

export type DataItemType = {
  id: number;
  name: string;
  type: DataType;
};

export type MenuItemType = {
  items?: DataItemType[];
} & DataItemType;

export type HeaderItemType = {
  items: MenuItemType[];
} & DataItemType;

export interface IAppState {
  status: AppStatus;
}

export interface IDataState {
  loadData: HeaderItemType[];
  selectedHeader: number;
  selectedMenu: number;
  selectedPrice: number;
}

export interface IState {
  app: IAppState;
  data: IDataState;
}

export type ThunkActionBase = ThunkAction<any, IState, void, AnyAction>;
