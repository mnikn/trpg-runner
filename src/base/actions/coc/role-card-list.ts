import { AnyAction } from "redux";

export const ACTION_COC_SELECT_ROLE_CARD = 'SELECT_COC_ROLE_CARD';
export function createSelectRoleCardAction(selectingRole: number): AnyAction {
    return {
        type: ACTION_COC_SELECT_ROLE_CARD,
        selectingRole: selectingRole
    }
}

export const ACTION_COC_GET_ROLES_REQUEST = 'COC_GET_ROLES_REQUEST';
export const ACTION_COC_GET_ROLES_SUCCESS = 'COC_GET_ROLES_SUCCESS';
export function createRequestRolesAction(): AnyAction {
    return {
        type: ACTION_COC_GET_ROLES_REQUEST
    }
}
export function createRecieveRolesAction(): AnyAction {
    return {
        type: ACTION_COC_GET_ROLES_SUCCESS
    }
}