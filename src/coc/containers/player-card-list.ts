import { requestPlayers } from './../../base/actions/coc/player-card-list';
import { appStore } from './../../../index';
import { connect } from "react-redux";
import PlayerCardListComponent from "../components/player-card/player-card-list";
import { selectPlayerCard } from '../../base/actions/coc/player-card-list';
import { createUpdateButtonOnSelectingAction } from '../../base/actions/base/tool-bar';

const mapStateToProps = (state: any) => {
    return {
        players: state.playerCardList.players,
        selectedPlayers: state.playerCardList.selectedPlayers
    }
};

const mapDispatchToProps = (dispatch: any) => ({
    selectPlayerCard: (selectingPlayer: number) => {
        dispatch(selectPlayerCard(selectingPlayer));
        dispatch(createUpdateButtonOnSelectingAction(appStore.getState().playerCardList.selectedPlayers));
    },
    refreshPlayers: () => dispatch(requestPlayers())
});

export const PlayerCardListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerCardListComponent);