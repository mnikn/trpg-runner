interface Sex {
    id: number;
    label: string;
}

export class SexInfo {
    public static readonly MALE: Sex = { id: 1, label: '男' };
    public static readonly FEMALE: Sex = { id: 2, label: '女' };

    private static readonly _sexIds: Map<number, Sex> = new Map<number, Sex>([
        [SexInfo.MALE.id, SexInfo.MALE],
        [SexInfo.FEMALE.id, SexInfo.FEMALE]
    ]);

    public static getSex(id: number): Sex {
        return SexInfo._sexIds.get(id);
    }
}