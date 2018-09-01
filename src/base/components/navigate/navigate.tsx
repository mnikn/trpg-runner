import { NavLink } from 'react-router-dom';
import * as React from 'react';
import { NAVIGATE_TABLE } from '../../constants/navigate';

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