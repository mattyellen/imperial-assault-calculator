import { SurgeAttackProperty, FixedAttackProperty } from "../util/AttackProperty";
import { DefenseProperty } from "../util/DefenseProperty";
import { Dice } from "../util/Dice";
export class Config {
    constructor() {
        this.diceCount = {
            red: 0,
            blue: 0,
            green: 0,
            yellow: 0,
            black: 0,
            white: 0
        }
        this.surgeAbilities = [];
        this.fixedAttackAbility = {
            damage: 0,
            pierce: 0,
            accuracy: 0,
            surge: 0
        }
        this.fixedDefenseAbility = {
            block: 0,
            evade: 0
        };
        this.attack_type = "melee";
        this.range = 0;
    }

    name: string;

    diceCount: Dice<number>;
    surgeAbilities: SurgeAttackProperty[];
    fixedAttackAbility: FixedAttackProperty;
    fixedDefenseAbility: DefenseProperty;
    attack_type: string;
    range: number;

    hasAttackConfig: boolean;
    hasDefenseConfig: boolean;
}