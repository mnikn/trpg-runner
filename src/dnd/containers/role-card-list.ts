import { appStore } from './../../../index';
import { connect } from "react-redux";
import RoleCardListComponent from "../../base/components/role-card-list/role-card-list";
import { createUpdateButtonOnSelectingAction } from '../../base/actions/base/tool-bar';
import { IRootState } from '../../base/reducers';
import { createSelectRoleCardAction, createRequestRolesAction } from '../../base/actions/dnd/role-card-list';

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
    refreshRoles: () => dispatch(createRequestRolesAction())
});

export const RoleCardListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RoleCardListComponent);