import { AnyAction } from "redux";

export function selectPlayerCard(selectingPlayer: number): AnyAction {
    return {
        type: 'SELECT_COC_PLAYER_CARD',
        selectingPlayer: selectingPlayer
    }
}