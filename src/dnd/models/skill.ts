import AbilityInfos from './ability/ability-info';
import * as _ from 'lodash';

export abstract class Skill {
    public assignedPoint: number = 0;
    public initialPoint: number = 0;

    public abstract id: number;
    public abstract label: string;
    public abstract keyAbility: number;

    constructor(assignedPoint?: number){
        this.assignedPoint = assignedPoint;
    }

    // public abstract get id(): number;
    // public abstract get label(): string;
    // public abstract get keyAbility(): number;
}

export class AppraiseSkill extends Skill {
    public id: number = SkillInfo.APPRAISE.id;
    public label: string = SkillInfo.APPRAISE.label;
    public keyAbility: number = SkillInfo.APPRAISE.keyAbility;
    constructor(assignedPoint?: number) {
        super(assignedPoint);
    }
}

export class AnimalEmpathySkill extends Skill {
    public id: number = SkillInfo.ANIMAL_EMPATHY.id;
    public label: string = SkillInfo.ANIMAL_EMPATHY.label;
    public keyAbility: number = SkillInfo.ANIMAL_EMPATHY.keyAbility;
    constructor(assignedPoint?: number) {
        super(assignedPoint);
    }
}

export class HealSkill extends Skill {
    public id: number = SkillInfo.HEAL.id;
    public label: string = SkillInfo.HEAL.label;
    public keyAbility: number = SkillInfo.HEAL.keyAbility;
    constructor(assignedPoint?: number) {
        super(assignedPoint);
    }
}

export class ReligionKnowledgeSkill extends Skill {
    public id: number = SkillInfo.RELIGION_KNOWLEDGE.id;
    public label: string = SkillInfo.RELIGION_KNOWLEDGE.label;
    public keyAbility: number = SkillInfo.RELIGION_KNOWLEDGE.keyAbility;
    constructor(assignedPoint?: number) {
        super(assignedPoint);
    }
}

export class HistoryKnowledgeSkill extends Skill {
    public id: number = SkillInfo.HISTORY_KNOWLEDGE.id;
    public label: string = SkillInfo.HISTORY_KNOWLEDGE.label;
    public keyAbility: number = SkillInfo.HISTORY_KNOWLEDGE.keyAbility;
    constructor(assignedPoint?: number) {
        super(assignedPoint);
    }
}

export class ArcanaKnowledgeSkill extends Skill {
    public id: number = SkillInfo.ARCANA_KNOWLEDGE.id;
    public label: string = SkillInfo.ARCANA_KNOWLEDGE.label;
    public keyAbility: number = SkillInfo.ARCANA_KNOWLEDGE.keyAbility;
    constructor(assignedPoint?: number) {
        super(assignedPoint);
    }
}

export class ConcentrationSkill extends Skill {
    public id: number = SkillInfo.CONCENTRATION.id;
    public label: string = SkillInfo.CONCENTRATION.label;
    public keyAbility: number = SkillInfo.CONCENTRATION.keyAbility;
    constructor(assignedPoint?: number) {
        super(assignedPoint);
    }
}

// export const SKILLS = {
//     APPRAISE: { id: 1, label: '估价', keyAbility: AbilityInfos.INTELLIGENCE.id, constructor: AppraiseSkill },
//     ANIMAL_EMPATHY: { id: 2, label: '动物驯养', keyAbility: AbilityInfos.INTELLIGENCE.id, constructor: AnimalEmpathySkill },
//     HEAL: { id: 3, label: '医疗', keyAbility: AbilityInfos.INTELLIGENCE.id, constructor: HealSkill },
//     RELIGION_KNOWLEDGE: { id: 4, label: '宗教知识', keyAbility: AbilityInfos.INTELLIGENCE.id, constructor: ReligionKnowledgeSkill },
//     HISTORY_KNOWLEDGE: { id: 5, label: '历史知识', keyAbility: AbilityInfos.INTELLIGENCE.id, constructor: HistoryKnowledgeSkill },
//     ARCANA_KNOWLEDGE: { id: 6, label: '神秘知识', keyAbility: AbilityInfos.INTELLIGENCE.id, constructor: ArcanaKnowledgeSkill },
//     CONCENTRATION: { id: 7, label: '专注', keyAbility: AbilityInfos.WISDOM.id, constructor: ConcentrationSkill },
// }

export class SkillInfo {
    
    public static readonly APPRAISE = { id: 1, label: '估价', keyAbility: AbilityInfos.INTELLIGENCE.id, constructor: AppraiseSkill };
    public static readonly ANIMAL_EMPATHY = { id: 2, label: '动物驯养', keyAbility: AbilityInfos.INTELLIGENCE.id, constructor: AnimalEmpathySkill };
    public static readonly HEAL = { id: 3, label: '医疗', keyAbility: AbilityInfos.INTELLIGENCE.id, constructor: HealSkill };
    public static readonly RELIGION_KNOWLEDGE = { id: 4, label: '宗教知识', keyAbility: AbilityInfos.INTELLIGENCE.id, constructor: ReligionKnowledgeSkill };
    public static readonly HISTORY_KNOWLEDGE = { id: 5, label: '历史知识', keyAbility: AbilityInfos.INTELLIGENCE.id, constructor: HistoryKnowledgeSkill };
    public static readonly ARCANA_KNOWLEDGE = { id: 6, label: '神秘知识', keyAbility: AbilityInfos.INTELLIGENCE.id, constructor: ArcanaKnowledgeSkill };
    public static readonly CONCENTRATION = { id: 7, label: '专注', keyAbility: AbilityInfos.WISDOM.id, constructor: ConcentrationSkill };

    private static readonly _skillIds: Map<number, any> = new Map<number, any>([
        [SkillInfo.APPRAISE.id, SkillInfo.APPRAISE],
        [SkillInfo.ANIMAL_EMPATHY.id, SkillInfo.ANIMAL_EMPATHY],
        [SkillInfo.HEAL.id, SkillInfo.HEAL],
        [SkillInfo.RELIGION_KNOWLEDGE.id, SkillInfo.RELIGION_KNOWLEDGE],
        [SkillInfo.HISTORY_KNOWLEDGE.id, SkillInfo.HISTORY_KNOWLEDGE],
        [SkillInfo.ARCANA_KNOWLEDGE.id, SkillInfo.ARCANA_KNOWLEDGE],
        [SkillInfo.CONCENTRATION.id, SkillInfo.CONCENTRATION],
    ]);

    public static getSkillById(id: number): any {
        return SkillInfo._skillIds.get(id);
    }

    public static createSkills(): Skill[] {
        let skills: Skill[] = [];
        SkillInfo._skillIds.forEach(skill => {
            skills.push(new skill.constructor())
        });
        return skills;
    }

    public static getSkillInfos(): any[] {
        let skills: any[] = [];
        SkillInfo._skillIds.forEach(skill => {
            skills.push(skill);
        });
        return skills;
    }
}


