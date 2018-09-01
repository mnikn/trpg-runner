import { appStore } from './../../../index';
import { Police } from '../models/profession';
import { connect } from "react-redux";
import { Injector } from "../../platform/decorators/inject";
import PlayerDataService from "../components/player-card/player-data-service";
import PlayerCardListComponent from "../components/player-card/player-card-list";
import Player from "../models/player";
import { Sex } from "../../base/models/sex";
import { selectPlayerCard } from '../../base/actions/coc/player-card-list';
import { updateButtonOnSelecting } from '../../base/actions/base/tool-bar';

let dataService: PlayerDataService = Injector.get(PlayerDataService);
let players: Player[] = [];
for (let i = 0; i < 10; ++i) {
    let player = new Player();
    player.id = i;
    player.name = 'sans';
    player.sex = Sex.MALE;
    player.avtarUrl = '../resources/default-player-avtar.jpg';
    player.profession = new Police();
    players.push(player);
}

const mapStateToProps = (state: any) => {
    return {
        players: players,
        selectedPlayers: state.playerCardList.selectedPlayers
    }
};

const mapDispatchToProps = (dispatch: any) => ({
    selectPlayerCard: (selectingPlayer: number) => {
        dispatch(selectPlayerCard(selectingPlayer));
        dispatch(updateButtonOnSelecting(appStore.getState().playerCardList.selectedPlayers));
    }
});

export const PlayerCardListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerCardListComponent);