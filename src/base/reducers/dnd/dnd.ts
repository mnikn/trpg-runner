import { isNullOrUndefined } from 'util';
import AbilityInfos from '../../../dnd/models/ability/ability-info';
import { ACTION_DND_EDIT_ROLE, ACTION_DND_ASSIGN_SKILL_POINT, ACTION_DND_UPDATE_EDIT_ROLE, ACTION_DND_DELETE_ROLE_SUCCESS, ACTION_DND_LEVEL_CHANGE } from './../../actions/dnd/dnd';
import "reflect-metadata";
import { AnyAction } from 'redux';
import Role from "../../../dnd/models/role";
import { ACTION_DND_CHANGE_ABILITY } from '../../actions/dnd/dnd';
import RoleDataService from '../../../dnd/services/role-data-service';
import * as _ from 'lodash';

export interface IDndState {
    editRole: Role,
}

function handleEditRole(state: IDndState, roleId: number) {
    let role = new Role();
    role = RoleDataService.getRole(roleId);
    return Object.assign({}, state, {
        editRole: role
    });
}

function handleChangeAbility(state: IDndState, abilityType: number, value: number) {
    let newEditRole = Object.assign({}, state.editRole);
    switch (abilityType) {
        case AbilityInfos.STRENGTH.id:
            newEditRole.abilities.str.value = value;
            break;
        case AbilityInfos.DEXTERITY.id:
            newEditRole.abilities.dex.value = value;
            break;
        case AbilityInfos.CONSTITUTION.id:
            newEditRole.abilities.con.value = value;
            break;
        case AbilityInfos.INTELLIGENCE.id:
            newEditRole.abilities.int.value = value;
            break;
        case AbilityInfos.WISDOM.id:
            newEditRole.abilities.wis.value = value;
            break;
        case AbilityInfos.CHARISMA.id:
            newEditRole.abilities.cha.value = value;
            break;
    }
    return Object.assign({}, state, {
        editRole: newEditRole
    });
}

function handleAssignSkillPoint(state: IDndState, skillId: number, assignPoint: number): IDndState {
    let newEditRole = Object.assign({}, state.editRole);
    newEditRole.skills.find(skill => skill.id === skillId).assignedPoint = assignPoint;
    return Object.assign({}, state, {
        editRole: newEditRole
    });
}

function handleLevelChange(state: IDndState, level: number): IDndState {
    let newEditRole = Object.assign({}, state.editRole);
    newEditRole.level = level;
    newEditRole.hpDiceNumbers.length = level;
    _.range(0, level).forEach(level => {
        if (isNullOrUndefined(newEditRole.hpDiceNumbers[level])) {
            newEditRole.hpDiceNumbers[level] = newEditRole.profession.hpDiceType;
        }
    });
    return Object.assign({}, state, {
        editRole: newEditRole
    });
}

function handleUpdateEditRole(state: IDndState, value: any): IDndState {
    let newEditRole = Object.assign({}, state.editRole, value);
    return Object.assign({}, state, {
        editRole: newEditRole
    });
}




export default function dnd(state: IDndState = {
    editRole: null
},
    action: AnyAction) {
    switch (action.type) {
        case ACTION_DND_CHANGE_ABILITY:
            return handleChangeAbility(state, action.abilityType, action.value);
        case ACTION_DND_EDIT_ROLE:
            return handleEditRole(state, action.roleId);
        case ACTION_DND_UPDATE_EDIT_ROLE:
            return handleUpdateEditRole(state, action.roleData);
        case ACTION_DND_ASSIGN_SKILL_POINT:
            return handleAssignSkillPoint(state, action.skillId, action.assignPoint);
        case ACTION_DND_LEVEL_CHANGE:
            return handleLevelChange(state, action.level);
        case ACTION_DND_DELETE_ROLE_SUCCESS:
            return handleUpdateEditRole(state, action.roleData);

    }
    return state;
}