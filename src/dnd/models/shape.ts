export abstract class Shape {
    abstract getId(): number;
    abstract getLabel(): string;
}

export class SmallShape extends Shape {
    public static getId(): number {
        return 1;
    }
    public static getLabel(): string {
        return '小型';
    }
    getId(): number {
        return SmallShape.getId();
    }
    getLabel(): string {
        return SmallShape.getLabel();
    }
}

export class MediumShape extends Shape {
    public static getId(): number {
        return 2;
    }
    public static getLabel(): string {
        return '中型';
    }
    getId(): number {
        return MediumShape.getId();
    }
    getLabel(): string {
        return MediumShape.getLabel();
    }
}