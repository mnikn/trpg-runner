import { AbilityInfo } from './../../../dnd/models/ability';
import { ACTION_DND_EDIT_ROLE, ACTION_DND_ASSIGN_SKILL_POINT } from './../../actions/dnd/dnd';
import "reflect-metadata";
import { AnyAction } from 'redux';
import Role from "../../../dnd/models/role";
import { ACTION_DND_CHANGE_ABILITY } from '../../actions/dnd/dnd';
import RoleDataService from '../../../dnd/services/role-data-service';

export interface IDndState {
    editRole: Role,
}

function handleEditRole(state: IDndState, roleId: number) {
    let role = new Role();
    role = RoleDataService.getRole(roleId);
    // role.hpDiceNumber = DiceService.trollSixDice();
    // role.name = '莱昂';
    // role.age = 21;
    // role.race = new Human();
    // role.profession = PROFESSIONS.CLERIC;
    // role.shape = new MediumShape();
    // role.belief = new HeironeousBelief();
    // role.sex = new Male();
    // role.alignment = new LawfulGood();

    // role.languages = [];
    // role.languages[0] = new CommonLanguage();

    // role.abilities = new Abilities(8, 10, 10, 16, 18, 10);

    // role.introduction = '莱昂出生在费伦大陆中部，自小无父无母，在孤儿院长大，由于孤儿的生活经历，莱昂擅长观察别人的脸色。在 6 岁的时候，被一名迪奈尔牧师所收养，开始住进修道院。在修道院的生活简单而充实，莱昂跟随养父信仰迪奈尔，追求文学的奥秘。这次听闻路斯坎有“最终文卷”的传闻，决心前往探险。\n\n莱昂生长相丑陋，一头棕发、穿普通的旅行者套装，左腰上有一把小匕首，背上的背包里面放着的是一般的常用杂物和武器。';

    return Object.assign({}, state, {
        editRole: role
    });
}

function handleChangeAbility(state: IDndState, abilityType: number, value: number) {
    let newEditRole = Object.assign({}, state.editRole);
    switch (abilityType) {
        case AbilityInfo.STRENGTH.id:
            newEditRole.abilities.str = value;
            break;
        case AbilityInfo.DEXTERITY.id:
            newEditRole.abilities.dex = value;
            break;
        case AbilityInfo.CONSTITUTION.id:
            newEditRole.abilities.con = value;
            break;
        case AbilityInfo.INTELLIGENCE.id:
            newEditRole.abilities.int = value;
            break;
        case AbilityInfo.WISDOM.id:
            newEditRole.abilities.wis = value;
            break;
        case AbilityInfo.CHARISMA.id:
            newEditRole.abilities.cha = value;
            break;
    }
    // Reflect.get(newEditRole.abilities, abilityType).number = value;
    return Object.assign({}, state, {
        editRole: newEditRole
    });
}

function handleAssignSkillPoint(state: IDndState, skillId: number, assignPoint: number): IDndState {
    let newEditRole = Object.assign({}, state.editRole);
    newEditRole.skills.find(skill => skill.getId() === skillId).assignedPoint = assignPoint;
    return Object.assign({}, state, {
        editRole: newEditRole
    });
}

export default function dnd(state: IDndState = {
    editRole: null
},
    action: AnyAction) {
    switch (action.type) {
        case ACTION_DND_CHANGE_ABILITY:
            return handleChangeAbility(state, action.abilityType, action.value);
        case ACTION_DND_EDIT_ROLE:
            return handleEditRole(state, action.roleId);
        case ACTION_DND_ASSIGN_SKILL_POINT:
            return handleAssignSkillPoint(state, action.skillId, action.assignPoint)

    }
    return state;
}