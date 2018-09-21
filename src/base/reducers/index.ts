import dnd from './dnd/dnd';
import { IDndState } from './dnd/dnd';
import { combineReducers } from "redux";
import app, { IAppState } from './base/app';
import navigateBar, { INavigateBarState } from './base/navigate-bar';

export interface IRootState {
    app: IAppState,
    navigateBar: INavigateBarState,
    dnd: IDndState
}

export const root = combineReducers({
    app,
    navigateBar,
    dnd
});