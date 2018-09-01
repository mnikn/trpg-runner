import App from './src/app';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { createStore, Store } from 'redux';
import { app } from './src/reducers/index';
import { Provider } from 'react-redux';
// import initToolBarButtons from './src/actions/base/init-toolbar-buttons';
import { NAVIGATE_LOCATION_TABLE, NAVIGATE_LOCATION } from './src/base/components/navigate/navigate';
import { initPlayerCardListButtons } from './src/actions/base/tool-bar';

function initToolBarButtons(store: Store) {
    const nowLocation = window.location.hash.substring(1);
    const navigateLocation = NAVIGATE_LOCATION_TABLE.get(nowLocation);
    if (navigateLocation === NAVIGATE_LOCATION.COC_PLAYER_CARD) {
        store.dispatch(initPlayerCardListButtons());
    }
}

export const appStore = createStore(app);
initToolBarButtons(appStore);
// store.dispatch(initToolBarButtons(NAVIGATE_LOCATION_TABLE.get(nowLocation)))

const appElement =
    <HashRouter>
        <Provider store={appStore}>
            <App selectedNavTab={null} />
        </Provider>
    </HashRouter>;

ReactDOM.render(appElement, document.getElementById('root'));

