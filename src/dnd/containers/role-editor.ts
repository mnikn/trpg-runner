import { Dispatch } from 'redux';
import { IRootState } from "../../base/reducers";
import DndRoleEditorComponent from '../components/role-editor';
import { createDndChangeAbilityAction, createDndAssignSkillPointAction, createDndUpdateEditRoleAction } from '../../base/actions/dnd/dnd';
import { connect } from 'react-redux';

const mapStateToProps = (state: IRootState) => {
    return {
        role: state.dnd.editRole
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onAbilityChange: (abilityType: number, value: number) => {
        dispatch(createDndChangeAbilityAction(abilityType, value));
    },
    assignSkillPoint: (skillId: number, assignPoint: number) => {
        dispatch(createDndAssignSkillPointAction(skillId, assignPoint));
    },
    updateEditRole: (value: any) => {
        console.log(value);
        dispatch(createDndUpdateEditRoleAction(value));
    }
});

export const DndRoleEditorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DndRoleEditorComponent);