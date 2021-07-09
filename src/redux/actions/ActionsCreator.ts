import { AnyAction } from "redux";
import { AppStatus, HeaderItemType } from "../types";
import { AppActions, DataActions } from "./enum";

export const setAppDataAC = (status: AppStatus): AnyAction => ({
  type: AppActions.setAppStatus,
  payload: status
});

export const setDataAC = (data: HeaderItemType[]): AnyAction => ({
  type: DataActions.setData,
  payload: data
});

export const selectHeaderAC = (headerId: number): AnyAction => ({
  type: DataActions.selectHeader,
  payload: headerId
});

export const selectMenuAC = (menuId: number): AnyAction => ({
  type: DataActions.selectMenu,
  payload: menuId
});

export const selectPriceAC = (priceId: number): AnyAction => ({
  type: DataActions.selectPrice,
  payload: priceId
});
