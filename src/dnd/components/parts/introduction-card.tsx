import * as React from 'react';
import { Card, Input } from 'antd';
import * as _ from 'lodash';
import Role from '../../models/role';
interface Props {
    role: Role;
    updateRole: (roleData: any) => void;
}

export default class IntroductionCard extends React.Component<Props> {
    render() {
        const { role, updateRole } = this.props;
        const element =
            <Card className='introduction-card' title='人物简介'>
                <h3>人物外貌:</h3>
                <Input.TextArea
                    style={{ borderColor: 'white', resize: 'none', marginTop: 8 + 'px', marginBottom: 8 + 'px' }}
                    placeholder="请输入人物外貌简介..."
                    autosize={{ minRows: 2, maxRows: 2 }}
                    defaultValue={role.appearanceDescription}
                    onChange={(e: any) => updateRole({ appearanceDescription: e.target.value })} />
                <h3>人物行为:</h3>
                <Input.TextArea
                    style={{ borderColor: 'white', resize: 'none', marginTop: 8 + 'px', marginBottom: 8 + 'px' }}
                    placeholder="请输入人物行为简介..."
                    autosize={{ minRows: 2, maxRows: 2 }}
                    defaultValue={role.behaviorDescription}
                    onChange={(e: any) => updateRole({ behaviorDescription: e.target.value })} />
                <h3>人物背景：</h3>
                <Input.TextArea
                    style={{ borderColor: 'white', resize: 'none', marginTop: 8 + 'px', marginBottom: 8 + 'px' }}
                    placeholder="请输入人物背景简介..."
                    autosize={{ minRows: 2, maxRows: 2 }}
                    defaultValue={role.backgroundDescription}
                    onChange={(e: any) => updateRole({ backgroundDescription: e.target.value })} />
            </Card>;
        return element;
    }
}