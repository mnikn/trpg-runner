import Button from '../../platform/components/button';
import CommandMessager from '../../platform/services/command-messager';
import { AnyAction } from 'redux';
import { NAVIGATE_LOCATION } from '../../base/constants/navigate';

function initHomeButtons(state: any) {
    let buttons: any = [];
    return Object.assign({}, state, {
        toolBarButtons: buttons
    });
}

function initPlayerCardListButtons(state: any) {
    let buttons = [
        new Button('coc.player.create', 'plus', () => CommandMessager.execute('coc.player.create')),
        new Button('coc.player.delete', 'minus', () => CommandMessager.execute('coc.player.delete'), true)
    ];
    return Object.assign({}, state, {
        toolBarButtons: buttons
    });
}

function updateButtonOnSelecting(state: any, selectedPlayers: number[]) {
    let buttons = state.toolBarButtons.map((button: Button) => {
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
        case 'INIT_TOOLBAR_BUTTONS':
            const { navigateLocation } = action;
            if (navigateLocation === NAVIGATE_LOCATION.COC_HOME) {
                return initHomeButtons(state);
            } else if (navigateLocation === NAVIGATE_LOCATION.COC_PLAYER_CARD) {
                return initPlayerCardListButtons(state);
            }
        case 'UPDATE_BUTTON_ON_SELECTING':
            return updateButtonOnSelecting(state, action.selectedPlayers);
    }
    return state;
}

