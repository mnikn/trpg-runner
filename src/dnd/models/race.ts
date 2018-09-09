interface Race {
    id: number;
    label: string;
}

export class RaceInfo {
    public static readonly HUMAN: Race = {id: 1, label: '人类'};
    public static readonly DRAWF: Race = {id: 2, label: '侏儒'};
    
    private static readonly _reaceIds: Map<number, Race> = new Map<number, Race>([
        [RaceInfo.HUMAN.id, RaceInfo.HUMAN],
        [RaceInfo.DRAWF.id, RaceInfo.DRAWF],
    ]);
    
    public static getRace(id: number): Race {
        return RaceInfo._reaceIds.get(id);
    }
}