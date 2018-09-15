import { Alignment } from './alignment';
import { Shape } from './shape';
import { Belief } from './belief';
import BaseRole from '../../base/models/base-role';
import { Skill } from './skill';
import { Abilities } from './ability/abilities';
import { Profession } from './profession';
import { Language } from './language';
import { Race } from './race';

export default class Role extends BaseRole {
    abilities: Abilities;
    race: Race;
    alignment: Alignment;
    shape: Shape;
    belief: Belief;
    level: number;
    profession: Profession;
    skills: Skill[];
    languages: Language[];

    hpDiceNumbers: number[] = [];
}