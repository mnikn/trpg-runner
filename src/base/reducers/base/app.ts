import { appStore } from './../../../../index';
import { IAppState } from './app';
import { ACTION_UPDATE_BUTTON_ON_SELECTING } from './../../actions/base/app';
import { DND, COC } from './../../constants/app-mode';
import { NAVIGATE_TABLE } from './../../constants/navigate';
import { ACTION_SELECT_APP_MODE } from '../../actions/base/navigate-bar';
import { NAVIGATE_LOCATION } from '../../constants/navigate';
import { ACTION_NAVIGATE } from '../../actions/base/app';
import { isNullOrUndefined } from 'util';
import ButtonModel from '../../../platform/models/button';
import { createRequestCreateRoleAction } from '../../actions/base/role-card-list';

function navigate(url: string) {
    window.location.href = '#' + url;
}

function createToolBarButtons(navigateLocation: string, appMode: string): ButtonModel[] {
    if (navigateLocation === NAVIGATE_LOCATION.COC_HOME ||
        navigateLocation === NAVIGATE_LOCATION.DND_HOME) {
        return [];
    } else if (navigateLocation === NAVIGATE_LOCATION.COC_ROLE_CARD ||
        navigateLocation === NAVIGATE_LOCATION.DND_ROLE_CARD) {
        return [
            new ButtonModel('role.create', 'plus', () => {
                appStore.dispatch(createRequestCreateRoleAction(appMode));
            }),
            new ButtonModel('role.delete', 'minus', () => alert('Delete'), true)];
    }
    return [];
}

export interface IAppState {
    appMode: string,
    toolBarButtons: ButtonModel[],
    navigateLocation: string
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
    navigateLocation: NAVIGATE_LOCATION.COC_HOME
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
    }
    return state;
}
