import * as React from 'react';
import { Button, Row, Col } from 'antd';
import MenuButton from '../../platform/components/menu-button';
import ToolBarService from './tool-bar-service';
import Injector from '../../platform/services/injector';


interface Props {
}

interface State {
    buttons: MenuButton[];
}

export default class ToolBar extends React.Component<Props, State> {
    private _toolBarService = Injector.get<ToolBarService>(ToolBarService.token);
    constructor(props: Props) {
        super(props);
        this.initButtons();
        this.state = {
            buttons: this._toolBarService.getToolBarButtons()
        };
    }

    componentDidMount() {
        this._toolBarService.registerOnToolBarButtonChanged((buttons: MenuButton[]) => {
            this.setState({
                buttons: buttons
            });
        });
        window.addEventListener('hashchange', () => {
            if (location.hash === '#/coc/home') {
                this._toolBarService.clearToolBarButtons();
            } else if (location.hash === '#/coc/player-card/list') {
                const toolbarButtons: MenuButton[] = [
                    new MenuButton('coc.player.create', 'plus'),
                    new MenuButton('coc.player.delete', 'minus', true)
                ];
                this._toolBarService.setToolBarButtons(toolbarButtons);
            }
        });
    }

    render() {
        const { buttons } = this.state;
        const element =
            <React.Fragment>
                <Row gutter={4}>
                    {buttons.map(button =>
                        <Col key={button.id} span={1}>
                            <Button
                                type='default'
                                shape='circle'
                                icon={button.icon}
                                disabled={button.isDisabled}
                                size='default' />
                        </Col>)}
                </Row>
            </React.Fragment>;
        return element;
    }

    initButtons(): void {
        if (location.hash === '#/coc/home') {
            this._toolBarService.clearToolBarButtons();
        } else if (location.hash === '#/coc/player-card/list') {
            const toolbarButtons: MenuButton[] = [
                new MenuButton('coc.player.create', 'plus'),
                new MenuButton('coc.player.delete', 'minus', true)
            ];
            this._toolBarService.setToolBarButtons(toolbarButtons);
        }
    }
}