import { appStore } from './../../../../index';
import { createUpdateButtonOnSelectingAction } from './../../actions/base/app';
import { ACTION_DND_DELETE_ROLE_SUCCESS } from './../../actions/dnd/dnd';
import { call, put } from 'redux-saga/effects';
import RoleDataService from "../../../dnd/services/role-data-service";
import * as _ from 'lodash';

export function* deleteDndRole(action: any) {
    let promise = RoleDataService.deleteRole(action.deleteRoleIds);
    const data = yield call(() => promise);
    yield put({ type: ACTION_DND_DELETE_ROLE_SUCCESS, data });

    let selectedRoles = appStore.getState().roleCardList.selectedRoles.filter((id: number) => !_.includes(data, id));
    yield put(createUpdateButtonOnSelectingAction(selectedRoles));
}
