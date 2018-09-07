import * as React from 'react';
import { Button, Row, Col } from 'antd';
import ToolBarButton from '../../../platform/components/button';

interface Props {
    toolBarButtons: ToolBarButton[];
}

export default class ToolBarComponent extends React.Component<Props> {

    render() {
        const { toolBarButtons } = this.props;
        const element =
            <React.Fragment>
                <Row gutter={4}>
                    {toolBarButtons.map(button =>
                        <Col key={button.id} span={1}>
                            <Button
                                type='default'
                                shape='circle'
                                icon={button.icon}
                                disabled={button.isDisabled}
                                onClick={button.onClick}
                                size='default' />
                        </Col>)}
                </Row>
            </React.Fragment>;
        return element;
    }

    // initButtons(): void {
    //     if (location.hash === '#/coc/home') {
    //         this._toolBarService.clearToolBarButtons();
    //     } else if (location.hash === '#/coc/role-card/list') {
    //         const toolbarButtons: MenuButton[] = [
    //             new MenuButton('coc.role.create', 'plus', () => CommandMessager.execute('coc.role.create')),
    //             new MenuButton('coc.role.delete', 'minus', () => CommandMessager.execute('coc.role.delete'), true)
    //         ];
    //         this._toolBarService.setToolBarButtons(toolbarButtons);
    //     }
    // }
}