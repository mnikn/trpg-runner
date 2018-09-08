import { Abilities } from './ability';
import BaseRole from '../../base/models/base-role';
import { Shape } from './shape';
import { Language } from './language';
import { Belief } from './belief';
import { Race } from './race';
import { Alignment } from './alignment';
import { Skill, SKILLS } from './skill';

export default class Role extends BaseRole {
    abilities: Abilities;
    race: Race;
    alignment: Alignment;
    shape: Shape;
    languages: Language[];
    belief: Belief;
    skills: Skill[] = Object.keys(SKILLS).map(key => {
        let skills: any = SKILLS;
        let skill = skills[key];
        return new skill.constructor();
    });

    hpDiceNumber: number;
}