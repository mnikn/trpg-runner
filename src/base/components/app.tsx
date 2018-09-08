import * as React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
import 'antd/dist/antd.min.css'
import './app.css';
import { ToolBarContianer } from '../containers/tool-bar';
import { NavigateBarContainer } from '../containers/navigate-bar';
import { RoleCardListContainer } from '../containers/role-card-list';
import { DndRoleEditorContainer } from '../../dnd/containers/role-editor';

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
                            <Route path='/:mode/role-card/list' component={RoleCardListContainer} />
                            <Route path='/:mode/role-card/edit/:id' component={DndRoleEditorContainer} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>;
        return element;
    }
}