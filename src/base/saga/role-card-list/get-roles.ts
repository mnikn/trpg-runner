import { ACTION_DND_GET_ROLES_SUCCESS, ACTION_COC_GET_ROLES_SUCCESS } from '../../actions/base/role-card-list';
import { call, put } from 'redux-saga/effects';
import CocRoleDataService from '../../../coc/components/role-card/role-data-service';
import { Injector } from '../../../platform/decorators/inject';
import DndRoleDataService from '../../../dnd/services/role-data-service';

export function* getDndRoles() {
    let promise = DndRoleDataService.readRoles();
    const data = yield call(() => promise);
    yield put({ type: ACTION_DND_GET_ROLES_SUCCESS, data });
}

export function* getCocRoles() {
    let dataService: CocRoleDataService = Injector.get(CocRoleDataService);
    const data = yield call(dataService.getRoles);
    yield put({ type: ACTION_COC_GET_ROLES_SUCCESS, data });
}