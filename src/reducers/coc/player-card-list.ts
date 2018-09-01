import { appStore } from './../../../index';
import { isUndefined } from 'util';
import Button from '../../platform/components/button';

export default function playerCardList(state: any = {players: [], selectedPlayers: []}, action: any) {
    switch (action.type) {
        case 'SELECT_COC_PLAYER_CARD':
            let selectedPlayers = state.selectedPlayers;
            let selectingPlayer = action.selectingPlayer;
            let hasPlayer = !isUndefined(selectedPlayers.find((player: number) => player === selectingPlayer));
            let currentSelectedPlayers: number[] = [];
            if (hasPlayer) {
                currentSelectedPlayers = selectedPlayers.filter((player: number) => player !== selectingPlayer);
            } else {
                currentSelectedPlayers = selectedPlayers.concat(selectingPlayer);
            }

            return Object.assign({}, state, {
                selectedPlayers: currentSelectedPlayers
            });
    }
    return state;
}

