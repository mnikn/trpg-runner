import { call, put } from 'redux-saga/effects';
import { Injector } from '../../../platform/decorators/inject';
import RoleDataService from '../../../coc/components/role-card/role-data-service';
import { ACTION_COC_GET_ROLES_SUCCESS } from '../../actions/coc/role-card-list';

export default function* getRoles() {
    let dataService: RoleDataService = Injector.get(RoleDataService);
    const data = yield call(dataService.getRoles); 
    yield put({ type: ACTION_COC_GET_ROLES_SUCCESS, data });
}