interface Belief {
    id: number;
    label: string;
}

export class BeliefInfo {
    public static readonly HEIRONEOUS: Belief = {id: 1, label: '勇者之神-海若尼斯'};
    public static readonly MORADIN: Belief = {id: 2, label: '矮人之神-摩拉丁'};
    
    private static readonly _beliefIds: Map<number, Belief> = new Map<number, Belief>([
        [BeliefInfo.HEIRONEOUS.id, BeliefInfo.HEIRONEOUS],
        [BeliefInfo.MORADIN.id, BeliefInfo.MORADIN],
    ]);
    
    public static getBelief(id: number): Belief {
        return BeliefInfo._beliefIds.get(id);
    }
}