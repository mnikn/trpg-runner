interface Language {
    id: number;
    label: string;
}

export class LanguageInfo {
    public static readonly COMMON: Language = {id: 1, label: '通用语'};
    
    private static readonly _languageIds: Map<number, Language> = new Map<number, Language>([
        [LanguageInfo.COMMON.id, LanguageInfo.COMMON]
    ]);
    
    public static getRace(id: number): Language {
        return LanguageInfo._languageIds.get(id);
    }
}