import { Dispatch } from 'redux';
import { IRootState } from "../../base/reducers";
import DndRoleEditorComponent from '../components/role-editor';
import { createDndChangeAbilityAction, createDndAssignSkillPointAction, createDndUpdateEditRoleAction, createDndLevelChangeAction } from '../../base/actions/dnd/dnd';
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
    assignSkillPoint: (skillId: string, assignPoint: number) => {
        dispatch(createDndAssignSkillPointAction(skillId, assignPoint));
    },
    updateEditRole: (value: any) => {
        dispatch(createDndUpdateEditRoleAction(value));
    },
    onLevelChange: (level: number) => {
        dispatch(createDndLevelChangeAction(level));
    }
});

export const DndRoleEditorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DndRoleEditorComponent);