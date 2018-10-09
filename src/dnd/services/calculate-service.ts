import { HpAssignType } from './../../base/constants/dnd/hp-assign-type';
import Role from "../models/role";
import { Skill } from "../models/skill";
import * as _ from 'lodash';
import DiceService from '../../base/services/dice-service';

export default class CalculateService {

    public static calculateHp(role: Role, hpValue?: number) {
        let hp = role.maxHp;
        let assignType = role.hpAssignType;
        let diceType = role.profession.hpDiceType;
        let level = role.level;
        if (assignType === HpAssignType.FULL_PERFESSION_HP_DICE) {
            hp = diceType * level + role.getCon().getModifier();
        } else if (assignType === HpAssignType.HALF_PERFESSION_HP_DICE) {
            hp = diceType * level / 2 + role.getCon().getModifier();
        } else if (assignType === HpAssignType.RADOM_PERFESSION_HP_DICE) {
            hp = _.reduce(_.range(level), (result) => result + DiceService.trollDice(diceType)) + role.getCon().getModifier();
        } else if (hpValue) {
            hp = hpValue;
        }
        return hp;
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