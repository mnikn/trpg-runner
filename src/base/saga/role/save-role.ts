import { ACTION_SAVE_ROLE_SUCCESS } from './../../actions/base/role';
import { call, put } from 'redux-saga/effects';
import RoleDataService from "../../../dnd/services/role-data-service";

export function* saveRole(action: any) {
    let promise = RoleDataService.updateRole(action.role);
    const data = yield call(() => promise);
    yield put({ type: ACTION_SAVE_ROLE_SUCCESS, data });
}
