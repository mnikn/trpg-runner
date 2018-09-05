import { AnyAction } from "redux";

export const ACTION_DND_SELECT_PLAYER_CARD = 'DND_SELECT_PLAYER_CARD';
export function createSelectPlayerCardAction(selectingPlayer: number): AnyAction {
    return {
        type: ACTION_DND_SELECT_PLAYER_CARD,
        selectingPlayer: selectingPlayer
    }
}

export const ACTION_DND_GET_PLAYERS_REQUEST = 'DND_GET_PLAYERS_REQUEST';
export const ACTION_DND_GET_PLAYERS_SUCCESS = 'DND_GET_PLAYERS_SUCCESS';
export function createRequestPlayersAction(): AnyAction {
    return {
        type: ACTION_DND_GET_PLAYERS_REQUEST
    }
}
export function createRecievePlayersAction(): AnyAction {
    return {
        type: ACTION_DND_GET_PLAYERS_SUCCESS
    }
}