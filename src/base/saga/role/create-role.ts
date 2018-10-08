import { ACTION_CREATE_ROLE_SUCCESS } from './../../actions/base/role';
import { call, put } from 'redux-saga/effects';
import RoleDataService from "../../../dnd/services/role-data-service";

export function* createRole() {
    let promise = RoleDataService.createRole();
    const data = yield call(() => promise);
    yield put({ type: ACTION_CREATE_ROLE_SUCCESS, data });
}
