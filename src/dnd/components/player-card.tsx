import *  as React from 'react';
import { Card, Button } from 'antd';
import './player-card.css';
import Player from '../models/player';

interface Props {
    player: Player;
    isPlayerCardSelected: boolean;
    selectPlayerCard: (selectingPlayer: number) => void;
}

interface State {
}

export default class PlayerCardComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { selectPlayerCard, isPlayerCardSelected } = this.props;
        let { player } = this.props;
        player = player ? player : new Player();
        const defaultAvtar = require('../resources/default-player-avtar.jpg');
        const element =
            <Card className='player-card' style={isPlayerCardSelected ? { borderColor: 'rgb(0,136,237)', borderWidth: 4 + 'px' } : {}}
                onClick={() => selectPlayerCard(player.id)}>
                <img className='player-card-avtar' src={defaultAvtar} />
                <div style={{
                    marginTop: 24 + 'px',
                    fontSize: 16 + 'px'
                }}>
                    姓名: {player.name}<br />
                    职业: {player.profession.getName()}<br />
                </div>
                <Button
                    style={{ position: 'absolute', right: 16 + 'px', bottom: 16 + 'px' }}
                    onClick={this.handleOnEditButtonClick}
                    shape='circle-outline' icon='edit' size='default' />
            </Card>;
        return element;
    }

    handleOnEditButtonClick(event: any): void {
        event.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
    }
}