import App from './src/app';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { NAVIGATE_LOCATION_TABLE } from './src/base/constants/navigate';
import { app } from './src/base/reducers';
import { initToolBarButtons } from './src/base/actions/base/tool-bar';
import rootSaga from './src/base/saga';

export const saga = createSagaMiddleware();
export const appStore = createStore(app, applyMiddleware(saga));
saga.run(rootSaga);

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

