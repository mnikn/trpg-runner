import { ACTION_DND_GET_ROLES_REQUEST } from '../actions/dnd/role-card-list';
import { takeLatest } from 'redux-saga/effects';
import cocGetRoles from './coc/get-roles';
import dndGetRoles from './dnd/ger-roles';
import { ACTION_COC_GET_ROLES_REQUEST } from '../actions/coc/role-card-list';

export default function* rootSaga() {
    yield takeLatest(ACTION_COC_GET_ROLES_REQUEST, cocGetRoles);
    yield takeLatest(ACTION_DND_GET_ROLES_REQUEST, dndGetRoles);
}
