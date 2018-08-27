import * as React from 'react';
import { Card, Row, Col, Icon, Button } from 'antd';
import Player from '../../models/player';
import PlayerDataService from './player-data-service';
import './player-card-list.css';
import MenuButton from '../../../platform/components/menu-button';
import ToolBarService from '../../../base/tool-bar/tool-bar-service';
import Inject from '../../../platform/decorators/inject';
import CommandMessager from '../../../platform/services/command-messager';

interface PlayerCardProps {
    player: Player;
    handleOnCardClick: () => void;
}

interface PlayerCardState {
    isActive: boolean;
}

class PlayerCard extends React.Component<PlayerCardProps, PlayerCardState> {
    @Inject(PlayerDataService)
    private _dataService: PlayerDataService;

    constructor(props: PlayerCardProps) {
        super(props);
        this.state = {
            isActive: false
        };
    }

    componentWillMount() {
        this._dataService.registerOnSelectionChanged(() => {
            this.setState({
                isActive: this._dataService.hasSelected(this.props.player.id)
            })
        });
    }

    render() {
        const { player, handleOnCardClick } = this.props;
        const { isActive } = this.state;
        const defaultAvtar = require('../../resources/default-player-avtar.jpg');
        const element =
            <Card className='player-card' style={isActive ? { borderColor: 'rgb(0,136,237)', borderWidth: 4 + 'px' } : {}}
                onClick={handleOnCardClick}>
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

interface PlayerCardListProps {
    location?: any;
}

interface PlayerCardListState {
    players: Player[];
}

export default class PlayerCardList extends React.Component<PlayerCardListProps, PlayerCardListState> {
    @Inject(PlayerDataService)
    private _dataService: PlayerDataService;

    @Inject(ToolBarService)
    private _toolBarService: ToolBarService;


    constructor(props: PlayerCardListProps) {
        super(props);
        this.state = {
            players: []
        };
    }

    componentDidMount() {
        this._dataService.getPlayers().then(players => {
            this.setState({
                players: players
            });
        });
    }

    render() {
        const { players } = this.state;
        const element =
            <React.Fragment>
                <Row gutter={12}>
                    {players.map(player =>
                        <Col key={player.id} span={8} style={{ marginBottom: 36 + 'px' }}>
                            <PlayerCard player={player} handleOnCardClick={() => {
                                this._dataService.revertSelect(player.id);
                                this._toolBarService.updateToolBarButton(new MenuButton(
                                    'coc.player.delete',
                                    'minus',
                                    () => CommandMessager.execute('coc.player.delete'),
                                    !this._dataService.hasSelection()));
                            }} />
                        </Col>)}
                </Row>
            </React.Fragment>;
        return element;
    }
}


