import { AnyAction } from 'redux';
import CommandMessager from '../../../platform/services/command-messager';
import ButtonModel from '../../../platform/models/button';
import { NAVIGATE_LOCATION } from '../../constants/navigate';
import { ACTION_INIT_TOOLBAR_BUTTONS, ACTION_COC_UPDATE_BUTTON_ON_SELECTING } from '../../actions/base/tool-bar';

function initHomeButtons(state: any) {
    let buttons: any = [];
    return Object.assign({}, state, {
        toolBarButtons: buttons
    });
}

function initRoleCardListButtons(state: any) {
    let buttons = [
        new ButtonModel('coc.role.create', 'plus', () => alert('Create')),
        new ButtonModel('coc.role.delete', 'minus', () => alert('Delete'), true)
    ];
    return Object.assign({}, state, {
        toolBarButtons: buttons
    });
}

function updateButtonOnSelecting(state: any, selectedRoles: number[]) {
    let buttons = state.toolBarButtons.map((button: ButtonModel) => {
        if (button.id === 'coc.role.delete') {
            button.isDisabled = selectedRoles.length === 0;
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
            if (navigateLocation === NAVIGATE_LOCATION.COC_HOME ||
                navigateLocation === NAVIGATE_LOCATION.DND_HOME) {
                return initHomeButtons(state);
            } else if (navigateLocation === NAVIGATE_LOCATION.COC_ROLE_CARD ||
                navigateLocation === NAVIGATE_LOCATION.DND_ROLE_CARD) {
                return initRoleCardListButtons(state);
            }
        case ACTION_COC_UPDATE_BUTTON_ON_SELECTING:
            return updateButtonOnSelecting(state, action.selectedRoles);
    }
    return state;
}

