import { ACTION_DND_GET_PLAYERS_SUCCESS } from './../../actions/dnd/player-card-list';
import { AnyAction, combineReducers } from 'redux';
import { isUndefined } from 'util';
import Player from '../../../coc/models/player';
import { ACTION_DND_SELECT_PLAYER_CARD, ACTION_DND_GET_PLAYERS_REQUEST } from '../../actions/dnd/player-card-list';

function selectPlayerCard(state: any, selectingPlayer: number, beforeSelectedPlayers: number[]) {
    let hasPlayer = !isUndefined(beforeSelectedPlayers.find((player: number) => player === selectingPlayer));
    let currentSelectedPlayers: number[] = [];
    if (hasPlayer) {
        currentSelectedPlayers = beforeSelectedPlayers.filter((player: number) => player !== selectingPlayer);
    } else {
        currentSelectedPlayers = beforeSelectedPlayers.concat(selectingPlayer);
    }

    return Object.assign({}, state, {
        selectedPlayers: currentSelectedPlayers
    });
}

export interface IPlayerCardListState {
    players: Player[],
    selectedPlayers: number[],
    isFetchingPlayers: boolean
}

function playerCardList(state: IPlayerCardListState = {
    players: [],
    selectedPlayers: [],
    isFetchingPlayers: false,
},
    action: AnyAction) {
    switch (action.type) {
        case ACTION_DND_SELECT_PLAYER_CARD:
            return selectPlayerCard(state, action.selectingPlayer, state.selectedPlayers);
        case ACTION_DND_GET_PLAYERS_REQUEST:
            return Object.assign({}, state, {
                isFetchingPlayers: true
            });
        case ACTION_DND_GET_PLAYERS_SUCCESS:
            return Object.assign({}, state, {
                isFetchingPlayers: false,
                players: action.data
            })
    }
    return state;
}

export interface IDndState{
    playerCardList: IPlayerCardListState
}
export const dnd = combineReducers({playerCardList});
