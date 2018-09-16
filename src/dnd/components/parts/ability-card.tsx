import * as React from 'react';
import { Form, InputNumber, Card, Input, Select, Button } from 'antd';
import * as _ from 'lodash';
import Role from '../../models/role';
import CalculateService from '../../services/calculate-service';
import AbilityInfos from '../../models/ability/ability-info';
import HpDiceModal from './hp-dice-modal';

interface Props {
    role: Role;
    updateRole: (roleData: any) => void;
    onAbilityChange: (id: number, value: number) => void;
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
        const element =
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
                    <Button shape='circle'
                        icon='reload'
                        size='default'
                        onClick={() => this.setState({ isHpDiceModalVisiable: !this.state.isHpDiceModalVisiable })} />
                </Form.Item>

                <Form.Item {...formItemLayout} label="防御等级">
                    <InputNumber value={CalculateService.calculateArrorClass(role)} disabled={true} />
                </Form.Item>
                <Form.Item {...formItemLayout} label="先攻调整">
                    <InputNumber value={CalculateService.calculateAttackOrder(role)} disabled={true} />
                </Form.Item>


                <HpDiceModal
                    hpDiceNumbers={role.hpDiceNumbers}
                    diceType={role.profession.hpDiceType}
                    onHpDiceNumbersChange={(diceNumbers: number[]) => {
                        role.hpDiceNumbers = diceNumbers;
                        updateRole({ hpDiceNumbers: role.hpDiceNumbers });
                    }}
                    isModalVisibable={this.state.isHpDiceModalVisiable}
                    closeModal={() => this.setState({ isHpDiceModalVisiable: false })} />
            </Card>;
        return element;
    }
}