import * as React from 'react';
import { Row, Col } from 'antd';
import Player from '../../models/player';
import PlayerCardComponent from './player-card';
import { isUndefined } from 'util';

interface Props {
    players: Player[];
    selectedPlayers: number[],
    selectPlayerCard: (selectingPlayer: number) => void;
}

export default class PlayerCardListComponent extends React.Component<Props> {

    render() {
        const { players, selectedPlayers, selectPlayerCard } = this.props;
        const element =
            <React.Fragment>
                <Row gutter={12}>
                    {players.map(player =>
                        <Col key={player.id} span={8} style={{ marginBottom: 36 + 'px' }}>
                            <PlayerCardComponent 
                            player={player}
                            isPlayerCardSelected={!isUndefined(selectedPlayers.find(id => player.id === id))}
                            selectPlayerCard={() => selectPlayerCard(player.id)} />
                        </Col>)}
                </Row>
            </React.Fragment>;
        return element;
    }
}


