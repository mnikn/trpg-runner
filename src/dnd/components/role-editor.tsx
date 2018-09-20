import *  as React from 'react';
import Role from '../models/role';
import { Form, Row, Col} from 'antd';
import './role-editor.css';
import * as _ from 'lodash';
import BasicsInfoCard from './parts/basics-info-card';
import IntroductionCard from './parts/introduction-card';
import AbilityCard from './parts/ability-card';
import SkillCard from './parts/skill-card';
import EquipmentCard from './parts/equipment-card';

interface Props {
    role: Role,
    onAbilityChange: (abilityType: string, value: number) => void;
    assignSkillPoint: (skillId: string, assignPoint: number) => void,
    updateEditRole: (roleData: any) => void;
    onLevelChange: (level: number) => void;
}

interface State {
    isHpDiceModalVisiable: boolean;
}

export default class DndRoleEditorComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isHpDiceModalVisiable: false
        }
    }

    render() {
        const { role, onAbilityChange, assignSkillPoint, updateEditRole, onLevelChange } = this.props;
        const element =
            <Form layout='inline'>
                <Row type="flex" justify="start" gutter={16}>
                    <Col span={12}>
                        <BasicsInfoCard role={role}
                            updateRole={updateEditRole}
                            onLevelChange={onLevelChange} />
                    </Col>
                    <Col span={12}>
                        <IntroductionCard role={role}
                            updateRole={updateEditRole} />
                    </Col>
                    <Col style={{ marginTop: 16 + 'px' }} span={24}>
                        <AbilityCard role={role}
                            updateRole={updateEditRole}
                            onAbilityChange={onAbilityChange} />
                    </Col>
                    <Col style={{ marginTop: 16 + 'px' }} span={24}>
                        <SkillCard role={role}
                            assignSkillPoint={assignSkillPoint} />
                    </Col>
                    <Col style={{ marginTop: 16 + 'px' }} span={24}>
                        <EquipmentCard role={role}
                            updateRole={updateEditRole} />
                    </Col>
                </Row>
            </Form>;
        return element;
    }
}