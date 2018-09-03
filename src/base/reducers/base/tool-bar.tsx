import { AnyAction } from 'redux';
import CommandMessager from '../../../platform/services/command-messager';
import ButtonModel from '../../../platform/components/button';
import { NAVIGATE_LOCATION } from '../../constants/navigate';
import { ACTION_INIT_TOOLBAR_BUTTONS, ACTION_COC_UPDATE_BUTTON_ON_SELECTING } from '../../actions/base/tool-bar';

function initHomeButtons(state: any) {
    let buttons: any = [];
    return Object.assign({}, state, {
        toolBarButtons: buttons
    });
}

function initPlayerCardListButtons(state: any) {
    let buttons = [
        new ButtonModel('coc.player.create', 'plus', () => CommandMessager.execute('coc.player.create')),
        new ButtonModel('coc.player.delete', 'minus', () => CommandMessager.execute('coc.player.delete'), true)
    ];
    return Object.assign({}, state, {
        toolBarButtons: buttons
    });
}

function updateButtonOnSelecting(state: any, selectedPlayers: number[]) {
    let buttons = state.toolBarButtons.map((button: ButtonModel) => {
        if (button.id === 'coc.player.delete') {
            button.isDisabled = selectedPlayers.length === 0;
        }
        return button;
    });
    return Object.assign({}, state, {
        toolBarButtons: buttons
    });
}


export default function toolBar(state: any = { toolBarButtons: [] }, action: AnyAction) {
    switch (action.type) {
        case ACTION_INIT_TOOLBAR_BUTTONS:
            const { navigateLocation } = action;
            if (navigateLocation === NAVIGATE_LOCATION.COC_HOME) {
                return initHomeButtons(state);
            } else if (navigateLocation === NAVIGATE_LOCATION.COC_PLAYER_CARD) {
                return initPlayerCardListButtons(state);
            }
        case ACTION_COC_UPDATE_BUTTON_ON_SELECTING:
            return updateButtonOnSelecting(state, action.selectedPlayers);
    }
    return state;
}

