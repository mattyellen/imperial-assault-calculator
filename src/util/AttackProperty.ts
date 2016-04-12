export class AttackProperty {
    public damage: number = 0;
    public pierce: number = 0;
    public accuracy: number = 0;
}

export class SurgeAttackProperty extends AttackProperty {
    constructor(public surgeCost: number = 1) {
        super();
    }
}

export class FixedAttackProperty extends AttackProperty {
    public surge: number = 0;
}
