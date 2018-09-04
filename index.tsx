import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { NAVIGATE_LOCATION_TABLE } from './src/base/constants/navigate';
import { root } from './src/base/reducers';
import rootSaga from './src/base/saga';
import AppComponent from './src/base/components/app';
import { createInitToolBarButtonsAction } from './src/base/actions/base/tool-bar';

export const saga = createSagaMiddleware();
export const appStore = createStore(root, applyMiddleware(saga));
saga.run(rootSaga);

const nowLocation = window.location.hash.substring(1);
const navigateLocation = NAVIGATE_LOCATION_TABLE.get(nowLocation);
appStore.dispatch(createInitToolBarButtonsAction(navigateLocation));

const appElement =
    <HashRouter>
        <Provider store={appStore}>
            <AppComponent />
        </Provider>
    </HashRouter>;

ReactDOM.render(appElement, document.getElementById('root'));

