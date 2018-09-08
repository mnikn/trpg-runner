import { AnyAction } from 'redux';

export interface INavigateAction extends AnyAction {
    navigateLocation: string
}
export const ACTION_NAVIGATE = 'NAVIGATE';
export function createNavigateAction(navigateLocation: string, param?: string): INavigateAction {
    return {
        type: ACTION_NAVIGATE,
        navigateLocation: navigateLocation,
        param: param
    }
}

export interface IUpdateButtonOnSelectingAction extends AnyAction {
    selectedRoles: number[]
}
export const ACTION_UPDATE_BUTTON_ON_SELECTING = 'UPDATE_BUTTON_ON_SELECTING';
export function createUpdateButtonOnSelectingAction(selectedRoles: number[]): IUpdateButtonOnSelectingAction {
    return {
        type: ACTION_UPDATE_BUTTON_ON_SELECTING,
        selectedRoles: selectedRoles
    }
}