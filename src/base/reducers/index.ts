import dnd from './dnd/dnd';
import { IDndState } from './dnd/dnd';
import { combineReducers } from "redux";
import app, { IAppState } from './base/app';
import navigateBar, { INavigateBarState } from './base/navigate-bar';
import roleCardList, { IRoleCardListState } from "./base/role-card-list";

export interface IRootState {
    app: IAppState,
    roleCardList: IRoleCardListState
    navigateBar: INavigateBarState,
    dnd: IDndState
}

export const root = combineReducers({
    app,
    roleCardList,
    navigateBar,
    dnd
});