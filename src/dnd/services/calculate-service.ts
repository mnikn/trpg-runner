import Role from "../models/role";
import { Skill } from "../models/skill";

export default class CalculateService {
    public static calculateHp(role: Role): number {
        return role.hpDiceNumber + role.abilities.con.getModifier();
    } 

    public static calculateArrorClass(role: Role): number {
        return 10 + role.abilities.dex.getModifier();
    }

    public static calculateAttackOrder(role: Role): number {
        return 0 + role.abilities.dex.getModifier();
    }

    public static calculateAttackRoll(role: Role): number {
        return 0 + role.abilities.dex.getModifier();
    }

    public static calculateRemainSkillPoint(role: Role): number {
        let total =  20 + role.abilities.int.getModifier();
        let assignedPoint = role.skills.reduce<number>((result, current) => result + current.assignedPoint, 0);
        return total - assignedPoint;
    }

    public static calculateTotalSkillPoint(skill: Skill): number {
        return skill.initialPoint + skill.assignedPoint;
    }
}