import { ACTION_DND_GET_ROLES_SUCCESS } from '../../actions/dnd/dnd';
import { call, put } from 'redux-saga/effects';
import DndRoleDataService from '../../../dnd/services/role-data-service';

export function* getDndRoles() {
    let promise = DndRoleDataService.readRoles();
    const data = yield call(() => promise);
    yield put({ type: ACTION_DND_GET_ROLES_SUCCESS, data });
}