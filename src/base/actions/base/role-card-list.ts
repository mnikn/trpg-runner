import { AnyAction } from "redux";
import { DND } from "../../constants/app-mode";

export const ACTION_SELECT_ROLE_CARD = 'SELECT_ROLE_CARD';
export function createSelectRoleCardAction(selectingRole: number): AnyAction {
    return {
        type: ACTION_SELECT_ROLE_CARD,
        selectingRole: selectingRole
    }
}

export const ACTION_COC_GET_ROLES_REQUEST = 'GET_COC_ROLES_REQUEST';
export const ACTION_COC_GET_ROLES_SUCCESS = 'GET_COC_ROLES_SUCCESS';
export const ACTION_DND_GET_ROLES_REQUEST = 'GET_ROLES_REQUEST';
export const ACTION_DND_GET_ROLES_SUCCESS = 'GET_ROLES_SUCCESS';
export function createRequestRolesAction(appMode: string): AnyAction {
    return {
        type: appMode === DND ? ACTION_DND_GET_ROLES_REQUEST : ACTION_COC_GET_ROLES_REQUEST
    }
}
export function createRecieveRolesAction(appMode: string): AnyAction {
    return {
        type: appMode === DND ? ACTION_DND_GET_ROLES_SUCCESS : ACTION_COC_GET_ROLES_SUCCESS
    }
}