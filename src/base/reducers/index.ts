import { combineReducers } from "redux";
import playerCardList from './coc/player-card-list';
import toolBar from './base/tool-bar';
import app, { IAppState } from './base/app';
import navigateBar, { INavigateBarState } from './base/navigate-bar';

export interface IRootState {
    app: IAppState,
    navigateBar: INavigateBarState
} 

export const root = combineReducers({
    app,
    navigateBar,
    toolBar,
    playerCardList
});