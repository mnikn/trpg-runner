import { ACTION_DND_SAVE_ROLE_REQUERT, ACTION_DND_DELETE_ROLE_REQUERT } from './../actions/dnd/dnd';
import { ACTION_DND_GET_ROLES_REQUEST, ACTION_DND_CREATE_ROLE_REQUEST } from './../actions/dnd/dnd';
import { takeLatest } from 'redux-saga/effects';
import { getDndRoles } from './dnd/get-roles';
import { createDndRole } from './dnd/create-role';
import { saveDndRole } from './dnd/save-role';
import { deleteDndRole } from './dnd/delete-role';

export default function* rootSaga() {
    yield takeLatest(ACTION_DND_GET_ROLES_REQUEST, getDndRoles);
    yield takeLatest(ACTION_DND_CREATE_ROLE_REQUEST, createDndRole);
    yield takeLatest(ACTION_DND_SAVE_ROLE_REQUERT, saveDndRole);
    yield takeLatest(ACTION_DND_DELETE_ROLE_REQUERT, deleteDndRole);
}
