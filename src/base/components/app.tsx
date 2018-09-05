import * as React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
import 'antd/dist/antd.min.css'
import './app.css';
import { PlayerCardListContainer as CocPlayerCardListContainer } from '../../coc/containers/player-card-list';
import { ToolBarContianer } from '../containers/tool-bar';

import '../../coc/commands';
import { NavigateBarContainer } from '../containers/navigate-bar';
import { PlayerCardListContainer as DndPlayerCardListContainer } from '../../dnd/containers/player-card-list';

interface Props {
}

export default class AppComponent extends React.Component<Props> {
    render() {
        const element =
            <Layout className='full-height'>
                <Sider className='full-height theme-gray'>
                    <NavigateBarContainer />
                </Sider>
                <Layout className='full-height'>
                    <Header className='theme-gray' style={{ marginLeft: 1 + 'px' }}>
                        <ToolBarContianer />
                    </Header>
                    <Content
                        className='full-height'
                        style={{ padding: 12 + 'px' }}>
                        <Switch>
                            <Route path='/coc/player-card/list' component={CocPlayerCardListContainer} />
                            <Route path='/dnd/player-card/list' component={DndPlayerCardListContainer} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>;
        return element;
    }
}