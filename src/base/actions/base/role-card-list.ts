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
export const ACTION_DND_GET_ROLES_REQUEST = 'GET_DND_ROLES_REQUEST';
export const ACTION_DND_GET_ROLES_SUCCESS = 'GET_DND_ROLES_SUCCESS';
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

export const ACTION_DND_CREATE_ROLE_REQUEST = 'CREATE_DND_ROLE_REQUEST';
export const ACTION_DND_CREATE_ROLE_SUCCESS = 'CREATE_DND_ROLE_SUCCESS';
export function createRequestCreateRoleAction(appMode: string): AnyAction {
    return {
        type: appMode === DND ? ACTION_DND_CREATE_ROLE_REQUEST : ''
    }
}
export function createRecieveCreateRoleAction(appMode: string): AnyAction {
    return {
        type: appMode === DND ? ACTION_DND_CREATE_ROLE_SUCCESS : ''
    }
}