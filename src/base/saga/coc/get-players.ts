import { call, put } from 'redux-saga/effects';
import { Injector } from '../../../platform/decorators/inject';
import PlayerDataService from '../../../coc/components/player-card/player-data-service';
import { ACTION_COC_GET_PLAYERS_SUCCESS } from '../../actions/coc/player-card-list';

export default function* getPlayers() {
    let dataService: PlayerDataService = Injector.get(PlayerDataService);
    const data = yield call(dataService.getPlayers); 
    yield put({ type: ACTION_COC_GET_PLAYERS_SUCCESS, data });
}