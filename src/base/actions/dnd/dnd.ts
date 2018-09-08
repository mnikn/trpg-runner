import { AnyAction } from 'redux';

export const ACTION_DND_EDIT_ROLE = 'DND_EDIT_ROLE';
export function createDndEditRoleAction(roleId: number): AnyAction {
    return {
        type: ACTION_DND_EDIT_ROLE,
        roleId: roleId
    }
}

export const ACTION_DND_CHANGE_ABILITY = 'DND_CHANGE_ABILITY';
export function createDndChangeAbilityAction(abilityType: string, value: number): AnyAction {
    return {
        type: ACTION_DND_CHANGE_ABILITY,
        abilityType: abilityType,
        value: value
    }
}