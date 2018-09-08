import { Dispatch } from 'redux';
import { IRootState } from "../../base/reducers";
import DndRoleEditorComponent from '../components/role-editor';
import { createDndChangeAbilityAction, createDndAssignSkillPointAction } from '../../base/actions/dnd/dnd';
import { connect } from 'react-redux';

const mapStateToProps = (state: IRootState) => {
    return {
        role: state.dnd.editRole
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onAbilityChange: (abilityType: string, value: number) => {
        dispatch(createDndChangeAbilityAction(abilityType, value));
    },
    assignSkillPoint: (skillId: number, assignPoint: number) => {
        dispatch(createDndAssignSkillPointAction(skillId, assignPoint));
    }
});

export const DndRoleEditorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DndRoleEditorComponent);