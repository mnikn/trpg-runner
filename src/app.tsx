import * as React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
import 'antd/dist/antd.min.css'
import './app.css';
import NavgiationBar from './base/nav-bar/nav-bar';
import PersonCardList from './coc/person-card/person-card-list';

export default class App extends React.Component {
    render() {
        const element =
            <Layout className='full-height'>
                <Sider className='full-height theme-gray'>
                    <NavgiationBar />
                </Sider>
                <Layout className='full-height'>
                    <Header className='theme-gray' style={{ marginLeft: 1 + 'px' }}>
                    </Header>
                    <Content className='full-height' style={{ padding: 12 + 'px' }}>
                        <Switch>
                            <Route path='/coc/person-card/list' component={PersonCardList} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>;
        <div>App</div>;
        return element;
    }
}