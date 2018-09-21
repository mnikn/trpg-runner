import { createRecieveCreateRoleAction } from './../../src/base/actions/base/role-card-list';
import roleCardList, { IRoleCardListState } from './../../src/base/reducers/base/role-card-list';
import { expect } from 'chai';
import { DND } from '../../src/base/constants/app-mode';
import Role from '../../src/dnd/models/role';
import { SkillInfo } from '../../src/dnd/models/skill';
import { ProfessionInfo } from '../../src/dnd/models/profession';
import AbilityInfo from '../../src/dnd/models/ability';
import 'mocha';

describe('Test dnd role change', function () {
    it('should create dnd role', function () {
        let action = createRecieveCreateRoleAction(DND);
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


        let initState: IRoleCardListState = {
            roles: [],
            selectedRoles: [],
            isFetchingRoles: false};
        let expectState: IRoleCardListState = {
            roles: [role],
            selectedRoles: [],
            isFetchingRoles: false
        };
        let actualState = roleCardList(initState, action);
        
        expect(expectState.roles).to.deep.equal(actualState.roles);
    });
})