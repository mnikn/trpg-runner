import { AnyAction } from 'redux';
import { ACTION_SHOW_SETTINGS_MODAL, ACTION_CLOSE_SETTINGS_MODAL } from '../../actions/base/navigate-bar';

export interface INavigateBarState {
    isSettingsModalVisable: boolean
}

export default function navigateBar(state: INavigateBarState = {isSettingsModalVisable: false }, action: AnyAction) {
    switch (action.type) {
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

