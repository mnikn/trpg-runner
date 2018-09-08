import { combineReducers } from "redux";
import app, { IAppState } from './base/app';
import navigateBar, { INavigateBarState } from './base/navigate-bar';
import roleCardList, { IRoleCardListState } from "./base/role-card-list";

export interface IRootState {
    app: IAppState,
    roleCardList: IRoleCardListState
    navigateBar: INavigateBarState
}

export const root = combineReducers({
    app,
    roleCardList,
    navigateBar
});