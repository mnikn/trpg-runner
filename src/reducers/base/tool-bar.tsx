import Button from '../../platform/components/button';
import CommandMessager from '../../platform/services/command-messager';
import { appStore } from '../../..';

function initHomeButtons(state: any) {
    let buttons: any = [];
    return Object.assign({}, state, {
        toolBarButtons: buttons
    });
}

function initPlayerCardListButtons(state: any){
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


export default function toolBar(state: any = {toolBarButtons: []}, action: any) {
    switch (action.type) {
        case 'INIT_COC_HOME_BUTTONS':
            return initHomeButtons(state);
        case 'INIT_COC_PLAYER_CARD_LIST_BUTTONS':
            return initPlayerCardListButtons(state);
        case 'UPDATE_BUTTON_ON_SELECTING':
            return updateButtonOnSelecting(state, action.selectedPlayers);
    }
    return state;
}

