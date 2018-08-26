import * as React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
import 'antd/dist/antd.min.css'
import './app.css';
import NavgiationBar from './base/nav-bar/nav-bar';
import PlayerCardList from './coc/player-card/player-card-list';
import ToolBar from './base/tool-bar/tool-bar';

export default class App extends React.Component {
    render() {
        const element =
            <Layout className='full-height'>
                <Sider className='full-height theme-gray'>
                    <NavgiationBar />
                </Sider>
                <Layout className='full-height'>
                    <Header className='theme-gray' style={{ marginLeft: 1 + 'px' }}>
                        <ToolBar />
                    </Header>
                    <Content
                        className='full-height'
                        style={{ padding: 12 + 'px' }}>
                        <Switch>
                            <Route path='/coc/player-card/list' component={PlayerCardList} onEnter={
                                (a: any, b: any) => console.log(a)} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>;
        return element;
    }
}