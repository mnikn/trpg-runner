interface Profession {
    id: number;
    label: string;
}

// export enum PROFESSIONS {
//     CLERIC = 3,
//     FIGHTER = 5
// }

export class ProfessionInfo {
    public static readonly CLERIC: Profession = {id: 3, label: '牧师'};
    public static readonly FIGHTER: Profession = {id: 5, label: '战士'};
    
    private static readonly _prefessionIds: Map<number, Profession> = new Map<number, Profession>([
        [ProfessionInfo.CLERIC.id, ProfessionInfo.CLERIC],
        [ProfessionInfo.FIGHTER.id, ProfessionInfo.FIGHTER],
    ]);
    
    public static getProfession(id: number): Profession {
        return ProfessionInfo._prefessionIds.get(id);
    }
}