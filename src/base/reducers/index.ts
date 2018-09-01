import { combineReducers } from "redux";
import playerCardList from './coc/player-card-list';
import toolBar from './base/tool-bar';

export const app = combineReducers({
    toolBar,
    playerCardList
});