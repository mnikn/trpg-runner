import { DND } from './../constants/app-mode';
import { appStore } from './../../../index';
import { connect } from "react-redux";
import RoleCardListComponent from "../../base/components/role-card-list/role-card-list";
import { IRootState } from '../../base/reducers';
import { createNavigateAction, createUpdateButtonOnSelectingAction } from '../../base/actions/base/app';
import { NAVIGATE_LOCATION } from '../../base/constants/navigate';
import { createSelectRoleCardAction } from '../../base/actions/base/role-card-list';
import RoleCardComponent from '../components/role-card-list/role-card';
import { Dispatch } from 'redux';

const mapStateToProps = (state: IRootState) => {
    return {
        defaultAvtarUrl: state.app.appMode === DND ? 'dnd-default-role-avtar.jpg' : 'coc-default-role-avtar.jpg',
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    selectRoleCard: (selectingRole: number) => {
        dispatch(createSelectRoleCardAction(selectingRole));
        dispatch(createUpdateButtonOnSelectingAction(appStore.getState().roleCardList.selectedRoles));
    },
    navigateToEditor: (roleId: number) => {
        const { appMode } = appStore.getState().app;
        const editorLocation = appMode === DND ? NAVIGATE_LOCATION.DND_ROLE_EDITOR : '';
        dispatch(createNavigateAction(
            editorLocation,
            roleId.toString()));
    }

});

export const RoleCardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RoleCardComponent);