interface Ability {
    id: number,
    label: string;
}

export class AbilityInfo {
    public static readonly STRENGTH: Ability = { id: 1, label: '力量' };
    public static readonly DEXTERITY: Ability = { id: 2, label: '敏捷' };
    public static readonly CONSTITUTION: Ability = { id: 3, label: '体质' };
    public static readonly WISDOM: Ability = { id: 4, label: '感知' };
    public static readonly INTELLIGENCE: Ability = { id: 5, label: '智力' };
    public static readonly CHARISMA: Ability = { id: 6, label: '魅力' };

    private static readonly _abilityIds: Map<number, Ability> = new Map<number, Ability>([
        [AbilityInfo.STRENGTH.id, AbilityInfo.STRENGTH],
        [AbilityInfo.DEXTERITY.id, AbilityInfo.DEXTERITY],
        [AbilityInfo.CONSTITUTION.id, AbilityInfo.CONSTITUTION],
        [AbilityInfo.WISDOM.id, AbilityInfo.WISDOM],
        [AbilityInfo.INTELLIGENCE.id, AbilityInfo.INTELLIGENCE],
        [AbilityInfo.CHARISMA.id, AbilityInfo.CHARISMA]
    ]);

    public static getAbility(id: number): Ability {
        return AbilityInfo._abilityIds.get(id);
    }
}

export class Abilities {
    str: number;
    dex: number;
    con: number;
    wis: number;
    int: number;
    cha: number;

    constructor(str?: number, dex?: number, con?: number, int?: number, wis?: number, cha?: number) {
        this.str = str;
        this.con = con;
        this.dex = dex;
        this.int = int;
        this.wis = wis;
        this.cha = cha;
    }

    public getModifier(abilityType: number): number {
        let abilityValue = 0;
        switch (abilityType) {
            case AbilityInfo.STRENGTH.id:
                abilityValue = this.str;
                break;
            case AbilityInfo.DEXTERITY.id:
                abilityValue = this.dex;
                break;
            case AbilityInfo.CONSTITUTION.id:
                abilityValue = this.con;
                break;
            case AbilityInfo.INTELLIGENCE.id:
                abilityValue = this.int;
                break;
            case AbilityInfo.WISDOM.id:
                abilityValue = this.wis;
                break;
            case AbilityInfo.CHARISMA.id:
                abilityValue = this.cha;
                break;
        }
        return Math.round((abilityValue - 10) / 2);
    }
}