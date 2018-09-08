export abstract class Belief {
    abstract getId(): number;
    abstract getLabel(): string;
}

export class HeironeousBelief extends Belief {
    public static getId(): number {
        return 1;
    }
    public static getLabel(): string {
        return '勇者之神-海若尼斯';
    }
    getId(): number {
        return HeironeousBelief.getId();
    }
    getLabel(): string {
        return HeironeousBelief.getLabel();
    }
}

export class MoradinBelief extends Belief {
    public static getId(): number {
        return 2;
    }
    public static getLabel(): string {
        return '矮人之神-摩拉丁';
    }
    getId(): number {
        return MoradinBelief.getId();
    }
    getLabel(): string {
        return MoradinBelief.getLabel();
    }
}