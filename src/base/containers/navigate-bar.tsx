import { connect } from "react-redux";
import NavigateBarComponent from "../components/navigate-bar/navigate-bar";
import { Dispatch } from "redux";
import { createSelectAppModeAction, createShowSettingsModalAction, createCloseSettingsModalAction } from "../actions/base/navigate-bar";
import { IRootState } from "../reducers";

const mapStateToProps = (state: IRootState) => ({
    isSettingsModalVisable: state.navigateBar.isSettingsModalVisable,
    appMode: state.app.appMode
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    handleShowSettingsClick: () => {
        dispatch(createShowSettingsModalAction());
    },
    handleCloseSettingsClick: () => {
        dispatch(createCloseSettingsModalAction());
    },
    selectAppMode: (mode: string) => {
        dispatch(createSelectAppModeAction(mode));
    }});


export const NavigateBarContainer = connect
    (mapStateToProps, mapDispatchToProps)
    (NavigateBarComponent);