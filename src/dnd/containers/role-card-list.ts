import { appStore } from './../../../index';
import { connect } from "react-redux";
import RoleCardListComponent from "../../base/components/role-card-list/role-card-list";
import { createUpdateButtonOnSelectingAction } from '../../base/actions/base/tool-bar';
import { IRootState } from '../../base/reducers';
import { createSelectRoleCardAction, createRequestRolesAction } from '../../base/actions/dnd/role-card-list';
import { createNavigateAction } from '../../base/actions/base/app';
import { NAVIGATE_LOCATION } from '../../base/constants/navigate';

const mapStateToProps = (state: IRootState) => {
    return {
        appMode: state.app.appMode,
        roles: state.dnd.roleCardList.roles,
        defaultAvtarUrl: 'dnd-default-role-avtar.jpg',
        selectedRoles: state.dnd.roleCardList.selectedRoles
    }
};

const mapDispatchToProps = (dispatch: any) => ({
    selectRoleCard: (selectingRole: number) => {
        dispatch(createSelectRoleCardAction(selectingRole));
        dispatch(createUpdateButtonOnSelectingAction(appStore.getState().dnd.roleCardList.selectedRoles));
    },
    refreshRoles: () => dispatch(createRequestRolesAction()),
    navigateToEditor: (roleId: number) => dispatch(
        createNavigateAction(
            NAVIGATE_LOCATION.DND_ROLE_EDITOR,
            roleId.toString()))
});

export const RoleCardListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RoleCardListComponent);