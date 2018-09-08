import { Male } from '../../models/sex';
import { ACTION_DND_GET_ROLES_SUCCESS, ACTION_COC_GET_ROLES_SUCCESS } from '../../actions/base/role-card-list';
import { call, put } from 'redux-saga/effects';
import Role from '../../../dnd/models/role';
import { Fighter } from '../../../dnd/models/profession';
import RoleDataService from '../../../coc/components/role-card/role-data-service';
import { Injector } from '../../../platform/decorators/inject';


export function* getDndRoles() {
    let promise = new Promise<Role[]>((resolve => {
        let roles: Role[] = [];
        for (let i = 0; i < 10; ++i) {
            let role = new Role();
            role.id = i;
            role.name = 'Billy';
            role.sex = new Male();
            role.profession = new Fighter();
            roles.push(role);
        }
        resolve(roles);
    }));
    const data = yield call(() => promise);
    yield put({ type: ACTION_DND_GET_ROLES_SUCCESS, data });
}

export function* getCocRoles() {
    let dataService: RoleDataService = Injector.get(RoleDataService);
    const data = yield call(dataService.getRoles);
    yield put({ type: ACTION_COC_GET_ROLES_SUCCESS, data });
}