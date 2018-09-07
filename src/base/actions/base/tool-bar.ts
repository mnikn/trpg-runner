import { AnyAction } from "redux";

export interface IIinitToolBarButtonsAction extends AnyAction {
    navigateLocation: string
}
export const ACTION_INIT_TOOLBAR_BUTTONS = 'INIT_TOOLBAR_BUTTONS';
export function createInitToolBarButtonsAction(navigateLocation: string): IIinitToolBarButtonsAction {
    return {
        type: ACTION_INIT_TOOLBAR_BUTTONS,
        navigateLocation: navigateLocation
    }
}

export interface IUpdateButtonOnSelectingAction extends AnyAction {
    selectedRoles: number[]
}
export const ACTION_COC_UPDATE_BUTTON_ON_SELECTING = 'COC_UPDATE_BUTTON_ON_SELECTING';
export function createUpdateButtonOnSelectingAction(selectedRoles: number[]): IUpdateButtonOnSelectingAction {
    return {
        type: ACTION_COC_UPDATE_BUTTON_ON_SELECTING,
        selectedRoles: selectedRoles
    }
}