import BaseProfession from "../../base/models/base-profession";

export class Cleric extends BaseProfession {
    public static getId(): number {
        return 3;
    }
    public static getLabel(): string {
        return '牧师';
    }
    getId(): number {
        return Cleric.getId();
    }
    getLabel(): string {
        return Cleric.getLabel();
    }
}

export class Fighter extends BaseProfession {
    public static getId(): number {
        return 5;
    }
    public static getLabel(): string {
        return '战士';
    }
    getId(): number {
        return Fighter.getId();
    }
    getLabel(): string {
        return Fighter.getLabel();
    }
}