import * as React from 'react';
import { Form, InputNumber, Card, Input, Select } from 'antd';
import * as _ from 'lodash';
import Role from '../../models/role';
import { SexInfo } from '../../../base/models/sex';
import { RaceInfo } from '../../models/race';
import { ShapeInfo } from '../../models/shape';
import { ProfessionInfo } from '../../models/profession';
import { AlignmentInfo } from '../../models/alignment';
import { BeliefInfo } from '../../models/belief';
import { LanguageInfo } from '../../models/language';

interface Props {
    role: Role;
    updateRole: (roleData: any) => void;
    onLevelChange: (level: number) => void;
}

export default class BasicsInfoCard extends React.Component<Props> {
    render() {
        const { role, updateRole, onLevelChange } = this.props;
        const formItemLayout = {};
        const element =
            <Card className='basics-info-card' title='基本信息'>
                <Form.Item {...formItemLayout} label="姓名">
                    <Input placeholder="请输入人物姓名..."
                        style={{ width: 150 + 'px' }}
                        defaultValue={role.name}
                        onChange={(e: any) => updateRole({ name: e.target.value })} />
                </Form.Item>

                <Form.Item {...formItemLayout} label="性别">
                    <Select placeholder="请选择人物性别..."
                        style={{ width: 100 + 'px' }}
                        defaultValue={role.sex}
                        onChange={(value: number) => updateRole({ sex: value })}>
                        <Select.Option value={SexInfo.MALE.id}>{SexInfo.MALE.label}</Select.Option>
                        <Select.Option value={SexInfo.FEMALE.id}>{SexInfo.FEMALE.label}</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item {...formItemLayout} label="种族">
                    <Select
                        placeholder="请选择人物种族..."
                        style={{ width: 100 + 'px' }}
                        defaultValue={role.race ? role.race.id : null}
                        onChange={(value: number) => updateRole({ race: RaceInfo.getRace(value) })}>
                        {
                            _.map(RaceInfo.RACES, (race =>
                                <Select.Option key={race.id} value={race.id}>
                                    {race.label}
                                </Select.Option>))
                        }
                    </Select>
                </Form.Item>
                <Form.Item {...formItemLayout} label="年龄">
                    <Input placeholder="请输入..."
                        style={{ width: 100 + 'px' }}
                        defaultValue={role.age ? role.age.toString() : null}
                        onChange={(e: any) => updateRole({ age: e.target.value })} />
                </Form.Item>
                <Form.Item {...formItemLayout} label="体型">
                    <Select
                        placeholder="请选择人物体型..."
                        style={{ width: 100 + 'px' }}
                        defaultValue={role.shape ? role.shape.id : null}
                        onChange={(value: number) => updateRole({ shape: ShapeInfo.getShape(value) })}>
                        {
                            _.map(ShapeInfo.SHAPES, (shape =>
                                <Select.Option key={shape.id} value={shape.id}>
                                    {shape.label}
                                </Select.Option>))
                        }
                    </Select>
                </Form.Item>

                <Form.Item {...formItemLayout} label="等级">
                    <InputNumber min={1} max={100}
                        defaultValue={role.level}
                        onChange={(value: number) => onLevelChange(value)} />
                </Form.Item>
                <Form.Item {...formItemLayout} label="职业">
                    <Select
                        placeholder="请选择人物职业..."
                        style={{ width: 100 + 'px' }}
                        defaultValue={role.profession ? role.profession.id : null}
                        onChange={(value: string) => updateRole({ profession: ProfessionInfo.getProfession(value) })}>
                        {
                            _.map(ProfessionInfo.PROFESSIONS, (profession =>
                                <Select.Option key={profession.id} value={profession.id}>
                                    {profession.label}
                                </Select.Option>))
                        }
                    </Select>
                </Form.Item>
                <Form.Item {...formItemLayout} label="阵营">
                    <Select
                        placeholder="请选择人物阵营..."
                        style={{ width: 100 + 'px' }}
                        defaultValue={role.alignment ? role.alignment.id : null}
                        onChange={(value: number) => updateRole({ alignment: AlignmentInfo.getAlignment(value) })}>
                        {
                            _.map(AlignmentInfo.ALIGNMENTS, (alignment =>
                                <Select.Option key={alignment.id} value={alignment.id}>
                                    {alignment.label}
                                </Select.Option>))
                        }
                    </Select>
                </Form.Item>
                <Form.Item {...formItemLayout} label="信仰">
                    <Select
                        placeholder="请选择人物信仰..."
                        style={{ width: 200 + 'px' }}
                        defaultValue={role.belief ? role.belief.id : null}
                        onChange={(value: number) => updateRole({ belief: BeliefInfo.getBelief(value) })}>
                        {
                            _.map(BeliefInfo.BELIEFS, (belief =>
                                <Select.Option key={belief.id} value={belief.id}>
                                    {belief.label}
                                </Select.Option>))
                        }
                    </Select>
                </Form.Item>
                <Form.Item {...formItemLayout} label="语言">
                    <Select
                        style={{ width: 300 + 'px' }}
                        mode='multiple'
                        placeholder="请选择人物会的语言..."
                        defaultValue={role.languages.map(lan => lan.id)}
                        onChange={(value: number[]) => updateRole({ languages: LanguageInfo.getLanguages(value) })} >
                        {
                            _.map(LanguageInfo.LANGUAGES, (lan =>
                                <Select.Option key={lan.id} value={lan.id}>
                                    {lan.label}
                                </Select.Option>))
                        }
                    </Select>
                </Form.Item>
            </Card>;
        return element;
    }
}