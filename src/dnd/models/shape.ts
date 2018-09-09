interface Shape {
    id: number;
    label: string;
}

export class ShapeInfo {
    public static readonly SMALL: Shape = {id: 1, label: '小型'};
    public static readonly MEDIUM: Shape = {id: 2, label: '中型'};
    
    private static readonly _shapeIds: Map<number, Shape> = new Map<number, Shape>([
        [ShapeInfo.SMALL.id, ShapeInfo.SMALL],
        [ShapeInfo.MEDIUM.id, ShapeInfo.MEDIUM]
    ]);
    
    public static getShape(id: number): Shape {
        return ShapeInfo._shapeIds.get(id);
    }
}