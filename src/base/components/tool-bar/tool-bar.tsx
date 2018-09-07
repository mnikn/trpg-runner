import * as React from 'react';
import { Button, Row, Col } from 'antd';
import ButtonModel from '../../../platform/models/button';

interface Props {
    toolBarButtons: ButtonModel[];
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
}