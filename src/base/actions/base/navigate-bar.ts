import { AnyAction } from "redux";

export const ACTION_SHOW_SETTINGS_MODAL = 'SHOW_SETTINGS_MODAL';
export function actionShowSettingsModal(): AnyAction {
    return {
        type: ACTION_SHOW_SETTINGS_MODAL,
        isSettingsModalVisable: true
    }
}

export const ACTION_CLOSE_SETTINGS_MODAL = 'CLOSE_SETTINGS_MODAL';
export function actionCloseSettingsModal(): AnyAction {
    return {
        type: ACTION_CLOSE_SETTINGS_MODAL,
        isSettingsModalVisable: false
    }
}