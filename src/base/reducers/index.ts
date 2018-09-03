import { combineReducers } from "redux";
import playerCardList from './coc/player-card-list';
import toolBar from './base/tool-bar';
import navigateBar from './base/navigate-bar';

export const app = combineReducers({
    navigateBar,
    toolBar,
    playerCardList
});