import { AnyAction } from "redux";

export const ACTION_DND_SELECT_ROLE_CARD = 'DND_SELECT_ROLE_CARD';
export function createSelectRoleCardAction(selectingRole: number): AnyAction {
    return {
        type: ACTION_DND_SELECT_ROLE_CARD,
        selectingRole: selectingRole
    }
}

export const ACTION_DND_GET_ROLES_REQUEST = 'DND_GET_ROLES_REQUEST';
export const ACTION_DND_GET_ROLES_SUCCESS = 'DND_GET_ROLES_SUCCESS';
export function createRequestRolesAction(): AnyAction {
    return {
        type: ACTION_DND_GET_ROLES_REQUEST
    }
}
export function createRecieveRolesAction(): AnyAction {
    return {
        type: ACTION_DND_GET_ROLES_SUCCESS
    }
}