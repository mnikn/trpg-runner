import Strength from "./strength";
import Dexterity from "./dexterity";
import Constitution from "./constitution";
import Intelligence from "./intelligence";
import Wisdom from "./wisdom";
import Charisma from "./charisma";
import { Ability } from "./base/ability";

export class Abilities {
    public str: Ability;
    public dex: Ability;
    public con: Ability;
    public wis: Ability;
    public int: Ability;
    public cha: Ability;

    constructor(str?: number, dex?: number, con?: number, int?: number, wis?: number, cha?: number) {
        this.str = new Strength(str);
        this.dex = new Dexterity(dex);
        this.con = new Constitution(con);
        this.int = new Intelligence(int);
        this.wis = new Wisdom(wis);
        this.cha = new Charisma(cha);
    }
}