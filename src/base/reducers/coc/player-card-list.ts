import { AnyAction } from 'redux';
import { isUndefined } from 'util';

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

export default function playerCardList(state: any = { players: [], selectedPlayers: [] }, action: AnyAction) {
    switch (action.type) {
        case 'SELECT_COC_PLAYER_CARD':
            return selectCocPlayerCard(state, action.selectingPlayer, state.selectedPlayers);
    }
    return state;
}

