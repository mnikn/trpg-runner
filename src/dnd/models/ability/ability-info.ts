interface AbilityInfo {
    id: number,
    label: string;
}

export default class AbilityInfos {
    public static readonly STRENGTH: AbilityInfo = { id: 1, label: '力量' };
    public static readonly DEXTERITY: AbilityInfo = { id: 2, label: '敏捷' };
    public static readonly CONSTITUTION: AbilityInfo = { id: 3, label: '体质' };
    public static readonly WISDOM: AbilityInfo = { id: 4, label: '感知' };
    public static readonly INTELLIGENCE: AbilityInfo = { id: 5, label: '智力' };
    public static readonly CHARISMA: AbilityInfo = { id: 6, label: '魅力' };

    private static readonly _abilityIds: Map<number, AbilityInfo> = new Map<number, AbilityInfo>([
        [AbilityInfos.STRENGTH.id, AbilityInfos.STRENGTH],
        [AbilityInfos.DEXTERITY.id, AbilityInfos.DEXTERITY],
        [AbilityInfos.CONSTITUTION.id, AbilityInfos.CONSTITUTION],
        [AbilityInfos.WISDOM.id, AbilityInfos.WISDOM],
        [AbilityInfos.INTELLIGENCE.id, AbilityInfos.INTELLIGENCE],
        [AbilityInfos.CHARISMA.id, AbilityInfos.CHARISMA]
    ]);

    public static getAbility(id: number): AbilityInfo {
        return AbilityInfos._abilityIds.get(id);
    }
}