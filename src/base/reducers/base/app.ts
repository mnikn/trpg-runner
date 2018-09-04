import { COC } from '../../constants/app-mode';
import { ISelectAppModeAction, ACTION_SELECT_APP_MODE } from '../../actions/base/navigate-bar';

export interface IAppState {
    appMode: string
}

export default function app(state: IAppState = {appMode: COC }, action: ISelectAppModeAction) {
    switch (action.type) {
        case ACTION_SELECT_APP_MODE:
            return Object.assign({}, state, {
                appMode: action.appMode
            });
    }
    return state;
}

