import Role from "../models/role";
import { Skill } from "../models/skill";
import * as _ from 'lodash';
import AbilityInfo from "../models/ability";

export default class CalculateService {
    public static calculateHp(role: Role): number {
        return _.sum(role.hpDiceNumbers) + role.getCon().getModifier();
    }

    public static calculateArrorClass(role: Role): number {
        return 10 + role.getDex().getModifier();
    }

    public static calculateAttackOrder(role: Role): number {
        return 0 + role.getDex().getModifier();
    }

    public static calculateAttackRoll(role: Role): number {
        return 0 + role.getDex().getModifier();
    }

    public static calculateRemainSkillPoint(role: Role): number {
        let total =
            (role.profession.skillPointIncrement + role.getInt().getModifier()) * 4 +
            (role.profession.skillPointIncrement + role.getInt().getModifier()) * (role.level - 1);

        let assignedPoint = role.skills.reduce<number>((result, current) => result + current.assignedPoint, 0);
        return total - assignedPoint;
    }

    public static calculateTotalSkillPoint(skill: Skill): number {
        return skill.initialPoint + skill.assignedPoint;
    }
}