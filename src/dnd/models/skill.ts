import { Ability, Intelligence, Wisdom } from "./ability";

export abstract class Skill {
    public assignedPoint: number = 0;
    public initialPoint: number = 0;

    abstract getId(): number;
    abstract getLabel(): string;
    abstract getKeyAbility(): Ability;
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
    getKeyAbility(): Ability {
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
    getKeyAbility(): Ability {
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
    getKeyAbility(): Ability {
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
    getKeyAbility(): Ability {
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
    getKeyAbility(): Ability {
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
    getKeyAbility(): Ability {
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
    getKeyAbility(): Ability {
        return SKILLS.CONCENTRATION.keyAbility;
    }
}

export const SKILLS = {
    APPRAISE: { id: 1, label: '估价', keyAbility: new Intelligence(), constructor: AppraiseSkill },
    ANIMAL_EMPATHY: { id: 2, label: '动物驯养', keyAbility: new Intelligence(), constructor: AnimalEmpathySkill },
    HEAL: { id: 3, label: '医疗', keyAbility: new Intelligence(), constructor: HealSkill },
    RELIGION_KNOWLEDGE: { id: 4, label: '宗教知识', keyAbility: new Intelligence(), constructor: ReligionKnowledgeSkill },
    HISTORY_KNOWLEDGE: { id: 5, label: '历史知识', keyAbility: new Intelligence(), constructor: HistoryKnowledgeSkill },
    ARCANA_KNOWLEDGE: { id: 6, label: '神秘知识', keyAbility: new Intelligence(), constructor: ArcanaKnowledgeSkill },
    CONCENTRATION: { id: 7, label: '专注', keyAbility: new Wisdom(), constructor: ConcentrationSkill },
}


