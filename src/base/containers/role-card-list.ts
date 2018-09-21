import { connect } from "react-redux";
import RoleCardListComponent from "../../base/components/role-card-list/role-card-list";
import { IRootState } from '../../base/reducers';

const mapStateToProps = (state: IRootState) => {
    return {
        appMode: state.app.appMode,
        roles: state.dnd.roles,
        selectedRoles: state.dnd.selectedRoles
    }
};

const mapDispatchToProps = (dispatch: any) => ({
});

export const RoleCardListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RoleCardListComponent);