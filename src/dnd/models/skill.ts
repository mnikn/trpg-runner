import AbilityInfos from './ability/ability-info';
import * as _ from 'lodash';
import * as fs from 'fs';

export class Skill {
    public assignedPoint: number = 0;
    public initialPoint: number = 0;

    public id: number;
    public label: string;
    public keyAbility: number;

    constructor(skillInfo: any, assignedPoint: number = 0){
        this.id = skillInfo.id;
        this.label = skillInfo.label;
        this.keyAbility = skillInfo.keyAbility;
        this.assignedPoint = assignedPoint;
    }
}


let skillDataPath = '/Users/zhengzhizhao/Local Documents/project/trpg-runner/src/dnd/resources/data/skill.json';
export class SkillInfo {

    public static readonly SKILLS = JSON.parse(fs.readFileSync(skillDataPath).toString());

    public static getSkillById(id: number): any {
        return _.find(SkillInfo.SKILLS, {id: id});
    }

    public static createSkills(): Skill[] {
        let skills: Skill[] = [];
        _.forEach(SkillInfo.SKILLS, (skill: any) => {
            skills.push(new Skill(skill));
        });
        return skills;
    }

    public static getSkillInfos(): any[] {
        return SkillInfo.SKILLS;
    }
}


