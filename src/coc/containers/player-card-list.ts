import { createSelectPlayerCardAction, createRequestPlayersAction } from './../../base/actions/coc/player-card-list';
import { appStore } from './../../../index';
import { connect } from "react-redux";
import PlayerCardListComponent from "../../base/components/player-card-list/player-card-list";
import { createUpdateButtonOnSelectingAction } from '../../base/actions/base/tool-bar';
import { IRootState } from '../../base/reducers';

const mapStateToProps = (state: IRootState) => {
    return {
        appMode: state.app.appMode,
        players: state.coc.playerCardList.players,
        defaultAvtarUrl: 'coc-default-player-avtar.jpg',
        selectedPlayers: state.coc.playerCardList.selectedPlayers
    }
};

const mapDispatchToProps = (dispatch: any) => ({
    selectPlayerCard: (selectingPlayer: number) => {
        dispatch(createSelectPlayerCardAction(selectingPlayer));
        dispatch(createUpdateButtonOnSelectingAction(appStore.getState().coc.playerCardList.selectedPlayers));
    },
    refreshPlayers: () => dispatch(createRequestPlayersAction())
});

export const PlayerCardListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerCardListComponent);