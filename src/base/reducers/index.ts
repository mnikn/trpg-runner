import { combineReducers } from "redux";
import app, { IAppState } from './base/app';
import navigateBar, { INavigateBarState } from './base/navigate-bar';
import role, { IRoleState } from './base/role';

export interface IRootState {
    app: IAppState,
    navigateBar: INavigateBarState,
    role: IRoleState
}

export const root = combineReducers({
    app,
    navigateBar,
    role
});