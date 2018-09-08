import { ACTION_DND_GET_ROLES_REQUEST, ACTION_COC_GET_ROLES_REQUEST } from './../actions/base/role-card-list';
import { takeLatest } from 'redux-saga/effects';
import { getCocRoles, getDndRoles } from './role-card-list/get-roles';

export default function* rootSaga() {
    yield takeLatest(ACTION_DND_GET_ROLES_REQUEST, getDndRoles);
    yield takeLatest(ACTION_COC_GET_ROLES_REQUEST, getCocRoles);

}
