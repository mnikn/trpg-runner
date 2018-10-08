import { AnyAction } from 'redux';

export const ACTION_DND_CHANGE_ABILITY = 'DND_CHANGE_ABILITY';
export function createDndChangeAbilityAction(abilityType: string, value: number): AnyAction {
    return {
        type: ACTION_DND_CHANGE_ABILITY,
        abilityType: abilityType,
        value: value
    }
}

export const ACTION_DND_ASSIGN_SKILL_POINT = 'DND_ASSIGN_SKILL_POINT';
export function createDndAssignSkillPointAction(skillId: string, assignPoint: number): AnyAction {
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