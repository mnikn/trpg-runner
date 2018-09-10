import { ACTION_DND_GET_ROLES_REQUEST, ACTION_COC_GET_ROLES_REQUEST, ACTION_DND_CREATE_ROLE_REQUEST } from './../actions/base/role-card-list';
import { takeLatest } from 'redux-saga/effects';
import { getCocRoles, getDndRoles } from './role-card-list/get-roles';
import { createDndRole } from './role-card-list/create-role';

export default function* rootSaga() {
    yield takeLatest(ACTION_DND_GET_ROLES_REQUEST, getDndRoles);
    yield takeLatest(ACTION_COC_GET_ROLES_REQUEST, getCocRoles);
    yield takeLatest(ACTION_DND_CREATE_ROLE_REQUEST, createDndRole);
}
