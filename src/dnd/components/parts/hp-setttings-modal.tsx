import * as React from 'react';
import { Modal, InputNumber, Button, Radio } from 'antd';
import * as _ from 'lodash';
import { HpAssignType } from '../../../base/constants/dnd/hp-assign-type';
const RadioGroup = Radio.Group;

interface Props {
    isModalVisibable: boolean;
    hpAssignType: HpAssignType,
    maxHp: number,
    closeModal: () => void;
    onHpAssignTypeChange: (assignType: HpAssignType, hpValue: number) => void;
}

export default class HpSettingsModalComponent extends React.Component<Props> {
    render() {
        const { hpAssignType, maxHp, isModalVisibable, closeModal, onHpAssignTypeChange } = this.props;
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        let currentAssignType = hpAssignType;
        let currentHpValue = maxHp;
        const element =
            <Modal title='生命值设置'
                visible={isModalVisibable}
                onCancel={closeModal}
                onOk={closeModal}
                footer={
                    <div>
                        <Button size='default' type='primary' onClick={() => {
                            onHpAssignTypeChange(currentAssignType, currentHpValue);
                            closeModal();
                        }}>OK</Button>
                    </div>}>
                <RadioGroup defaultValue={hpAssignType} onChange={(e: any) => currentAssignType = e.target.value}>
                    <Radio style={radioStyle} value={HpAssignType.RADOM_PERFESSION_HP_DICE}>按职业生命骰随机</Radio>
                    <Radio style={radioStyle} value={HpAssignType.FULL_PERFESSION_HP_DICE}>按职业生命骰取满</Radio>
                    <Radio style={radioStyle} value={HpAssignType.HALF_PERFESSION_HP_DICE}>按职业生命骰取半</Radio>
                    <Radio style={radioStyle} value={HpAssignType.CUSTOM}>自定义：<InputNumber
                        min={1}
                        defaultValue={currentHpValue}
                        onChange={(value: number) => currentHpValue = value}
                        style={{ marginLeft: 8 + 'px' }} /></Radio>
                </RadioGroup>

            </Modal>;
        return element;
    }
}