import Role from "../../dnd/models/role";

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
}