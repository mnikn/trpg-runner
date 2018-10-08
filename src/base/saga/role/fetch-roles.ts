import { ACTION_FETCH_ROLES_SUCCESS } from '../../actions/base/role';
import { call, put } from 'redux-saga/effects';
import DndRoleDataService from '../../../dnd/services/role-data-service';

export function* fetchRoles() {
    let promise = DndRoleDataService.readRoles();
    const data = yield call(() => promise);
    yield put({ type: ACTION_FETCH_ROLES_SUCCESS, data });
}