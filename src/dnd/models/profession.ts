import * as fs from 'fs';
import * as _ from 'lodash';

interface Profession {
    id: number;
    label: string;
}

let professionDataPath = '/Users/zhengzhizhao/Local Documents/project/trpg-runner/src/dnd/resources/data/profession.json';
export class ProfessionInfo {

    public static readonly PROFESSIONS : Profession[] = JSON.parse(fs.readFileSync(professionDataPath).toString());
    
    public static getProfession(id: number): Profession {
        return _.find(ProfessionInfo.PROFESSIONS, {id: id});
    }
}