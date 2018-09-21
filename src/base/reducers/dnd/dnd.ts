import { isNullOrUndefined } from 'util';
import { ACTION_DND_EDIT_ROLE, ACTION_DND_ASSIGN_SKILL_POINT, ACTION_DND_UPDATE_EDIT_ROLE, ACTION_DND_DELETE_ROLE_SUCCESS, ACTION_DND_LEVEL_CHANGE, ACTION_DND_SELECT_ROLE_CARD, ACTION_DND_GET_ROLES_SUCCESS, ACTION_DND_GET_ROLES_REQUEST, ACTION_DND_SAVE_ROLE_SUCCESS, ACTION_DND_CREATE_ROLE_SUCCESS } from './../../actions/dnd/dnd';
import "reflect-metadata";
import { AnyAction } from 'redux';
import Role from "../../../dnd/models/role";
import { ACTION_DND_CHANGE_ABILITY } from '../../actions/dnd/dnd';
import RoleDataService from '../../../dnd/services/role-data-service';
import * as _ from 'lodash';

export interface IDndState {
    editRole: Role,
    roles: Role[],
    selectedRoles: number[],
    isFetchingRoles: boolean
}

function handleSelectRoleCard(state: IDndState, selectingRole: number, beforeSelectedRoles: number[]) {
    let hasRole = !isNullOrUndefined(beforeSelectedRoles.find((role: number) => role === selectingRole));
    let currentSelectedRoles: number[] = [];
    if (hasRole) {
        currentSelectedRoles = beforeSelectedRoles.filter((role: number) => role !== selectingRole);
    } else {
        currentSelectedRoles = beforeSelectedRoles.concat(selectingRole);
    }

    return Object.assign({}, state, {
        selectedRoles: currentSelectedRoles
    });
}

function handleGetRoles(state: IDndState, roles: Role[]){
    return Object.assign({}, state, {
        isFetchingRoles: false,
        roles: roles
    });
}

function handleCreateRole(state: IDndState, newRole: Role) {
    newRole = _.cloneDeep(newRole);
    return Object.assign({}, state, {
        roles: state.roles.concat(newRole)
    });
}

function handleDeleteRole(state: IDndState, deleteRoleIds: number[]) {
    return Object.assign({}, state, {
        roles: state.roles.filter(role => !_.includes(deleteRoleIds, role.id)),
        selectedRoles: state.selectedRoles.filter(role => !_.includes(deleteRoleIds, role))
    });
}

function handleEditRole(state: IDndState, roleId: number) {
    let role = new Role();
    role = RoleDataService.getRole(roleId);
    return Object.assign({}, state, {
        editRole: role
    });
}

function handleChangeAbility(state: IDndState, abilityType: string, value: number) {
    let newEditRole = new Role();
    _.assign(newEditRole, state.editRole);
    let index = _.findIndex(newEditRole.abilities, { id: abilityType });
    newEditRole.abilities[index].value = value;
    return Object.assign({}, state, {
        editRole: newEditRole
    });
}

function handleAssignSkillPoint(state: IDndState, skillId: string, assignPoint: number): IDndState {
    let newEditRole = new Role();
    _.assign(newEditRole, state.editRole);
    newEditRole.skills.find(skill => skill.id === skillId).assignedPoint = assignPoint;
    return Object.assign({}, state, {
        editRole: newEditRole
    });
}

function handleLevelChange(state: IDndState, level: number): IDndState {
    let newEditRole = new Role();
    _.assign(newEditRole, state.editRole);
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
    let newEditRole = new Role();
    _.assign(newEditRole, state.editRole, value);
    return Object.assign({}, state, {
        editRole: newEditRole
    });
}

export default function dnd(state: IDndState = {
    editRole: null,
    selectedRoles: [],
    roles: [],
    isFetchingRoles: false
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
        case ACTION_DND_SELECT_ROLE_CARD:
            return handleSelectRoleCard(state, action.selectingRole, state.selectedRoles);
        case ACTION_DND_GET_ROLES_SUCCESS:
            return handleGetRoles(state, action.data);
        case ACTION_DND_CREATE_ROLE_SUCCESS:
            return handleCreateRole(state, action.data);
        case ACTION_DND_SAVE_ROLE_SUCCESS:
            let roles = state.roles;
            let index = roles.findIndex(e => e.id === action.data.id);
            roles[index] = action.data;
            return Object.assign({}, state, {
                roles: roles
            });
        case ACTION_DND_DELETE_ROLE_SUCCESS:
            return handleDeleteRole(state, action.data);

    }
    return state;
}