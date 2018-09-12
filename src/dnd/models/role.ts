import BaseRole from '../../base/models/base-role';
import { Skill, SkillInfo } from './skill';
import { Abilities } from './ability/abilities';

export default class Role extends BaseRole {
    abilities: Abilities;
    race: number;
    alignment: number;
    shape: number;
    languages: number[];
    belief: number;
    skills: Skill[] = SkillInfo.createSkills();

    hpDiceNumber: number = 0;
}