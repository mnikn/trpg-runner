import * as React from 'react';
import { Card, Input } from 'antd';
import * as _ from 'lodash';
import Role from '../../models/role';
import WeaponTransfer from './weapon-transfer';
import { WeaponInfo, Weapon } from '../../models/weapon';
interface Props {
    role: Role;
    updateRole: (roleData: any) => void;
}

export default class EquipmentCard extends React.Component<Props> {
    render() {
        const { role, updateRole } = this.props;
        const element =
            <Card className='equipment-card' title='人物装备'>
                <h3>武器选择：</h3>
                <WeaponTransfer
                    targetKeys={_.map(role.weapons, 'id')}
                    onTransfer={(selectedWeapons: string[]) => {
                        let currentWeapons = _.filter(WeaponInfo.WEAPONS, (weapon: Weapon) => _.includes(selectedWeapons, weapon.id))
                        updateRole({ weapons: currentWeapons });
                    }}
                />
            </Card>;
        return element;
    }
}