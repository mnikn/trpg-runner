import { AnyAction } from "redux";

export function initToolBarButtons(navigateLocation: string): AnyAction {
    return {
        type: 'INIT_TOOLBAR_BUTTONS',
        navigateLocation: navigateLocation
    }
}

export function updateButtonOnSelecting(selectedPlayers: number[]): AnyAction {
    return {
        type: 'UPDATE_BUTTON_ON_SELECTING',
        selectedPlayers: selectedPlayers
    }
}