import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { root } from './src/base/reducers';
import rootSaga from './src/base/saga';
import AppComponent from './src/base/components/app';
import { createSelectAppModeAction } from './src/base/actions/base/navigate-bar';
import { DND } from './src/base/constants/app-mode';

export const saga = createSagaMiddleware();
export const appStore = createStore(root, applyMiddleware(saga));
saga.run(rootSaga);

// const nowLocation = window.location.hash.substring(1);
// const navigateLocation = NAVIGATE_LOCATION_TABLE.get(nowLocation);
appStore.dispatch(createSelectAppModeAction(DND));

const appElement =
    <HashRouter>
        <Provider store={appStore}>
            <AppComponent />
        </Provider>
    </HashRouter>;

ReactDOM.render(appElement, document.getElementById('root'));

