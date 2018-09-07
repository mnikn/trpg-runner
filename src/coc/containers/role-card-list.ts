import { createSelectRoleCardAction, createRequestRolesAction } from '../../base/actions/coc/role-card-list';
import { appStore } from '../../..';
import { connect } from "react-redux";
import RoleCardListComponent from "../../base/components/role-card-list/role-card-list";
import { createUpdateButtonOnSelectingAction } from '../../base/actions/base/tool-bar';
import { IRootState } from '../../base/reducers';

const mapStateToProps = (state: IRootState) => {
    return {
        appMode: state.app.appMode,
        roles: state.coc.roleCardList.roles,
        defaultAvtarUrl: 'coc-default-role-avtar.jpg',
        selectedRoles: state.coc.roleCardList.selectedRoles
    }
};

const mapDispatchToProps = (dispatch: any) => ({
    selectRoleCard: (selectingRole: number) => {
        dispatch(createSelectRoleCardAction(selectingRole));
        dispatch(createUpdateButtonOnSelectingAction(appStore.getState().coc.roleCardList.selectedRoles));
    },
    refreshRoles: () => dispatch(createRequestRolesAction())
});

export const RoleCardListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RoleCardListComponent);