export default class DiceService {
    public static trollSixDice(): number {
        return this.trollDice(6);  
    }

    public static trollTwentyDice(): number {
        return this.trollDice(20);  
    }

    public static trollHundredDice(): number {
        return this.trollDice(100);  
    }

    public static trollDice(diceType: number) {
        var range = diceType - 1;  
        var rand = Math.random();  
        return(1 + Math.round(range * rand));    
    }
}