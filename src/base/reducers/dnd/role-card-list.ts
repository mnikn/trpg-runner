import { ACTION_DND_GET_ROLES_SUCCESS } from '../../actions/dnd/role-card-list';
import { AnyAction, combineReducers } from 'redux';
import { isUndefined } from 'util';
import Role from '../../../coc/models/role';
import { ACTION_DND_SELECT_ROLE_CARD, ACTION_DND_GET_ROLES_REQUEST } from '../../actions/dnd/role-card-list';

function selectRoleCard(state: any, selectingRole: number, beforeSelectedRoles: number[]) {
    let hasRole = !isUndefined(beforeSelectedRoles.find((role: number) => role === selectingRole));
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

export interface IRoleCardListState {
    roles: Role[],
    selectedRoles: number[],
    isFetchingRoles: boolean
}

function roleCardList(state: IRoleCardListState = {
    roles: [],
    selectedRoles: [],
    isFetchingRoles: false,
},
    action: AnyAction) {
    switch (action.type) {
        case ACTION_DND_SELECT_ROLE_CARD:
            return selectRoleCard(state, action.selectingRole, state.selectedRoles);
        case ACTION_DND_GET_ROLES_REQUEST:
            return Object.assign({}, state, {
                isFetchingRoles: true
            });
        case ACTION_DND_GET_ROLES_SUCCESS:
            return Object.assign({}, state, {
                isFetchingRoles: false,
                roles: action.data
            })
    }
    return state;
}

export interface IDndState{
    roleCardList: IRoleCardListState
}
export const dnd = combineReducers({roleCardList});
