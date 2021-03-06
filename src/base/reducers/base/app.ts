import { appStore } from './../../../../index';
import { IAppState } from './app';
import { ACTION_UPDATE_BUTTON_ON_SELECTING, ACTION_SHOW_SETTINGS_MODAL, ACTION_CLOSE_SETTINGS_MODAL } from './../../actions/base/app';
import { DND, COC } from './../../constants/app-mode';
import { NAVIGATE_TABLE } from './../../constants/navigate';
import { NAVIGATE_LOCATION } from '../../constants/navigate';
import { ACTION_NAVIGATE, ACTION_SELECT_APP_MODE } from '../../actions/base/app';
import { isNullOrUndefined } from 'util';
import ButtonModel from '../../../platform/models/button';
import { createDeleteRoleRequestAction, createSaveRoleRequestAction, createCreateRoleRequestAction } from '../../actions/base/role';

function navigate(url: string) {
    window.location.href = '#' + url;
}

function createToolBarButtons(navigateLocation: string, appMode: string): ButtonModel[] {
    switch (navigateLocation) {
        case NAVIGATE_LOCATION.COC_HOME:
        case NAVIGATE_LOCATION.DND_HOME:
            return [];
        case NAVIGATE_LOCATION.COC_ROLE_CARD:
        case NAVIGATE_LOCATION.DND_ROLE_CARD:
            return [
                new ButtonModel('role.create', 'plus', () => {
                    appStore.dispatch(createCreateRoleRequestAction());
                }),
                new ButtonModel('role.delete', 'minus', () => {
                    appStore.dispatch(createDeleteRoleRequestAction(appStore.getState().role.selectedRoles));
                }, true)];
        case NAVIGATE_LOCATION.DND_ROLE_EDITOR:
            return [
                new ButtonModel('dnd.role.save', 'save', () => {
                    appStore.dispatch(createSaveRoleRequestAction(appStore.getState().role.editRole));
                }),
            ]
    }
    return [];
}

export interface IAppState {
    appMode: string,
    toolBarButtons: ButtonModel[],
    navigateLocation: string,
    isSettingsModalVisable: boolean
}

function handleSelectAppMode(state: IAppState, appMode: string): IAppState {
    const navigateLocation = appMode === COC ?
        NAVIGATE_TABLE.get(NAVIGATE_LOCATION.COC_HOME) :
        NAVIGATE_TABLE.get(NAVIGATE_LOCATION.DND_HOME);
    navigate(navigateLocation);
    return Object.assign({}, state, {
        appMode: appMode,
        toolBarButtons: createToolBarButtons(navigateLocation, state.appMode),
        navigateLocation: navigateLocation
    });
}

function handleNavigate(state: IAppState, navigateLocation: string, param?: string): IAppState {
    let navigateUrl = NAVIGATE_TABLE.get(navigateLocation);
    if (!isNullOrUndefined(param)) {
        let needReplaceStr = navigateUrl.substr(navigateUrl.indexOf(':'));
        navigateUrl = navigateUrl.replace(needReplaceStr, param);
    }
    navigate(navigateUrl);
    return Object.assign({}, state, {
        navigateLocation: navigateLocation,
        toolBarButtons: createToolBarButtons(navigateLocation, state.appMode)
    });
}

export default function app(state: IAppState = {
    appMode: DND,
    toolBarButtons: [],
    navigateLocation: NAVIGATE_LOCATION.COC_HOME,
    isSettingsModalVisable: false
}, action: any) {
    switch (action.type) {
        case ACTION_SELECT_APP_MODE:
            return handleSelectAppMode(state, action.appMode);
        case ACTION_NAVIGATE:
            return handleNavigate(state, action.navigateLocation, action.param);
        case ACTION_UPDATE_BUTTON_ON_SELECTING:
            const selectedRoles = action.selectedRoles;
            let buttons = state.toolBarButtons.map((button: ButtonModel) => {
                if (button.id === 'role.delete') {
                    button.isDisabled = selectedRoles.length === 0;
                }
                return button;
            });
            return Object.assign({}, state, {
                toolBarButtons: buttons
            });
        case ACTION_SHOW_SETTINGS_MODAL:
            return Object.assign({}, state, {
                isSettingsModalVisable: action.isSettingsModalVisable
            });
        case ACTION_CLOSE_SETTINGS_MODAL:
            return Object.assign({}, state, {
                isSettingsModalVisable: action.isSettingsModalVisable
            });
    }
    return state;
}
