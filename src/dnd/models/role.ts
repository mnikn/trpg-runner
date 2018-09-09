import { Abilities } from './ability';
import BaseRole from '../../base/models/base-role';
import { Skill, SKILLS } from './skill';

export default class Role extends BaseRole {
    abilities: Abilities;
    race: number;
    alignment: number;
    shape: number;
    languages: number[];
    belief: number;
    skills: Skill[] = Object.keys(SKILLS).map(key => {
        let skills: any = SKILLS;
        let skill = skills[key];
        return new skill.constructor();
    });

    hpDiceNumber: number;
}