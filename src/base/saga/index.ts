import { takeLatest } from 'redux-saga/effects';
import getPlayers from './coc/get-players';
import { ACTION_COC_GET_PLAYERS_REQUEST } from '../actions/coc/player-card-list';

export default function* rootSaga() {
    yield takeLatest(ACTION_COC_GET_PLAYERS_REQUEST, getPlayers);
}
