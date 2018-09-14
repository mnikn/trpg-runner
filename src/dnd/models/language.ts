import * as fs from 'fs';
import * as _ from 'lodash';

interface Language {
    id: number;
    label: string;
}

let languageDataPath = '/Users/zhengzhizhao/Local Documents/project/trpg-runner/src/dnd/resources/data/language.json';
export class LanguageInfo {

    public static readonly LANGUAGES : Language[] = JSON.parse(fs.readFileSync(languageDataPath).toString());
    
    public static getLanguage(id: number): Language {
        return _.find(LanguageInfo.LANGUAGES, {id: id});
    }
}