import * as React from 'react';
import { Menu, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class NavgiationBar extends React.Component {
    constructor(props: any) {
        super(props);
        this.handleOnRouteChange = this.handleOnRouteChange.bind(this);
    }
    render() {
        const element =

            <div>
                <Link to='/coc/home'>
                    <span style={{ width: 100 + '%', lineHeight: 64 + 'px', color: 'white' }}>
                        Trpg 跑团搞事器
                    </span>
                </Link>
                <Menu mode="vertical" theme='light'>
                    <Menu.Item>
                        <Link to='/coc/player-card/list' onChange={this.handleOnRouteChange}>
                            <Icon type='user' />
                            <span>人物卡</span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item>
                        <span>
                            <Icon type="medicine-box" />
                            <span>工具箱</span>
                        </span>
                    </Menu.Item>
                </Menu>
            </div>
            ;
        return element;
    }


    handleOnRouteChange(a: any): void {
        console.log(a);
    }
}