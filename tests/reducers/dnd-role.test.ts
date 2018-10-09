import { createDndChangeHpAssignTypeAction } from './../../src/base/actions/dnd/dnd';
import role, { IRoleState } from './../../src/base/reducers/base/role';
import { ProfessionInfo } from './../../src/dnd/models/profession';
import 'mocha';

import { expect } from 'chai';
import { HpAssignType } from '../../src/base/constants/dnd/hp-assign-type';
import Role from '../../src/dnd/models/role';

describe('Test dnd role edit', function () {
    it('should change hp assign type', function () {
        let editRole = new Role();
        editRole.profession = ProfessionInfo.getProfession('FIGHTER');
        const state: IRoleState = {
            editRole: editRole,
            roles: [],
            selectedRoles: [],
            isFetchingRoles: false
        };
        const action = createDndChangeHpAssignTypeAction(HpAssignType.CUSTOM, 20);

        const expected = 20;
        const actual = role(state, action);
        expect(expected).to.equal(actual.editRole.maxHp);
    });
})