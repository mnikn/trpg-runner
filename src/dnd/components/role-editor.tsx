import *  as React from 'react';
import Role from '../models/role';
import { Card, Form, Input, Select, Row, Col, InputNumber, Button, Table } from 'antd';
import './role-editor.css';
import { Cleric, Fighter } from '../models/profession';
import { Male, Female } from '../../base/models/sex';
import { SmallShape, MediumShape } from '../models/shape';
import { CommonLanguage } from '../models/language';
import { HeironeousBelief, MoradinBelief } from '../models/belief';
import { Human, Drawf } from '../models/race';
import { LawfulGood, LawfulNeutral, LawfulEvil } from '../models/alignment';
import CalculateService from '../../coc/services/calculate-service';
import { SKILLS } from '../models/skill';
import { Wisdom, Charisma, Intelligence, Constitution, Dexterity, Strength } from '../models/ability';

interface Props {
    role: Role,
    onAbilityChange: (abilityType: string, value: number) => void;
    assignSkillPoint: (skillId: number, assignPoint: number) => void
}

export default class DndRoleEditorComponent extends React.Component<Props> {
    render() {
        const { role, onAbilityChange, assignSkillPoint } = this.props;
        const formItemLayout = {
        };

        const basicsInfoCard =
            <Card className='basics-info-card' title='基本信息'>
                <Form.Item {...formItemLayout} label="姓名">
                    <Input placeholder="请输入人物姓名..." defaultValue={role.name} />
                </Form.Item>
                <Form.Item {...formItemLayout} label="种族">
                    <Select placeholder="请选择人物种族..." defaultValue={role.race.getId()}>
                        <Select.Option value={Human.getId()}>{Human.getLabel()}</Select.Option>
                        <Select.Option value={Drawf.getId()}>{Drawf.getLabel()}</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item {...formItemLayout} label="阵营">
                    <Select placeholder="请选择人物阵营..." defaultValue={role.alignment.getId()}>
                        <Select.Option value={LawfulGood.getId()}>{LawfulGood.getLabel()}</Select.Option>
                        <Select.Option value={LawfulNeutral.getId()}>{LawfulNeutral.getLabel()}</Select.Option>
                        <Select.Option value={LawfulEvil.getId()}>{LawfulEvil.getLabel()}</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item {...formItemLayout} label="职业">
                    <Select placeholder="请选择人物职业..." defaultValue={role.profession.getId()}>
                        <Select.Option value={Cleric.getId()}>{Cleric.getLabel()}</Select.Option>
                        <Select.Option value={Fighter.getId()}>{Fighter.getLabel()}</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item {...formItemLayout} label="性别">
                    <Select placeholder="请选择人物性别..." defaultValue={role.sex.getId()}>
                        <Select.Option value={Male.getId()}>{Male.getLabel()}</Select.Option>
                        <Select.Option value={Female.getId()}>{Female.getLabel()}</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item {...formItemLayout} label="年龄">
                    <Input placeholder="请输入人物年龄..." defaultValue={role.age.toString()} />
                </Form.Item>
                <Form.Item {...formItemLayout} label="体型">
                    <Select placeholder="请选择人物体型..." defaultValue={role.shape.getId()}>
                        <Select.Option value={SmallShape.getId()}>{SmallShape.getLabel()}</Select.Option>
                        <Select.Option value={MediumShape.getId()}>{MediumShape.getLabel()}</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item {...formItemLayout} label="信仰">
                    <Select placeholder="请选择人物信仰..." defaultValue={role.belief.getId()}>
                        <Select.Option value={HeironeousBelief.getId()}>{HeironeousBelief.getLabel()}</Select.Option>
                        <Select.Option value={MoradinBelief.getId()}>{MoradinBelief.getLabel()}</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item {...formItemLayout} label="语言">
                    <Select
                        style={{ width: 300 + 'px' }}
                        mode='multiple'
                        placeholder="请选择人物会的语言..."
                        defaultValue={role.languages.map(lan => lan.getId())} >
                        <Select.Option value={CommonLanguage.getId()}>{
                            CommonLanguage.getLabel()}
                        </Select.Option>
                    </Select>
                </Form.Item>
            </Card>;
        const introductionCard =
            <Card className='introduction-card' title='人物简介'>
                <Input.TextArea
                    style={{ borderColor: 'white', resize: 'none' }}
                    placeholder="请输入人物简介"
                    autosize={{ minRows: 2, maxRows: 6 }}
                    defaultValue={role.introduction} />
            </Card>;
        const abilityCard =
            <Card className='ability-card' title='人物属性'>
                <Form.Item {...formItemLayout} label={Strength.getLabel()}>
                    <InputNumber min={0} max={50}
                        defaultValue={role.abilities.str.number}
                        onChange={(value: number) => onAbilityChange('str', value)} />
                </Form.Item>
                <Form.Item {...formItemLayout} label={Dexterity.getLabel()}>
                    <InputNumber min={0} max={50}
                        defaultValue={role.abilities.dex.number}
                        onChange={(value: number) => onAbilityChange('dex', value)} />
                </Form.Item>
                <Form.Item {...formItemLayout} label={Constitution.getLabel()}>
                    <InputNumber min={0} max={50}
                        defaultValue={role.abilities.con.number}
                        onChange={(value: number) => onAbilityChange('con', value)} />
                </Form.Item>
                <Form.Item {...formItemLayout} label={Intelligence.getLabel()}>
                    <InputNumber min={0} max={50}
                        defaultValue={role.abilities.int.number}
                        onChange={(value: number) => onAbilityChange('int', value)} />
                </Form.Item>
                <Form.Item {...formItemLayout} label={Wisdom.getLabel()}>
                    <InputNumber min={0} max={50}
                        defaultValue={role.abilities.wid.number}
                        onChange={(value: number) => onAbilityChange('wid', value)} />
                </Form.Item>
                <Form.Item {...formItemLayout} label={Charisma.getLabel()}>
                    <InputNumber min={0} max={50}
                        defaultValue={role.abilities.cha.number}
                        onChange={(value: number) => onAbilityChange('cha', value)} />
                </Form.Item>
                <br />

                <Form.Item {...formItemLayout} label="生命值">
                    <InputNumber
                        value={CalculateService.calculateHp(role)}
                        disabled={true} />
                </Form.Item>
                <Form.Item {...formItemLayout} label="防御等级">
                    <InputNumber value={CalculateService.calculateArrorClass(role)} disabled={true} />
                </Form.Item>
                <Form.Item {...formItemLayout} label="先攻调整">
                    <InputNumber value={CalculateService.calculateAttackOrder(role)} disabled={true} />
                </Form.Item>
            </Card>;
        const skillCard =
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
                        Object.keys(SKILLS).map(key => {
                            let skills: any = SKILLS;
                            let skill = skills[key];
                            return {
                                key: skill.id,
                                label: skill.label,
                                keyAbility: skill.keyAbility.getLabel(),
                                assignedSkillPoint: role.skills.find(roleSkill => roleSkill.getId() === skill.id).assignedPoint
                            }
                        })
                    } />
            </Card>
        const element =
            <Form layout='inline'>
                <Row type="flex" justify="start" gutter={16}>
                    <Col span={12}>{basicsInfoCard} </Col>
                    <Col span={12}>{introductionCard}</Col>
                    <Col style={{ marginTop: 16 + 'px' }} span={24}>{abilityCard}</Col>
                    <Col style={{ marginTop: 16 + 'px' }} span={24}>{skillCard}</Col>
                </Row>
            </Form>;
        return element;
    }
}