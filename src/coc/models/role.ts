import { Unknow, Profession } from './profession';
export default class Role {
    id: number;
    name: string;
    sex: number;
    avtarUrl: string;
    profession: Profession = new Unknow();
}