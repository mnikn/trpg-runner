import { ACTION_DND_SAVE_ROLE_SUCCESS } from './../../actions/dnd/dnd';
import { call, put } from 'redux-saga/effects';
import RoleDataService from "../../../dnd/services/role-data-service";

export function* saveDndRole(action: any) {
    let promise = RoleDataService.updateRole(action.role);
    const data = yield call(() => promise);
    yield put({ type: ACTION_DND_SAVE_ROLE_SUCCESS, data });
}
