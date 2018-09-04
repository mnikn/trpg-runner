import * as React from 'react';
import { Menu, Icon, Button, Modal, Select } from 'antd';
import { NavigateContainer } from '../../containers/navigate';
import { NAVIGATE_LOCATION } from '../../constants/navigate';
import { COC, DND } from '../../constants/app-mode';
const Option = Select.Option;

interface Props {
    isSettingsModalVisable: boolean,
    appMode: string,
    handleShowSettingsClick: () => void,
    handleCloseSettingsClick: () => void,
    selectAppMode: (mode: string) => void
}

export default class NavgiateBarComponent extends React.Component<Props> {
    render() {
        const { appMode,
            isSettingsModalVisable,
            handleShowSettingsClick,
            handleCloseSettingsClick,
            selectAppMode } = this.props;
        const element =
            <React.Fragment>
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
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        style={{
                            marginBottom: 16 + 'px',
                            position: 'absolute',
                            bottom: 0
                        }}
                        type='default'
                        icon='setting'
                        size='default'
                        onClick={handleShowSettingsClick} />
                    <Modal title='设置'
                        visible={isSettingsModalVisable}
                        onOk={handleCloseSettingsClick}
                        onCancel={handleCloseSettingsClick}>
                        <div>
                            Trpg类型: <Select defaultValue={appMode}
                                style={{ width: 120 }}
                                onChange={(mode: string) => selectAppMode(mode)}>
                                <Option value={DND}>DND</Option>
                                <Option value={COC}>COC</Option>
                            </Select>
                        </div>
                    </Modal>
                </div>

            </React.Fragment>;
        return element;
    }
}