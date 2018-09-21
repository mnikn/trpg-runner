import { createRecieveCreateRoleAction } from './../../src/base/actions/dnd/dnd';
import dnd, { IDndState } from './../../src/base/reducers/dnd/dnd';
import { expect } from 'chai';
import Role from '../../src/dnd/models/role';
import { SkillInfo } from '../../src/dnd/models/skill';
import { ProfessionInfo } from '../../src/dnd/models/profession';
import AbilityInfo from '../../src/dnd/models/ability';
import 'mocha';

describe('Test dnd role change', function () {
    it('should create dnd role', function () {
        let action = createRecieveCreateRoleAction();
        let role = new Role();
        role.id = 1;
        role.name = '角色' + role.id;
        role.skills = SkillInfo.createSkills();
        role.level = 1;
        role.languages = [];
        role.profession = ProfessionInfo.getProfession('FIGHTER');
        role.hpDiceNumbers = [role.profession.hpDiceType];
        role.abilities = AbilityInfo.createAbilities();
        action.data = role;


        let initState: IDndState = {
            editRole: null,
            roles: [],
            selectedRoles: [],
            isFetchingRoles: false};
        let expectState: IDndState = {
            editRole: null,
            roles: [role],
            selectedRoles: [],
            isFetchingRoles: false
        };
        let actualState = dnd(initState, action);
        
        expect(expectState.roles).to.deep.equal(actualState.roles);
    });
})