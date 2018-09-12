import { ACTION_DND_DELETE_ROLE_SUCCESS } from './../../actions/dnd/dnd';
import { call, put } from 'redux-saga/effects';
import RoleDataService from "../../../dnd/services/role-data-service";

export function* deleteDndRole(action: any) {
    let promise = RoleDataService.deleteRole(action.deleteRoleIds);
    const data = yield call(() => promise);
    yield put({ type: ACTION_DND_DELETE_ROLE_SUCCESS, data });
}
