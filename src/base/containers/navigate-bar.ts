import { connect } from "react-redux";
import NavigateBarComponent from "../components/navigate-bar/navigate-bar";
import { Dispatch } from "redux";
import { createSelectAppModeAction, createShowSettingsModalAction, createCloseSettingsModalAction } from "../actions/base/app";
import { createNavigateAction } from "../actions/base/app";
import { IRootState } from "../reducers";
import { appStore } from "../../..";
import { DND } from "../constants/app-mode";
import { NAVIGATE_LOCATION } from "../constants/navigate";
import { createFetchRolesRequestAction } from "../actions/base/role";

const mapStateToProps = (state: IRootState) => ({
    isSettingsModalVisable: state.app.isSettingsModalVisable,
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
    },
    navigateToHome: () => {
        const {appMode} = appStore.getState().app;
        const homeLocation = appMode === DND ? NAVIGATE_LOCATION.DND_HOME : NAVIGATE_LOCATION.COC_HOME;
        dispatch(createNavigateAction(homeLocation));
    },
    navigateToRoleCard: () => {
        const {appMode} = appStore.getState().app;
        const roleCardLocation = appMode === DND ? NAVIGATE_LOCATION.DND_ROLE_CARD : NAVIGATE_LOCATION.COC_ROLE_CARD;
        dispatch(createNavigateAction(roleCardLocation));
        dispatch(createFetchRolesRequestAction());
        // dispatch(createRequestRolesAction(appMode));
    }
});


export const NavigateBarContainer = connect
    (mapStateToProps, mapDispatchToProps)
    (NavigateBarComponent);