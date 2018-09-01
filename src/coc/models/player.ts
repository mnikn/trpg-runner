import { Sex } from './../../base/models/sex';
import { Unknow, Profession } from './profession';
export default class Player {
    id: number;
    name: string;
    sex: Sex;
    avtarUrl: string;
    profession: Profession = new Unknow();
}