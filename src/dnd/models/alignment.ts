interface Alignment {
    id: number;
    label: string;
}

export class AlignmentInfo {
    public static readonly LAWFUL_GOOD: Alignment = {id: 1, label: '守序善良'};
    public static readonly LAWFUL_NEUTRAL: Alignment = {id: 2, label: '守序中立'};
    public static readonly LAWFUL_EVIL: Alignment = {id: 3, label: '守序邪恶'};
    
    private static readonly _alignmentIds: Map<number, Alignment> = new Map<number, Alignment>([
        [AlignmentInfo.LAWFUL_GOOD.id, AlignmentInfo.LAWFUL_GOOD],
        [AlignmentInfo.LAWFUL_NEUTRAL.id, AlignmentInfo.LAWFUL_NEUTRAL],
        [AlignmentInfo.LAWFUL_EVIL.id, AlignmentInfo.LAWFUL_EVIL]
    ]);
    
    public static getRace(id: number): Alignment {
        return AlignmentInfo._alignmentIds.get(id);
    }
}