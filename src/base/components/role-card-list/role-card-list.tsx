import * as React from 'react';
import { Row, Col } from 'antd';
import Role from '../../../coc/models/role';
import { isUndefined } from 'util';
import RoleCardComponent from './role-card';
import { DND } from '../../constants/app-mode';
import { NAVIGATE_LOCATION } from '../../constants/navigate';

interface Props {
    appMode: string,
    roles: Role[];
    selectedRoles: number[],
    defaultAvtarUrl: string,
    selectRoleCard: (selectingRole: number) => void;
    navigateToEditor: (roleId: number) => void;
    refreshRoles: () => void;
}

export default class RoleCardListComponent extends React.Component<Props> {
    componentDidMount() {
        this.props.refreshRoles();
    }

    render() {
        const { appMode,
            roles,
            selectedRoles,
            selectRoleCard,
            navigateToEditor,
            defaultAvtarUrl } = this.props;
        // const navigateEditorLocation = appMode === DND ? NAVIGATE_LOCATION.DND_ROLE_EDITOR : '';
        const element =
            <React.Fragment>
                <Row gutter={12}>
                    {roles.map(role =>
                        <Col key={role.id} span={8} style={{ marginBottom: 36 + 'px' }}>
                            <RoleCardComponent
                                defaultAvtarUrl={defaultAvtarUrl}
                                role={role}
                                isRoleCardSelected={!isUndefined(selectedRoles.find(id => role.id === id))}
                                navigateToEditor={navigateToEditor}
                                selectRoleCard={() => selectRoleCard(role.id)} />
                        </Col>)}
                </Row>
            </React.Fragment>;
        return element;
    }
}


