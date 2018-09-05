import { AnyAction } from 'redux';

export interface INavigateAction extends AnyAction {
    navigateLocation: string
}
export const ACTION_NAVIGATE = 'NAVIGATE';
export function createNavigateAction(navigateLocation: string): INavigateAction {
    return {
        type: ACTION_NAVIGATE,
        navigateLocation: navigateLocation
    }
}
