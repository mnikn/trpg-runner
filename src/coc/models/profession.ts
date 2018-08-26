export abstract class Profession {
    abstract getId(): number;
    abstract getName(): string;
}

export class Police extends Profession {
    getId(): number {
        return 1;
    }
    getName(): string {
        return '警察';
    }
}