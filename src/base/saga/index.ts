import { ACTION_DND_GET_PLAYERS_REQUEST } from './../actions/dnd/player-card-list';
import { takeLatest } from 'redux-saga/effects';
import cocGetPlayers from './coc/get-players';
import dndGetPlayers from './dnd/ger-players';
import { ACTION_COC_GET_PLAYERS_REQUEST } from '../actions/coc/player-card-list';

export default function* rootSaga() {
    yield takeLatest(ACTION_COC_GET_PLAYERS_REQUEST, cocGetPlayers);
    yield takeLatest(ACTION_DND_GET_PLAYERS_REQUEST, dndGetPlayers);
}
