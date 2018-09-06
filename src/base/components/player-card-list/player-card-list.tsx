import * as React from 'react';
import { Row, Col } from 'antd';
import Player from '../../../coc/models/player';
import { isUndefined } from 'util';
import PlayerCardComponent from './player-card';

interface Props {
    appMode: string,
    players: Player[];
    selectedPlayers: number[],
    defaultAvtarUrl: string,
    selectPlayerCard: (selectingPlayer: number) => void;
    refreshPlayers: () => void;
}

export default class PlayerCardListComponent extends React.Component<Props> {
    componentDidMount() {
        this.props.refreshPlayers();
    }

    render() {
        const { appMode,
            players,
            selectedPlayers,
            selectPlayerCard,
            defaultAvtarUrl } = this.props;
        const element =
            <React.Fragment>
                <Row gutter={12}>
                    {players.map(player =>
                        <Col key={player.id} span={8} style={{ marginBottom: 36 + 'px' }}>
                            <PlayerCardComponent
                                defaultAvtarUrl={defaultAvtarUrl}
                                player={player}
                                isPlayerCardSelected={!isUndefined(selectedPlayers.find(id => player.id === id))}
                                selectPlayerCard={() => selectPlayerCard(player.id)} />
                        </Col>)}
                </Row>
            </React.Fragment>;
        return element;
    }
}


