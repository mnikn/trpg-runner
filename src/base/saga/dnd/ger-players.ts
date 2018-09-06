import { ACTION_DND_GET_PLAYERS_SUCCESS } from './../../actions/dnd/player-card-list';
import { call, put } from 'redux-saga/effects';
import Player from '../../../dnd/models/player';
import { Sex } from '../../models/sex';
import { Warrior } from '../../../dnd/models/profession';

export default function* getPlayers() {
    let promise = new Promise<Player[]>((resolve => {
        let players: Player[] = [];
        for (let i = 0; i < 10; ++i) {
            let player = new Player();
            player.id = i;
            player.name = 'Billy';
            player.sex = Sex.MALE;
            player.profession = new Warrior();
            players.push(player);
        }
        resolve(players);
    }));
    const data = yield call(() => promise); 
    yield put({ type: ACTION_DND_GET_PLAYERS_SUCCESS, data });
}