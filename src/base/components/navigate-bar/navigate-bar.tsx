import * as React from 'react';
import { Menu, Icon, Button, Modal, Select } from 'antd';
import { NAVIGATE_LOCATION } from '../../constants/navigate';
import { COC, DND } from '../../constants/app-mode';
import './navigate-bar.css';
const Option = Select.Option;

interface Props {
    isSettingsModalVisable: boolean,
    appMode: string,
    handleShowSettingsClick: () => void,
    handleCloseSettingsClick: () => void,
    selectAppMode: (mode: string) => void,
    navigateToHome: () => void,
    navigateToRoleCard: () => void
}

export default class NavgiateBarComponent extends React.Component<Props> {
    render() {
        const {
            appMode,
            isSettingsModalVisable,
            handleShowSettingsClick,
            handleCloseSettingsClick,
            navigateToHome,
            navigateToRoleCard,
            selectAppMode } = this.props;

        const homeNavigateLocation = appMode === COC ? NAVIGATE_LOCATION.COC_HOME : NAVIGATE_LOCATION.DND_HOME;
        const roleCardNavigateLocation = appMode === COC ? NAVIGATE_LOCATION.COC_ROLE_CARD : NAVIGATE_LOCATION.DND_ROLE_CARD;
        let selectedAppMode = appMode;
        const element =
            <React.Fragment>
                <span className='app-icon' onClick={navigateToHome}>
                    Trpg 跑团搞事器
                </span>
                <Menu mode="vertical" theme='light'>
                    <Menu.Item onClick={navigateToRoleCard}>
                        <Icon type='user' />
                        <span>人物卡</span>
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
                        onOk={() => {
                            selectAppMode(selectedAppMode);
                            handleCloseSettingsClick();
                        }}
                        onCancel={handleCloseSettingsClick}>
                        <div>
                            Trpg类型: <Select defaultValue={appMode}
                                style={{ width: 120 }}
                                onChange={(mode: string) => { selectedAppMode = mode }}>
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