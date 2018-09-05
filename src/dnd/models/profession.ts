export abstract class Profession {
    abstract getId(): number;
    abstract getName(): string;
}

export class Unknow extends Profession {
    getId(): number {
        return -1;
    }
    getName(): string {
        return '未知';
    }
}