import { AnyAction } from "redux";

export const ACTION_INIT_TOOLBAR_BUTTONS = 'INIT_TOOLBAR_BUTTONS';
export function initToolBarButtons(navigateLocation: string): AnyAction {
    return {
        type: ACTION_INIT_TOOLBAR_BUTTONS,
        navigateLocation: navigateLocation
    }
}

export const ACTION_COC_UPDATE_BUTTON_ON_SELECTING = 'COC_UPDATE_BUTTON_ON_SELECTING';
export function updateButtonOnSelecting(selectedPlayers: number[]): AnyAction {
    return {
        type: ACTION_COC_UPDATE_BUTTON_ON_SELECTING,
        selectedPlayers: selectedPlayers
    }
}