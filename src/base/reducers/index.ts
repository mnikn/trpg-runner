import { dnd, IDndState } from './dnd/role-card-list';
import { combineReducers } from "redux";
import { ICocState, coc } from './coc/role-card-list';
import toolBar from './base/tool-bar';
import app, { IAppState } from './base/app';
import navigateBar, { INavigateBarState } from './base/navigate-bar';

export interface IRootState {
    app: IAppState,
    dnd: IDndState,
    coc: ICocState,
    navigateBar: INavigateBarState
} 

export const root = combineReducers({
    app,
    coc,
    dnd,
    navigateBar,
    toolBar
});