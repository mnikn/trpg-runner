import * as React from 'react';
import { Modal, Form, InputNumber, Button } from 'antd';
import * as _ from 'lodash';
import DiceService from '../../../base/services/dice-service';

interface Props {
    diceType: number;
    isModalVisibable: boolean;
    hpDiceNumbers: number[],
    closeModal: () => void;
    onHpDiceNumbersChange: (diceNumbers: number[]) => void;
}

export default class HpDiceModal extends React.Component<Props> {
    render() {
        const { diceType, hpDiceNumbers, isModalVisibable, closeModal, onHpDiceNumbersChange } = this.props;
        const formItemLayout = {};
        let currentHpDiceNumbers = hpDiceNumbers;
        const element =
            <Modal title='生命值骰子值设置'
                visible={isModalVisibable}
                onCancel={closeModal}
                onOk={closeModal}
                footer={
                    <div>
                        <Button size='default' type='primary' onClick={() => {
                            _.range(1, hpDiceNumbers.length).forEach(index => {
                                let diceValue = DiceService.trollDice(diceType);
                                currentHpDiceNumbers[index] = diceValue;
                            });
                            onHpDiceNumbersChange(currentHpDiceNumbers);
                        }}>
                            全随机!
                        </Button>
                        <Button size='default' type='primary' onClick={closeModal}>OK</Button>
                    </div>}>
                <Form layout='inline'
                    style={{ maxHeight: 300 + 'px', overflow: 'scroll' }}>
                    {_.map(hpDiceNumbers, (diceNumber, index) => {
                        return <Form.Item key={index} {...formItemLayout} label={`等级${index + 1}的骰子值`}>
                            <InputNumber key={index}
                                min={1}
                                max={diceType}
                                value={diceNumber}
                                style={{ marginLeft: 8 + 'px' }}
                                disabled={true} />
                            {index !== 0 ?
                                <Button shape='circle'
                                    icon='reload'
                                    onClick={() => {
                                        let diceValue = DiceService.trollDice(diceType);
                                        currentHpDiceNumbers[index] = diceValue;
                                        onHpDiceNumbersChange(currentHpDiceNumbers);
                                    }} /> : null}
                        </Form.Item>
                    })}
                </Form>

            </Modal>;
        return element;
    }
}