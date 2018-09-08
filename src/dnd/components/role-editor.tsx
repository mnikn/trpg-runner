import *  as React from 'react';
import Role from '../models/role';
import { Card, Form, Input, Select, Row, Col } from 'antd';
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

        role.introduction = '莱昂出生在费伦大陆中部，自小无父无母，在孤儿院长大，由于孤儿的生活经历，莱昂擅长观察别人的脸色。在 6 岁的时候，被一名迪奈尔牧师所收养，开始住进修道院。在修道院的生活简单而充实，莱昂跟随养父信仰迪奈尔，追求文学的奥秘。这次听闻路斯坎有“最终文卷”的传闻，决心前往探险。\n\n莱昂生长相丑陋，一头棕发、穿普通的旅行者套装，左腰上有一把小匕首，背上的背包里面放着的是一般的常用杂物和武器。';

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
                style={{borderColor: 'white', resize: 'none'}}
                    placeholder="请输入人物简介"
                    autosize={{ minRows: 2, maxRows: 6 }}
                    defaultValue={role.introduction} />
            </Card>;
        const element =
            <Form layout='inline'>
                <Row type="flex" justify="start" gutter={16}>
                    <Col span={12}>{basicsInfoCard} </Col>
                    <Col span={12}>{introductionCard}</Col>
                </Row>
            </Form>;
        return element;
    }
}