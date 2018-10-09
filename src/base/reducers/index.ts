import { combineReducers } from "redux";
import app, { IAppState } from './base/app';
import role, { IRoleState } from './base/role';

export interface IRootState {
    app: IAppState,
    role: IRoleState
}

export const root = combineReducers({
    app,
    role
});