import *  as React from 'react';
import Role from '../models/role';
import { Card, Form, Input, Select, Row, Col, InputNumber, Button, Table } from 'antd';
import './role-editor.css';
import { SexInfo } from '../../base/models/sex';
import { ShapeInfo } from '../models/shape';
import { BeliefInfo } from '../models/belief';
import CalculateService from '../services/calculate-service';
import { ProfessionInfo } from '../models/profession';
import { RaceInfo } from '../models/race';
import { AlignmentInfo } from '../models/alignment';
import { LanguageInfo } from '../models/language';
import AbilityInfos from '../models/ability/ability-info';
import { SkillInfo } from '../models/skill';

interface Props {
    role: Role,
    onAbilityChange: (abilityType: number, value: number) => void;
    assignSkillPoint: (skillId: number, assignPoint: number) => void,
    updateEditRole: (roleData: any) => void;
}

export default class DndRoleEditorComponent extends React.Component<Props> {
    render() {
        const { role, onAbilityChange, assignSkillPoint, updateEditRole } = this.props;
        const formItemLayout = {
        };

        const basicsInfoCard =
            <Card className='basics-info-card' title='基本信息'>
                <Form.Item {...formItemLayout} label="姓名">
                    <Input placeholder="请输入人物姓名..."
                        defaultValue={role.name}
                        onChange={(e: any) => updateEditRole({ name: e.target.value })} />
                </Form.Item>

                <Form.Item {...formItemLayout} label="性别">
                    <Select placeholder="请选择人物性别..."
                        defaultValue={role.sex}
                        onChange={(value: number) => updateEditRole({ sex: value })}>
                        <Select.Option value={SexInfo.MALE.id}>{SexInfo.MALE.label}</Select.Option>
                        <Select.Option value={SexInfo.FEMALE.id}>{SexInfo.FEMALE.label}</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item {...formItemLayout} label="种族">
                    <Select
                        placeholder="请选择人物种族..."
                        defaultValue={role.race}
                        onChange={(value: number) => updateEditRole({ race: value })}>
                        <Select.Option value={RaceInfo.HUMAN.id}>{RaceInfo.HUMAN.label}</Select.Option>
                        <Select.Option value={RaceInfo.DRAWF.id}>{RaceInfo.DRAWF.label}</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item {...formItemLayout} label="职业">
                    <Select
                        placeholder="请选择人物职业..."
                        defaultValue={role.profession}
                        onChange={(value: number) => updateEditRole({ profession: value })}>
                        <Select.Option value={ProfessionInfo.CLERIC.id}>{ProfessionInfo.CLERIC.label}</Select.Option>
                        <Select.Option value={ProfessionInfo.FIGHTER.id}>{ProfessionInfo.FIGHTER.label}</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item {...formItemLayout} label="阵营">
                    <Select
                        placeholder="请选择人物阵营..."
                        defaultValue={role.alignment}
                        onChange={(value: number) => updateEditRole({ alignment: value })}>
                        <Select.Option value={AlignmentInfo.LAWFUL_GOOD.id}>{AlignmentInfo.LAWFUL_GOOD.label}</Select.Option>
                        <Select.Option value={AlignmentInfo.LAWFUL_NEUTRAL.id}>{AlignmentInfo.LAWFUL_NEUTRAL.label}</Select.Option>
                        <Select.Option value={AlignmentInfo.LAWFUL_EVIL.id}>{AlignmentInfo.LAWFUL_EVIL.label}</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item {...formItemLayout} label="年龄">
                    <Input placeholder="请输入人物年龄..."
                        defaultValue={role.age ? role.age.toString() : null}
                        onChange={(e: any) => updateEditRole({ age: e.target.value })} />
                </Form.Item>
                <Form.Item {...formItemLayout} label="体型">
                    <Select
                        placeholder="请选择人物体型..."
                        defaultValue={role.shape}
                        onChange={(value: number) => updateEditRole({ shape: value })}>
                        <Select.Option value={ShapeInfo.SMALL.id}>{ShapeInfo.SMALL.label}</Select.Option>
                        <Select.Option value={ShapeInfo.MEDIUM.id}>{ShapeInfo.MEDIUM.label}</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item {...formItemLayout} label="信仰">
                    <Select
                        placeholder="请选择人物信仰..."
                        defaultValue={role.belief}
                        onChange={(value: number) => updateEditRole({ belief: value })}>
                        <Select.Option value={BeliefInfo.HEIRONEOUS.id}>{BeliefInfo.HEIRONEOUS.label}</Select.Option>
                        <Select.Option value={BeliefInfo.MORADIN.id}>{BeliefInfo.MORADIN.label}</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item {...formItemLayout} label="语言">
                    <Select
                        style={{ width: 300 + 'px' }}
                        mode='multiple'
                        placeholder="请选择人物会的语言..."
                        defaultValue={role.languages}
                        onChange={(value: number[]) => updateEditRole({ languages: value })} >
                        <Select.Option value={LanguageInfo.COMMON.id}>{
                            LanguageInfo.COMMON.label}
                        </Select.Option>
                    </Select>
                </Form.Item>
            </Card>;
        const introductionCard =
            <Card className='introduction-card' title='人物简介'>
                <h3>人物外貌:</h3>
                <Input.TextArea
                    style={{ borderColor: 'white', resize: 'none', marginTop: 8 + 'px', marginBottom: 8 + 'px' }}
                    placeholder="请输入人物外貌简介..."
                    autosize={{ minRows: 2, maxRows: 2 }}
                    defaultValue={role.appearanceDescription}
                    onChange={(e: any) => updateEditRole({ appearanceDescription: e.target.value })} />
                <h3>人物行为:</h3>
                <Input.TextArea
                    style={{ borderColor: 'white', resize: 'none', marginTop: 8 + 'px', marginBottom: 8 + 'px' }}
                    placeholder="请输入人物行为简介..."
                    autosize={{ minRows: 2, maxRows: 2 }}
                    defaultValue={role.behaviorDescription}
                    onChange={(e: any) => updateEditRole({ behaviorDescription: e.target.value })} />
                <h3>人物背景：</h3>
                <Input.TextArea
                    style={{ borderColor: 'white', resize: 'none', marginTop: 8 + 'px', marginBottom: 8 + 'px' }}
                    placeholder="请输入人物背景简介..."
                    autosize={{ minRows: 2, maxRows: 2 }}
                    defaultValue={role.backgroundDescription}
                    onChange={(e: any) => updateEditRole({ backgroundDescription: e.target.value })} />
            </Card>;

        const abilityCard =
            <Card className='ability-card' title='人物属性'>
                <Form.Item {...formItemLayout} label={AbilityInfos.STRENGTH.label}>
                    <InputNumber min={0} max={50}
                        defaultValue={role.abilities.str.value}
                        onChange={(value: number) => onAbilityChange(AbilityInfos.STRENGTH.id, value)} />
                </Form.Item>
                <Form.Item {...formItemLayout} label={AbilityInfos.DEXTERITY.label}>
                    <InputNumber min={0} max={50}
                        defaultValue={role.abilities.dex.value}
                        onChange={(value: number) => onAbilityChange(AbilityInfos.DEXTERITY.id, value)} />
                </Form.Item>
                <Form.Item {...formItemLayout} label={AbilityInfos.CONSTITUTION.label}>
                    <InputNumber min={0} max={50}
                        defaultValue={role.abilities.con.value}
                        onChange={(value: number) => onAbilityChange(AbilityInfos.CONSTITUTION.id, value)} />
                </Form.Item>
                <Form.Item {...formItemLayout} label={AbilityInfos.INTELLIGENCE.label}>
                    <InputNumber min={0} max={50}
                        defaultValue={role.abilities.int.value}
                        onChange={(value: number) => onAbilityChange(AbilityInfos.INTELLIGENCE.id, value)} />
                </Form.Item>
                <Form.Item {...formItemLayout} label={AbilityInfos.WISDOM.label}>
                    <InputNumber min={0} max={50}
                        defaultValue={role.abilities.wis.value}
                        onChange={(value: number) => onAbilityChange(AbilityInfos.WISDOM.id, value)} />
                </Form.Item>
                <Form.Item {...formItemLayout} label={AbilityInfos.CHARISMA.label}>
                    <InputNumber min={0} max={50}
                        defaultValue={role.abilities.cha.value}
                        onChange={(value: number) => onAbilityChange(AbilityInfos.CHARISMA.id, value)} />
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
                        SkillInfo.getSkillInfos().map(skill => {
                            return {
                                key: skill.id,
                                label: skill.label,
                                keyAbility: AbilityInfos.getAbility(skill.keyAbility).label,
                                assignedSkillPoint: role.skills.find(roleSkill => roleSkill.id === skill.id).assignedPoint
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