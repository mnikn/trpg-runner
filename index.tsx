import App from './src/app';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Injector from './src/platform/services/injector';
import ToolBarService from './src/base/tool-bar/tool-bar-service';
import PlayerDataService from './src/coc/player-card/player-data-service';

function initServices(): void {
    Injector.register('coc.player.service', new PlayerDataService());
    Injector.register('toolbar.service', new ToolBarService());
}

initServices();
ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));

