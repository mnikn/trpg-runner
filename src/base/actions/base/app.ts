import { AnyAction } from 'redux';

export interface INavigateAction extends AnyAction {
    navigateLocation: string
}
export const ACTION_NAVIGATE = 'NAVIGATE';
export function createNavigateAction(navigateLocation: string, param?: string): INavigateAction {
    return {
        type: ACTION_NAVIGATE,
        navigateLocation: navigateLocation,
        param: param
    }
}

export interface IUpdateButtonOnSelectingAction extends AnyAction {
    selectedRoles: number[]
}
export const ACTION_UPDATE_BUTTON_ON_SELECTING = 'UPDATE_BUTTON_ON_SELECTING';
export function createUpdateButtonOnSelectingAction(selectedRoles: number[]): IUpdateButtonOnSelectingAction {
    return {
        type: ACTION_UPDATE_BUTTON_ON_SELECTING,
        selectedRoles: selectedRoles
    }
}

export interface ISelectAppModeAction extends AnyAction {
    type: string,
    appMode: string
}

export const ACTION_SELECT_APP_MODE = 'SELECT_APP_MODE';
export function createSelectAppModeAction(appMode: string): ISelectAppModeAction {
    return {
        type: ACTION_SELECT_APP_MODE,
        appMode: appMode
    }
}

export interface IShowSettingsModalAction extends AnyAction {
    isSettingsModalVisable: boolean
}
export const ACTION_SHOW_SETTINGS_MODAL = 'SHOW_SETTINGS_MODAL';
export function createShowSettingsModalAction(): IShowSettingsModalAction {
    return {
        type: ACTION_SHOW_SETTINGS_MODAL,
        isSettingsModalVisable: true
    }
}

export interface ICloseSettingsModalAction extends AnyAction {
    isSettingsModalVisable: boolean
}
export const ACTION_CLOSE_SETTINGS_MODAL = 'CLOSE_SETTINGS_MODAL';
export function createCloseSettingsModalAction(): ICloseSettingsModalAction {
    return {
        type: ACTION_CLOSE_SETTINGS_MODAL,
        isSettingsModalVisable: false
    }
}