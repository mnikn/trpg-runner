export abstract class Language {
    abstract getId(): number;
    abstract getLabel(): string;
}

export class CommonLanguage extends Language {
    public static getId(): number {
        return 1;
    }
    public static getLabel(): string {
        return '通用语';
    }
    getId(): number {
        return CommonLanguage.getId();
    }
    getLabel(): string {
        return CommonLanguage.getLabel();
    }
}