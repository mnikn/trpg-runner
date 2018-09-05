import * as React from 'react';
import { Row, Col } from 'antd';
import Player from '../../../coc/models/player';
import CocPlayerCardComponent from '../../../coc/components/player-card/player-card';
import { isUndefined } from 'util';
import { DND, COC } from '../../constants/app-mode';
import DndPlayerCardComponent from '../../../dnd/components/player-card';

interface Props {
    appMode: string,
    players: Player[];
    selectedPlayers: number[],
    selectPlayerCard: (selectingPlayer: number) => void;
    refreshPlayers: () => void;
}

export default class PlayerCardListComponent extends React.Component<Props> {
    componentDidMount() {
        this.props.refreshPlayers();
    }

    render() {
        const { appMode, players, selectedPlayers, selectPlayerCard } = this.props;
        const element =
            <React.Fragment>
                <Row gutter={12}>
                    {players.map(player =>
                        <Col key={player.id} span={8} style={{ marginBottom: 36 + 'px' }}>
                            {
                                appMode === COC ?
                                    <CocPlayerCardComponent
                                        player={player}
                                        isPlayerCardSelected={!isUndefined(selectedPlayers.find(id => player.id === id))}
                                        selectPlayerCard={() => selectPlayerCard(player.id)} /> :
                                    <DndPlayerCardComponent
                                        player={player}
                                        isPlayerCardSelected={!isUndefined(selectedPlayers.find(id => player.id === id))}
                                        selectPlayerCard={() => selectPlayerCard(player.id)} />
                            }
                        </Col>)}
                </Row>
            </React.Fragment>;
        return element;
    }
}


