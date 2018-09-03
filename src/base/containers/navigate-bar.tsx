import { connect } from "react-redux";
import NavigateBarComponent from "../components/navigate-bar/navigate-bar";
import { Dispatch } from "redux";
import { actionShowSettingsModal, actionCloseSettingsModal } from "../actions/base/navigate-bar";

const mapStateToProps = (state: any) => ({
    isSettingsModalVisable: state.navigateBar.isSettingsModalVisable
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    handleShowSettingsClick: () => {
        dispatch(actionShowSettingsModal());
    },
    handleCloseSettingsClick: () => {
        dispatch(actionCloseSettingsModal());
    }
});


export const NavigateBarContainer = connect
    (mapStateToProps, mapDispatchToProps)
    (NavigateBarComponent);