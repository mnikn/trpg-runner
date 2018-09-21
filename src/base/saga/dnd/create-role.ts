import { ACTION_DND_CREATE_ROLE_SUCCESS } from './../../actions/dnd/dnd';
import { call, put } from 'redux-saga/effects';
import RoleDataService from "../../../dnd/services/role-data-service";

export function* createDndRole() {
    let promise = RoleDataService.createRole();
    const data = yield call(() => promise);
    yield put({ type: ACTION_DND_CREATE_ROLE_SUCCESS, data });
}
