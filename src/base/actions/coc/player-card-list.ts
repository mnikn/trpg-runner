import { AnyAction } from "redux";

export const ACTION_COC_SELECT_PLAYER_CARD = 'SELECT_COC_PLAYER_CARD';
export function selectPlayerCard(selectingPlayer: number): AnyAction {
    return {
        type: ACTION_COC_SELECT_PLAYER_CARD,
        selectingPlayer: selectingPlayer
    }
}

export const ACTION_COC_GET_PLAYERS_REQUEST = 'COC_GET_PLAYERS_REQUEST';
export const ACTION_COC_GET_PLAYERS_SUCCESS = 'COC_GET_PLAYERS_SUCCESS';
export function requestPlayers(): AnyAction {
    return {
        type: ACTION_COC_GET_PLAYERS_REQUEST
    }
}
export function recievePlayers(): AnyAction {
    return {
        type: ACTION_COC_GET_PLAYERS_SUCCESS
    }
}