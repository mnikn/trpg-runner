import * as React from 'react';
import { Row, Col } from 'antd';
import { isUndefined } from 'util';
import { RoleCardContainer } from '../../containers/role-card';

interface Props {
    appMode: string,
    roles: any[];
    selectedRoles: number[]
}

export default class RoleCardListComponent extends React.Component<Props> {
    render() {
        const {
            roles,
            selectedRoles } = this.props;
        const element =
            <React.Fragment>
                <Row gutter={12}>
                    {roles.map(role =>
                        <Col key={role.id} span={8} style={{ marginBottom: 36 + 'px' }}>
                            <RoleCardContainer
                                role={role}
                                isRoleCardSelected={!isUndefined(selectedRoles.find(id => role.id === id))} />
                        </Col>)}
                </Row>
            </React.Fragment>;
        return element;
    }
}


