import * as React from 'react';
import { Card, Input, InputNumber, Form, Table } from 'antd';
import * as _ from 'lodash';
import Role from '../../models/role';
import CalculateService from '../../services/calculate-service';
import AbilityInfo from '../../models/ability';
interface Props {
    role: Role;
    assignSkillPoint: (id: string, value: number) => void;
}

export default class SkillCard extends React.Component<Props> {
    render() {
        const { role, assignSkillPoint } = this.props;
        const formItemLayout = {};
        const element =
            <Card className='skill-card' title='人物技能'>
                <Form.Item {...formItemLayout} label="剩余技能点">
                    <Input value={CalculateService.calculateRemainSkillPoint(role)} disabled={true} />
                </Form.Item>
                <Table columns={[{
                    title: '技能名称',
                    dataIndex: 'label',
                    key: 'label'
                }, {
                    title: '关键属性',
                    dataIndex: 'keyAbility',
                    key: 'keyAbility'
                }, {
                    title: '花费的技能点',
                    dataIndex: 'usedSkillPoint',
                    render: (text, record) => (
                        <InputNumber
                            defaultValue={record.assignedSkillPoint}
                            max={CalculateService.calculateRemainSkillPoint(role) === 0 ? record.assignedSkillPoint : 100}
                            min={0}
                            onChange={(value: number) => assignSkillPoint(record.key, value)} />
                    )
                }]}
                    dataSource={
                        _.map(role.skills, (skill => {
                            return {
                                key: skill.id,
                                label: skill.label,
                                keyAbility: AbilityInfo.getAbility(skill.keyAbility).label,
                                assignedSkillPoint: skill.assignedPoint
                            }
                        }))
                    } />
            </Card>;
        return element;
    }
}