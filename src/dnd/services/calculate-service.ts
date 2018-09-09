import { AbilityInfo } from '../models/ability';
import Role from "../models/role";
import { Skill } from "../models/skill";

export default class CalculateService {
    public static calculateHp(role: Role): number {
        return role.hpDiceNumber + role.abilities.getModifier(AbilityInfo.STRENGTH.id);
    } 

    public static calculateArrorClass(role: Role): number {
        return 10 + role.abilities.getModifier(AbilityInfo.DEXTERITY.id);
    }

    public static calculateAttackOrder(role: Role): number {
        return 0 + role.abilities.getModifier(AbilityInfo.DEXTERITY.id);
    }

    public static calculateAttackRoll(role: Role): number {
        return 0 + role.abilities.getModifier(AbilityInfo.DEXTERITY.id);
    }

    public static calculateRemainSkillPoint(role: Role): number {
        let total =  20 + role.abilities.getModifier(AbilityInfo.INTELLIGENCE.id);
        let assignedPoint = role.skills.reduce<number>((result, current) => result + current.assignedPoint, 0);
        return total - assignedPoint;
    }

    public static calculateTotalSkillPoint(skill: Skill): number {
        return skill.initialPoint + skill.assignedPoint;
    }
}