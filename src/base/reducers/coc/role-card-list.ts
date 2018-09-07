import { ACTION_COC_SELECT_ROLE_CARD, ACTION_COC_GET_ROLES_REQUEST, ACTION_COC_GET_ROLES_SUCCESS } from '../../actions/coc/role-card-list';
import { AnyAction, combineReducers } from 'redux';
import { isUndefined } from 'util';
import Role from '../../../coc/models/role';

function selectCocRoleCard(state: any, selectingRole: number, beforeSelectedRoles: number[]) {
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

interface IRoleCardListState {
    roles: Role[],
    selectedRoles: number[],
    isFetchingRoles: boolean
}

export function roleCardList(state: IRoleCardListState = {
    roles: [],
    selectedRoles: [],
    isFetchingRoles: false,
},
    action: AnyAction) {
    switch (action.type) {
        case ACTION_COC_SELECT_ROLE_CARD:
            return selectCocRoleCard(state, action.selectingRole, state.selectedRoles);
        case ACTION_COC_GET_ROLES_REQUEST:
            return Object.assign({}, state, {
                isFetchingRoles: true
            });
        case ACTION_COC_GET_ROLES_SUCCESS:
            return Object.assign({}, state, {
                isFetchingRoles: false,
                roles: action.data
            })
    }
    return state;
}

export interface ICocState {
    roleCardList: IRoleCardListState
}
export const coc = combineReducers({roleCardList});

