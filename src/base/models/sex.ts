
export abstract class Sex {
    abstract getId(): number;
    abstract getLabel(): string;
}

export class Male extends Sex {
    public static getId(): number {
        return 1;
    }
    public static getLabel(): string {
        return '男';
    }
    getId(): number {
        return Male.getId();
    }
    getLabel(): string {
        return Male.getLabel();
    }
}

export class Female extends Sex {
    public static getId(): number {
        return 2;
    }
    public static getLabel(): string {
        return '女';
    }
    getId(): number {
        return Female.getId();
    }
    getLabel(): string {
        return Female.getLabel();
    }
}