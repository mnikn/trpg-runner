import AbilityInfos from './ability/ability-info';

export abstract class Skill {
    public assignedPoint: number = 0;
    public initialPoint: number = 0;

    abstract getId(): number;
    abstract getLabel(): string;
    abstract getKeyAbility(): number;
}

export class AppraiseSkill extends Skill {
    constructor() {
        super();
        this.initialPoint = 20;
    }

    getId(): number {
        return SKILLS.APPRAISE.id;
    }
    getLabel(): string {
        return SKILLS.APPRAISE.label;
    }
    getKeyAbility(): number {
        return SKILLS.APPRAISE.keyAbility;
    }
}

export class AnimalEmpathySkill extends Skill {
    constructor() {
        super();
    }

    getId(): number {
        return SKILLS.ANIMAL_EMPATHY.id;
    }
    getLabel(): string {
        return SKILLS.ANIMAL_EMPATHY.label;
    }
    getKeyAbility(): number {
        return SKILLS.ANIMAL_EMPATHY.keyAbility;
    }
}

export class HealSkill extends Skill {
    constructor() {
        super();
    }

    getId(): number {
        return SKILLS.HEAL.id;
    }
    getLabel(): string {
        return SKILLS.HEAL.label;
    }
    getKeyAbility(): number {
        return SKILLS.HEAL.keyAbility;
    }
}

export class ReligionKnowledgeSkill extends Skill {
    constructor() {
        super();
    }

    getId(): number {
        return SKILLS.RELIGION_KNOWLEDGE.id;
    }
    getLabel(): string {
        return SKILLS.RELIGION_KNOWLEDGE.label;
    }
    getKeyAbility(): number {
        return SKILLS.RELIGION_KNOWLEDGE.keyAbility;
    }
}

export class HistoryKnowledgeSkill extends Skill {
    constructor() {
        super();
    }

    getId(): number {
        return SKILLS.HISTORY_KNOWLEDGE.id;
    }
    getLabel(): string {
        return SKILLS.HISTORY_KNOWLEDGE.label;
    }
    getKeyAbility(): number {
        return SKILLS.HISTORY_KNOWLEDGE.keyAbility;
    }
}

export class ArcanaKnowledgeSkill extends Skill {
    constructor() {
        super();
    }

    getId(): number {
        return SKILLS.ARCANA_KNOWLEDGE.id;
    }
    getLabel(): string {
        return SKILLS.ARCANA_KNOWLEDGE.label;
    }
    getKeyAbility(): number {
        return SKILLS.ARCANA_KNOWLEDGE.keyAbility;
    }
}

export class ConcentrationSkill extends Skill {
    constructor() {
        super();
    }

    getId(): number {
        return SKILLS.CONCENTRATION.id;
    }
    getLabel(): string {
        return SKILLS.CONCENTRATION.label;
    }
    getKeyAbility(): number {
        return SKILLS.CONCENTRATION.keyAbility;
    }
}

// interface Skill {
//     id: number;
//     label: string;
//     keyAbility: number;
// }

// export class SkillInfo {
//     public static readonly APPRAISE: Skill =  { id: 1, label: '估价', keyAbility: AbilityInfo.INTELLIGENCE.id };
//     public static readonly ANIMAL_EMPATHY: Skill = { id: 2, label: '动物驯养', keyAbility: AbilityInfo.INTELLIGENCE.id };
//     public static readonly HEAL: Skill = { id: 3, label: '医疗', keyAbility: AbilityInfo.INTELLIGENCE.id };
//     public static readonly RELIGION_KNOWLEDGE: Skill = { id: 4, label: '宗教知识', keyAbility: AbilityInfo.INTELLIGENCE.id };
//     public static readonly HISTORY_KNOWLEDGE: Skill = { id: 5, label: '历史知识', keyAbility: AbilityInfo.INTELLIGENCE.id };
//     public static readonly ARCANA_KNOWLEDGE: Skill = { id: 6, label: '神秘知识', keyAbility: AbilityInfo.INTELLIGENCE.id };
//     public static readonly CONCENTRATION: Skill = { id: 7, label: '专注', keyAbility: AbilityInfo.WISDOM.id };
    
//     private static readonly _skillIds: Map<number, Skill> = new Map<number, Skill>([
//         [SkillInfo.APPRAISE.id, SkillInfo.APPRAISE],
//         [SkillInfo.ANIMAL_EMPATHY.id, SkillInfo.ANIMAL_EMPATHY],
//         [SkillInfo.HEAL.id, SkillInfo.HEAL],
//         [SkillInfo.RELIGION_KNOWLEDGE.id, SkillInfo.RELIGION_KNOWLEDGE],
//         [SkillInfo.HISTORY_KNOWLEDGE.id, SkillInfo.HISTORY_KNOWLEDGE],
//         [SkillInfo.ARCANA_KNOWLEDGE.id, SkillInfo.ARCANA_KNOWLEDGE],
//         [SkillInfo.CONCENTRATION.id, SkillInfo.CONCENTRATION]
//     ]);
    
//     public static getSkill(id: number): Skill {
//         return SkillInfo._skillIds.get(id);
//     }
// }

// interface SkillObject {
//     assignedPoint: number;
//     initialPoint: number;
// }

// export class Skills {
//     public appraise: SkillObject =  { assignedPoint: 0, initialPoint: 0 };
//     public animalEmpathy: SkillObject =  { assignedPoint: 0, initialPoint: 0 };
//     public heal: SkillObject =  { assignedPoint: 0, initialPoint: 0 };
//     public religionKnowledge: SkillObject =  { assignedPoint: 0, initialPoint: 0 };
//     public historyKnowledge: SkillObject =  { assignedPoint: 0, initialPoint: 0 };
//     public arcanaKnowledge: SkillObject =  { assignedPoint: 0, initialPoint: 0 };
//     public concentration: SkillObject =  { assignedPoint: 0, initialPoint: 0 };
// }

export const SKILLS = {
    APPRAISE: { id: 1, label: '估价', keyAbility: AbilityInfos.INTELLIGENCE.id, constructor: AppraiseSkill },
    ANIMAL_EMPATHY: { id: 2, label: '动物驯养', keyAbility: AbilityInfos.INTELLIGENCE.id, constructor: AnimalEmpathySkill },
    HEAL: { id: 3, label: '医疗', keyAbility: AbilityInfos.INTELLIGENCE.id, constructor: HealSkill },
    RELIGION_KNOWLEDGE: { id: 4, label: '宗教知识', keyAbility: AbilityInfos.INTELLIGENCE.id, constructor: ReligionKnowledgeSkill },
    HISTORY_KNOWLEDGE: { id: 5, label: '历史知识', keyAbility: AbilityInfos.INTELLIGENCE.id, constructor: HistoryKnowledgeSkill },
    ARCANA_KNOWLEDGE: { id: 6, label: '神秘知识', keyAbility: AbilityInfos.INTELLIGENCE.id, constructor: ArcanaKnowledgeSkill },
    CONCENTRATION: { id: 7, label: '专注', keyAbility: AbilityInfos.WISDOM.id, constructor: ConcentrationSkill },
}


