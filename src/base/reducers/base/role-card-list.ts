import { ACTION_SELECT_ROLE_CARD, ACTION_COC_GET_ROLES_REQUEST, ACTION_DND_GET_ROLES_REQUEST, ACTION_COC_GET_ROLES_SUCCESS, ACTION_DND_GET_ROLES_SUCCESS } from './../../actions/base/role-card-list';
import { AnyAction } from 'redux';
import { isNullOrUndefined } from 'util';

function handleSelectRoleCard(state: IRoleCardListState, selectingRole: number, beforeSelectedRoles: number[]) {
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

export interface IRoleCardListState {
    roles: any[],
    selectedRoles: number[],
    isFetchingRoles: boolean
}

export default function roleCardList(state: IRoleCardListState = {
    roles: [],
    selectedRoles: [],
    isFetchingRoles: false,
},
    action: AnyAction) {
    switch (action.type) {
        case ACTION_SELECT_ROLE_CARD:
            return handleSelectRoleCard(state, action.selectingRole, state.selectedRoles);
        case ACTION_COC_GET_ROLES_REQUEST:
        case ACTION_DND_GET_ROLES_REQUEST:
            return Object.assign({}, state, {
                isFetchingRoles: true
            });
        case ACTION_COC_GET_ROLES_SUCCESS:
        case ACTION_DND_GET_ROLES_SUCCESS:
            return Object.assign({}, state, {
                isFetchingRoles: false,
                roles: action.data
            })
    }
    return state;
}