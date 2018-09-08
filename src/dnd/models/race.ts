export abstract class Race {
    abstract getId(): number;
    abstract getLabel(): string;
}

export class Human extends Race {
    public static getId(): number {
        return 1;
    }
    public static getLabel(): string {
        return '人类';
    }
    getId(): number {
        return Human.getId();
    }
    getLabel(): string {
        return Human.getLabel();
    }
}

export class Drawf extends Race {
    public static getId(): number {
        return 2;
    }
    public static getLabel(): string {
        return '侏儒';
    }
    getId(): number {
        return Drawf.getId();
    }
    getLabel(): string {
        return Drawf.getLabel();
    }
}