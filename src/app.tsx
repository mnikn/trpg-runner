import * as React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
import 'antd/dist/antd.min.css'
import './app.css';
import { PlayerCardListContainer } from './coc/containers/player-card-list';
import { ToolBarContianer } from './base/containers/tool-bar';

import './coc/commands/index';
import { NAVIGATE_LOCATION } from './base/constants/navigate';
import { NavigateBarContainer } from './base/containers/navigate-bar';

interface Props {
    selectedNavTab: number
}

export default class App extends React.Component<Props> {
    render() {
        const element =
            <Layout className='full-height'>
                <Sider className='full-height theme-gray'>
                    <NavigateBarContainer selectedNavTab={NAVIGATE_LOCATION.COC_HOME} />
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