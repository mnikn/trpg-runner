import App from './src/app';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { createStore, Store } from 'redux';
import { app } from './src/reducers/index';
import { Provider } from 'react-redux';
import { initToolBarButtons } from './src/actions/base/tool-bar';
import { NAVIGATE_LOCATION_TABLE } from './src/base/constants/navigate';

export const appStore = createStore(app);
const nowLocation = window.location.hash.substring(1);
const navigateLocation = NAVIGATE_LOCATION_TABLE.get(nowLocation);
appStore.dispatch(initToolBarButtons(navigateLocation));

const appElement =
    <HashRouter>
        <Provider store={appStore}>
            <App selectedNavTab={null} />
        </Provider>
    </HashRouter>;

ReactDOM.render(appElement, document.getElementById('root'));

