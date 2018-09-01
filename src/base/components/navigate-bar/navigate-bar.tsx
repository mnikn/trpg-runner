import * as React from 'react';
import { Menu, Icon } from 'antd';
import { NavigateContainer } from '../../containers/navigate';
import { NAVIGATE_LOCATION } from '../../constants/navigate';

interface Props {
    selectedNavTab: string;
}

export default class NavgiateBarComponent extends React.Component<Props> {
    render() {
        const element =
            <div>
                <NavigateContainer navigateLocation={NAVIGATE_LOCATION.COC_HOME}>
                    <span style={{ width: 100 + '%', lineHeight: 64 + 'px', color: 'white' }}>
                        Trpg 跑团搞事器
                    </span>
                </NavigateContainer>
                <Menu mode="vertical" theme='light'>
                    <Menu.Item>
                        <NavigateContainer navigateLocation={NAVIGATE_LOCATION.COC_PLAYER_CARD}>
                            <Icon type='user' />
                            <span>人物卡</span>
                        </NavigateContainer>
                    </Menu.Item>
                    <Menu.Item>
                        <span>
                            <Icon type="medicine-box" />
                            <span>工具箱</span>
                        </span>
                    </Menu.Item>
                </Menu>
            </div>;
        return element;
    }
}