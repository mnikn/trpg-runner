export abstract class Ability {
    public value: number;

    constructor(value?: number){
        this.value = value;
    }

    public getModifier(): number {
        return Math.round((this.value - 10) / 2);
    }
}