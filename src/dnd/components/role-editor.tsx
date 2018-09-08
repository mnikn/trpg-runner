import *  as React from 'react';
import Role from '../models/role';
import { Card, Form, Input, Select } from 'antd';
import './role-editor.css';
import { Cleric, Fighter } from '../models/profession';
import { Male, Female } from '../../base/models/sex';
import { SmallShape, MediumShape } from '../models/shape';
import { CommonLanguage } from '../models/language';
import { HeironeousBelief, MoradinBelief } from '../models/belief';
import { Human, Drawf } from '../models/race';
import { LawfulGood, LawfulNeutral, LawfulEvil } from '../models/alignment';

interface Props {
    role: Role
}

export default class RoleEditorComponent extends React.Component<Props> {
    render() {
        let { role } = this.props;
        role = new Role();
        role.name = '莱昂';
        role.age = 21;
        role.race = new Human();
        role.profession = new Cleric();
        role.shape = new MediumShape();
        role.belief = new HeironeousBelief();
        role.sex = new Male();
        role.alignment = new LawfulGood();

        role.languages = [];
        role.languages[0] = new CommonLanguage();

        const formItemLayout = {
            // labelCol: { span: 6 },
            // wrapperCol: { span: 14 },
        };
        const element =
            <Form layout='inline'>
                <Card className='basics-info-card'>
                    <Form.Item {...formItemLayout} label="姓名">
                        <Input placeholder="请输入角色姓名..." defaultValue={role.name} />
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="种族">
                        <Select placeholder="请选择角色种族..." defaultValue={role.race.getId()}>
                            <Select.Option value={Human.getId()}>{Human.getLabel()}</Select.Option>
                            <Select.Option value={Drawf.getId()}>{Drawf.getLabel()}</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="阵营">
                        <Select placeholder="请选择角色阵营..." defaultValue={role.alignment.getId()}>
                            <Select.Option value={LawfulGood.getId()}>{LawfulGood.getLabel()}</Select.Option>
                            <Select.Option value={LawfulNeutral.getId()}>{LawfulNeutral.getLabel()}</Select.Option>
                            <Select.Option value={LawfulEvil.getId()}>{LawfulEvil.getLabel()}</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="职业">
                        <Select placeholder="请选择角色职业..." defaultValue={role.profession.getId()}>
                            <Select.Option value={Cleric.getId()}>{Cleric.getLabel()}</Select.Option>
                            <Select.Option value={Fighter.getId()}>{Fighter.getLabel()}</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="性别">
                        <Select placeholder="请选择角色性别..." defaultValue={role.sex.getId()}>
                            <Select.Option value={Male.getId()}>{Male.getLabel()}</Select.Option>
                            <Select.Option value={Female.getId()}>{Female.getLabel()}</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="年龄">
                        <Input placeholder="请输入角色年龄..." defaultValue={role.age.toString()} />
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="体型">
                        <Select placeholder="请选择角色体型..." defaultValue={role.shape.getId()}>
                            <Select.Option value={SmallShape.getId()}>{SmallShape.getLabel()}</Select.Option>
                            <Select.Option value={MediumShape.getId()}>{MediumShape.getLabel()}</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="信仰">
                        <Select placeholder="请选择角色信仰..." defaultValue={role.belief.getId()}>
                            <Select.Option value={HeironeousBelief.getId()}>{HeironeousBelief.getLabel()}</Select.Option>
                            <Select.Option value={MoradinBelief.getId()}>{MoradinBelief.getLabel()}</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="语言">
                        <Select
                            style={{ width: 300 + 'px' }}
                            mode='multiple'
                            placeholder="请选择角色会的语言..."
                            defaultValue={role.languages.map(lan => lan.getId())} >
                            <Select.Option value={CommonLanguage.getId()}>{
                                CommonLanguage.getLabel()}
                            </Select.Option>
                        </Select>
                    </Form.Item>
                </Card>
            </Form>;
        return element;
    }
}