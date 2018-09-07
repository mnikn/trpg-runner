import { DND, COC } from './../../constants/app-mode';
import { NAVIGATE_TABLE } from './../../constants/navigate';
import { ACTION_SELECT_APP_MODE } from '../../actions/base/navigate-bar';
import { NAVIGATE_LOCATION } from '../../constants/navigate';
import { ACTION_NAVIGATE } from '../../actions/base/app';
import { isNullOrUndefined } from 'util';

function navigate(url: string) {
    window.location.href = '#' + url;
}

export interface IAppState {
    appMode: string,
    navigateLocation: string
}

export default function app(state: IAppState = { appMode: DND, navigateLocation: NAVIGATE_LOCATION.COC_HOME }, action: any) {
    switch (action.type) {
        case ACTION_SELECT_APP_MODE:
            const navigateLocation = action.appMode === COC ?
                NAVIGATE_TABLE.get(NAVIGATE_LOCATION.COC_HOME) :
                NAVIGATE_TABLE.get(NAVIGATE_LOCATION.DND_HOME);
            navigate(navigateLocation);
            return Object.assign({}, state, {
                appMode: action.appMode,
                navigateLocation: navigateLocation
            });
        case ACTION_NAVIGATE:
            let navigateUrl = NAVIGATE_TABLE.get(action.navigateLocation);
            if (!isNullOrUndefined(action.param)) {
                let needReplaceStr = navigateUrl.substr(navigateUrl.indexOf(':'));
                navigateUrl = navigateUrl.replace(needReplaceStr, action.param);
            }
            navigate(navigateUrl);
            return Object.assign({}, state, {
                navigateLocation: action.navigateLocation
            });
    }
    return state;
}

