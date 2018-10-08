import { ACTION_SAVE_ROLE_REQUERT, ACTION_DELETE_ROLE_REQUERT, ACTION_CREATE_ROLE_REQUEST, ACTION_FETCH_ROLES_REQUEST } from './../actions/base/role';
import { takeLatest } from 'redux-saga/effects';
import { fetchRoles } from './role/fetch-roles';
import { createRole } from './role/create-role';
import { saveRole } from './role/save-role';
import { deleteRole } from './role/delete-role';

export default function* rootSaga() {
    yield takeLatest(ACTION_FETCH_ROLES_REQUEST, fetchRoles);
    yield takeLatest(ACTION_CREATE_ROLE_REQUEST, createRole);
    yield takeLatest(ACTION_SAVE_ROLE_REQUERT, saveRole);
    yield takeLatest(ACTION_DELETE_ROLE_REQUERT, deleteRole);
}
