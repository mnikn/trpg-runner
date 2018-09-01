import * as React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
import 'antd/dist/antd.min.css'
import './app.css';
import NavgiationBarComponent from './base/components/nav-bar/nav-bar';
import { PlayerCardListContainer } from './coc/containers/player-card/player-card-list';
import { ToolBarContianer } from './base/containers/tool-bar';

import './coc/commands/index';
import { NAVIGATE_LOCATION } from './base/components/navigate/navigate';

interface Props {
    selectedNavTab: number
}

export default class App extends React.Component<Props> {
    render() {
        const {selectedNavTab} = this.props;
        const element =
            <Layout className='full-height'>
                <Sider className='full-height theme-gray'>
                    <NavgiationBarComponent selectedNavTab={NAVIGATE_LOCATION.COC_HOME} />
                </Sider>
                <Layout className='full-height'>
                    <Header className='theme-gray' style={{ marginLeft: 1 + 'px' }}>
                        <ToolBarContianer />
                    </Header>
                    <Content
                        className='full-height'
                        style={{ padding: 12 + 'px' }}>
                        <Switch>
                            <Route path='/coc/player-card/list' component={PlayerCardListContainer} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>;
        return element;
    }
}