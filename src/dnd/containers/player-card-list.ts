import { appStore } from './../../../index';
import { connect } from "react-redux";
import PlayerCardListComponent from "../../base/components/player-card-list/player-card-list";
import { createUpdateButtonOnSelectingAction } from '../../base/actions/base/tool-bar';
import { IRootState } from '../../base/reducers';
import { createSelectPlayerCardAction, createRequestPlayersAction } from '../../base/actions/dnd/player-card-list';

const mapStateToProps = (state: IRootState) => {
    return {
        appMode: state.app.appMode,
        players: state.dnd.playerCardList.players,
        selectedPlayers: state.dnd.playerCardList.selectedPlayers
    }
};

const mapDispatchToProps = (dispatch: any) => ({
    selectPlayerCard: (selectingPlayer: number) => {
        dispatch(createSelectPlayerCardAction(selectingPlayer));
        dispatch(createUpdateButtonOnSelectingAction(appStore.getState().dnd.playerCardList.selectedPlayers));
    },
    refreshPlayers: () => dispatch(createRequestPlayersAction())
});

export const PlayerCardListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerCardListComponent);