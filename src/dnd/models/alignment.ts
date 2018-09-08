export abstract class Alignment {
    abstract getId(): number;
    abstract getLabel(): string;
}

export abstract class Lawful extends Alignment {
}

export class LawfulGood extends Lawful {
    public static getId(): number {
        return 1;
    }
    public static getLabel(): string {
        return '守序善良';
    }
    getId(): number {
        return LawfulGood.getId();
    }
    getLabel(): string {
        return LawfulGood.getLabel();
    }
}

export class LawfulNeutral extends Lawful {
    public static getId(): number {
        return 2;
    }
    public static getLabel(): string {
        return '守序中立';
    }
    getId(): number {
        return LawfulNeutral.getId();
    }
    getLabel(): string {
        return LawfulNeutral.getLabel();
    }
}

export class LawfulEvil extends Lawful {
    public static getId(): number {
        return 3;
    }
    public static getLabel(): string {
        return '守序邪恶';
    }
    getId(): number {
        return LawfulEvil.getId();
    }
    getLabel(): string {
        return LawfulEvil.getLabel();
    }
}