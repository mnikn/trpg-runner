import { AnyAction } from 'redux';

export const ACTION_SELECT_ROLE_CARD = 'SELECT_ROLE_CARD';
export function createSelectRoleCardAction(selectingRole: number): AnyAction {
    return {
        type: ACTION_SELECT_ROLE_CARD,
        selectingRole: selectingRole
    }
}

export const ACTION_FETCH_ROLES_REQUEST = 'FETCH_ROLES_REQUEST';
export const ACTION_FETCH_ROLES_SUCCESS = 'FETCH_ROLES_SUCCESS';
export function createFetchRolesRequestAction(): AnyAction {
    return {
        type: ACTION_FETCH_ROLES_REQUEST
    }
}
export function createFetchRolesSuccessAction(): AnyAction {
    return {
        type: ACTION_FETCH_ROLES_SUCCESS
    }
}

export const ACTION_CREATE_ROLE_REQUEST = 'CREATE_ROLE_REQUEST';
export const ACTION_CREATE_ROLE_SUCCESS = 'CREATE_ROLE_SUCCESS';
export function createCreateRoleRequestAction(): AnyAction {
    return {
        type: ACTION_CREATE_ROLE_REQUEST
    }
}
export function createCreateRoleSuccessAction(): AnyAction {
    return {
        type: ACTION_CREATE_ROLE_SUCCESS
    }
}


export const ACTION_EDIT_ROLE = 'EDIT_ROLE';
export function createEditRoleAction(roleId: number): AnyAction {
    return {
        type: ACTION_EDIT_ROLE,
        roleId: roleId
    }
}

export const ACTION_UPDATE_EDIT_ROLE = 'UPDATE_EDIT_ROLE';
export function createUpdateEditRoleAction(roleData: any): AnyAction {
    return {
        type: ACTION_UPDATE_EDIT_ROLE,
        roleData: roleData
    }
}


export const ACTION_SAVE_ROLE_REQUERT = 'SAVE_ROLE_REQUEST';
export const ACTION_SAVE_ROLE_SUCCESS = 'SAVE_ROLE_SUCCESS';
export function createSaveRoleRequestAction(role: any): AnyAction {
    return {
        type: ACTION_SAVE_ROLE_REQUERT,
        role: role
    }
}
export function createSaveRoleSuccessAction(): AnyAction {
    return {
        type: ACTION_SAVE_ROLE_SUCCESS
    }
}

export const ACTION_DELETE_ROLE_REQUERT = 'DELETE_ROLE_REQUEST';
export const ACTION_DELETE_ROLE_SUCCESS = 'DELETE_ROLE_SUCCESS';
export function createDeleteRoleRequestAction(deleteRoleIds: number[]): AnyAction {
    return {
        type: ACTION_DELETE_ROLE_REQUERT,
        deleteRoleIds: deleteRoleIds
    }
}
export function createDeleteRoleSuccessAction(deleteRoleIds: number[]): AnyAction {
    return {
        type: ACTION_DELETE_ROLE_SUCCESS,
        deleteRoleIds: deleteRoleIds
    }
}