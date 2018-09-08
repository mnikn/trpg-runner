import *  as React from 'react';
import { Card, Button } from 'antd';
import './role-card.css';

interface Props {
    role: any;
    defaultAvtarUrl: string,
    isRoleCardSelected: boolean;
    selectRoleCard: (selectingRole: number) => void;
    navigateToEditor: (roleId: number) => void;
}

interface State {
}

export default class RoleCardComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { selectRoleCard,
            isRoleCardSelected,
            defaultAvtarUrl,
            navigateToEditor } = this.props;
        let { role } = this.props;
        role = role ? role : {};
        const defaultAvtar = require('../../resources/' + defaultAvtarUrl);
        const element =
            <Card className='role-card' style={isRoleCardSelected ? { borderColor: 'rgb(0,136,237)', borderWidth: 4 + 'px' } : {}}
                onClick={() => selectRoleCard(role.id)}>
                <img className='role-card-avtar' src={defaultAvtar} style={{ width: 160 + 'px', height: 140 + 'px' }} />
                <div style={{
                    marginTop: 24 + 'px',
                    fontSize: 16 + 'px'
                }}>
                    姓名: {role.name}<br />
                    职业: {role.profession.getLabel()}<br />
                </div>

                <Button
                    style={{ position: 'absolute', right: 16 + 'px', bottom: 16 + 'px' }}
                    onClick={(event: any) => {
                        this.handleOnEditButtonClick(event);
                        navigateToEditor(role.id);
                    }}
                    shape='circle-outline' icon='edit' size='default' />
            </Card>;
        return element;
    }

    handleOnEditButtonClick(event: any): void {
        event.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        
    }
}