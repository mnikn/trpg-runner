export abstract class Ability {
    public number: number;
    constructor(number?: number) {
        this.number = number;
    }
    public getModifier(): number {
        return Math.round((this.number - 10) / 2);
    }

    abstract getLabel(): string;
}

export class Strength extends Ability {
    getLabel(): string {
        return Strength.getLabel();
    }
    public static getLabel(): string {
        return '力量';
    }
}

export class Dexterity extends Ability {
    getLabel(): string {
        return Dexterity.getLabel();
    }
    public static getLabel(): string {
        return '敏捷';
    }
}

export class Constitution extends Ability {
    getLabel(): string {
        return Constitution.getLabel();
    }
    public static getLabel(): string {
        return '体质';
    }
}

export class Wisdom extends Ability {
    getLabel(): string {
        return Wisdom.getLabel();
    }
    public static getLabel(): string {
        return '感知';
    }
}

export class Intelligence extends Ability {
    getLabel(): string {
        return Intelligence.getLabel();
    }
    public static getLabel(): string {
        return '智力';
    }
}

export class Charisma extends Ability {
    getLabel(): string {
        return Charisma.getLabel();
    }
    public static getLabel(): string {
        return '魅力';
    }
}

export class Abilities {
    str: Strength;
    dex: Dexterity;
    con: Constitution;
    wid: Wisdom;
    int: Intelligence;
    cha: Charisma;

    constructor(str?: number, dex?: number, con?: number,  int?: number, wis?: number, cha?: number){
        this.str = new Strength(str);
        this.con = new Constitution(con);
        this.dex = new Dexterity(dex);
        this.int = new Intelligence(int);
        this.wid = new Wisdom(wis);
        this.cha = new Charisma(cha);
    }
}