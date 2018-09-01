import { NavLink } from 'react-router-dom';
import * as React from 'react';

export const NAVIGATE_LOCATION = {
    COC_PLAYER_CARD: 'coc player card',
    COC_HOME: 'coc home'
};

export const NAVIGATE_TABLE: Map<string, string> = new Map<string, string>([
    [NAVIGATE_LOCATION.COC_PLAYER_CARD, '/coc/player-card/list'],
    [NAVIGATE_LOCATION.COC_HOME, '/coc/home'],
    [null, '/coc/home']
]);

export const NAVIGATE_LOCATION_TABLE: Map<string, string> = new Map<string, string>([
    ['/coc/player-card/list', NAVIGATE_LOCATION.COC_PLAYER_CARD],
    ['/coc/home', NAVIGATE_LOCATION.COC_HOME],
]);

interface Props {
    navigateLocation: string;
    children?: any;
    onNavigating: (navigateLocation: string) => void;
}

export default class NavigateComponent extends React.Component<Props> {
    render() {
        const { navigateLocation, children, onNavigating } = this.props;
        let element =
            <NavLink to={NAVIGATE_TABLE.get(navigateLocation)} onClick={() => onNavigating(navigateLocation)}>
                {children}
            </NavLink>
        return element;
    }
}