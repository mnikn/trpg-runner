import { AnyAction } from 'redux';
import Role from '../../../dnd/models/role';

export const ACTION_DND_EDIT_ROLE = 'DND_EDIT_ROLE';
export function createDndEditRoleAction(roleId: number): AnyAction {
    return {
        type: ACTION_DND_EDIT_ROLE,
        roleId: roleId
    }
}

export const ACTION_DND_CHANGE_ABILITY = 'DND_CHANGE_ABILITY';
export function createDndChangeAbilityAction(abilityType: number, value: number): AnyAction {
    return {
        type: ACTION_DND_CHANGE_ABILITY,
        abilityType: abilityType,
        value: value
    }
}

export const ACTION_DND_ASSIGN_SKILL_POINT = 'DND_ASSIGN_SKILL_POINT';
export function createDndAssignSkillPointAction(skillId: number, assignPoint: number): AnyAction {
    return {
        type: ACTION_DND_ASSIGN_SKILL_POINT,
        skillId: skillId,
        assignPoint: assignPoint
    }
}

export const ACTION_DND_LEVEL_CHANGE = 'DND_LEVEL_CHANGE';
export function createDndLevelChangeAction(level: number): AnyAction {
    return {
        type: ACTION_DND_LEVEL_CHANGE,
        level: level
    }
}

export const ACTION_DND_UPDATE_EDIT_ROLE = 'DND_UPDATE_EDIT_ROLE';
export function createDndUpdateEditRoleAction(roleData: any): AnyAction {
    return {
        type: ACTION_DND_UPDATE_EDIT_ROLE,
        roleData: roleData
    }
}


export const ACTION_DND_SAVE_ROLE_REQUERT = 'DND_SAVE_ROLE_REQUEST';
export const ACTION_DND_SAVE_ROLE_SUCCESS = 'DND_SAVE_ROLE_SUCCESS';
export function createDndSaveRoleRequestAction(role: Role): AnyAction {
    return {
        type: ACTION_DND_SAVE_ROLE_REQUERT,
        role: role
    }
}
export function createDndSaveRoleSuccessAction(): AnyAction {
    return {
        type: ACTION_DND_SAVE_ROLE_SUCCESS
    }
}

export const ACTION_DND_DELETE_ROLE_REQUERT = 'DND_DELETE_ROLE_REQUEST';
export const ACTION_DND_DELETE_ROLE_SUCCESS = 'DND_DELETE_ROLE_SUCCESS';
export function createDndDeleteRoleRequestAction(deleteRoleIds: number[]): AnyAction {
    return {
        type: ACTION_DND_DELETE_ROLE_REQUERT,
        deleteRoleIds: deleteRoleIds
    }
}
export function createDndDeleteRoleSuccessAction(deleteRoleIds: number[]): AnyAction {
    return {
        type: ACTION_DND_DELETE_ROLE_SUCCESS,
        deleteRoleIds: deleteRoleIds
    }
}