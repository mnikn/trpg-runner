import * as React from 'react';
import { Form, InputNumber, Card, Input, Select, Button } from 'antd';
import * as _ from 'lodash';
import Role from '../../models/role';
import CalculateService from '../../services/calculate-service';
import { HpSettingsModalContainer } from '../../containers/parts/hp-settings-modal';

interface Props {
    role: Role;
    updateRole: (roleData: any) => void;
    onAbilityChange: (id: string, value: number) => void;
}

interface State {
    isHpDiceModalVisiable: boolean;
}

export default class AbilityCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isHpDiceModalVisiable: false
        };
    }

    render() {
        const { role, updateRole, onAbilityChange } = this.props;
        const formItemLayout = {};

        const str = role.getStr();
        const dex = role.getDex();
        const con = role.getCon();
        const int = role.getInt();
        const wis = role.getWis();
        const cha = role.getCha();
        const element =
            <Card className='ability-card' title='人物属性'>
                <Form.Item {...formItemLayout} label={str.label}>
                    <InputNumber min={0} max={50}
                        defaultValue={str.value}
                        onChange={(value: number) => onAbilityChange(str.id, value)} />
                </Form.Item>
                <Form.Item {...formItemLayout} label={dex.label}>
                    <InputNumber min={0} max={50}
                        defaultValue={dex.value}
                        onChange={(value: number) => onAbilityChange(dex.id, value)} />
                </Form.Item>
                <Form.Item {...formItemLayout} label={con.label}>
                    <InputNumber min={0} max={50}
                        defaultValue={con.value}
                        onChange={(value: number) => onAbilityChange(con.id, value)} />
                </Form.Item>
                <Form.Item {...formItemLayout} label={int.label}>
                    <InputNumber min={0} max={50}
                        defaultValue={int.value}
                        onChange={(value: number) => onAbilityChange(int.id, value)} />
                </Form.Item>
                <Form.Item {...formItemLayout} label={wis.label}>
                    <InputNumber min={0} max={50}
                        defaultValue={wis.value}
                        onChange={(value: number) => onAbilityChange(wis.id, value)} />
                </Form.Item>
                <Form.Item {...formItemLayout} label={cha.label}>
                    <InputNumber min={0} max={50}
                        defaultValue={cha.value}
                        onChange={(value: number) => onAbilityChange(cha.id, value)} />
                </Form.Item>
                <br />

                <Form.Item {...formItemLayout} label="生命值">
                    <InputNumber
                        value={role.maxHp}
                        disabled={true} />
                    <Button shape='circle'
                        icon='setting'
                        size='default'
                        onClick={() => this.setState({ isHpDiceModalVisiable: !this.state.isHpDiceModalVisiable })} />
                </Form.Item>

                <Form.Item {...formItemLayout} label="防御等级">
                    <InputNumber value={CalculateService.calculateArrorClass(role)} disabled={true} />
                </Form.Item>
                <Form.Item {...formItemLayout} label="先攻调整">
                    <InputNumber value={CalculateService.calculateAttackOrder(role)} disabled={true} />
                </Form.Item>


                <HpSettingsModalContainer
                    hpAssignType={role.hpAssignType}
                    maxHp={role.maxHp}
                    isModalVisibable={this.state.isHpDiceModalVisiable}
                    closeModal={() => this.setState({ isHpDiceModalVisiable: false })} />
            </Card>;
        return element;
    }
}