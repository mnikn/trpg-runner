import { ACTION_COC_SELECT_PLAYER_CARD, ACTION_COC_GET_PLAYERS_REQUEST, ACTION_COC_GET_PLAYERS_SUCCESS } from './../../actions/coc/player-card-list';
import { AnyAction } from 'redux';
import { isUndefined } from 'util';
import Player from '../../../coc/models/player';

function selectCocPlayerCard(state: any, selectingPlayer: number, beforeSelectedPlayers: number[]) {
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

interface State {
    players: Player[],
    selectedPlayers: number[],
    isFetchingPlayers: boolean
}

export default function playerCardList(state: State = {
    players: [],
    selectedPlayers: [],
    isFetchingPlayers: false,
},
    action: AnyAction) {
    switch (action.type) {
        case ACTION_COC_SELECT_PLAYER_CARD:
            return selectCocPlayerCard(state, action.selectingPlayer, state.selectedPlayers);
        case ACTION_COC_GET_PLAYERS_REQUEST:
            return Object.assign({}, state, {
                isFetchingPlayers: true
            });
        case ACTION_COC_GET_PLAYERS_SUCCESS:
            return Object.assign({}, state, {
                isFetchingPlayers: false,
                players: action.data
            })
    }
    return state;
}

