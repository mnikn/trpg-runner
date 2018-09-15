import BaseRole from '../../base/models/base-role';
import { Skill } from './skill';
import { Abilities } from './ability/abilities';
import { Profession } from './profession';

export default class Role extends BaseRole {
    abilities: Abilities;
    race: number;
    alignment: number;
    shape: number;
    languages: number[];
    belief: number;
    level: number;
    profession: Profession;
    skills: Skill[];

    hpDiceNumber: number = 0;
}