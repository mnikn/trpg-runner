import { ACTION_DND_GET_ROLES_SUCCESS } from '../../actions/dnd/role-card-list';
import { call, put } from 'redux-saga/effects';
import Role from '../../../dnd/models/role';
import { Sex } from '../../models/sex';
import { Warrior } from '../../../dnd/models/profession';

export default function* getRoles() {
    let promise = new Promise<Role[]>((resolve => {
        let roles: Role[] = [];
        for (let i = 0; i < 10; ++i) {
            let role = new Role();
            role.id = i;
            role.name = 'Billy';
            role.sex = Sex.MALE;
            role.profession = new Warrior();
            roles.push(role);
        }
        resolve(roles);
    }));
    const data = yield call(() => promise); 
    yield put({ type: ACTION_DND_GET_ROLES_SUCCESS, data });
}