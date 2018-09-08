export abstract class Ability {
    public number: number;
    constructor(number?: number) {
        this.number = number;
    }
    public getModifier(): number {
        return Math.round((this.number - 10) / 2);
    }
}

export class Strength extends Ability {

}

export class Dexterity extends Ability {

}

export class Constitution extends Ability {

}

export class Wisdom extends Ability {

}

export class Intelligence extends Ability {

}

export class Charisma extends Ability {

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