import * as React from 'react';
import { Transfer } from 'antd';
import * as _ from 'lodash';
import { WeaponInfo } from '../models/weapon';

interface Props {
    targetKeys: string[];
    onTransfer: (nextTargetKeys: string[]) => void;
}

interface State {
    selectedKeys: string[]
}

export default class WeaponTransfer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedKeys: []
        };
    }
    render() {
        const { targetKeys, onTransfer } = this.props;
        const { selectedKeys } = this.state;
        const element =
            <Transfer
                dataSource={WeaponInfo.WEAPONS.map(weapon => {
                    return {
                        key: weapon.id,
                        title: weapon.label
                    };
                })}
                titles={['Source', 'Target']}
                targetKeys={targetKeys}
                selectedKeys={selectedKeys}
                onChange={(nextTargetKeys: string[]) => onTransfer(nextTargetKeys)}
                onSelectChange={(sourceSelectedKeys, targetSelectedKeys) => this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] })}

                render={item => item.title} />;
        return element;
    }
}