import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {RollResult} from "RollResult";
import {PossibleRolls} from "PossibleRolls";
import {AttackProperty} from "AttackProperty";

export class App {
    diceCount: Dice<number>;
    surgeAbilities: AttackProperty[];
    fixedAttackAbility: AttackProperty;
    attack_type: string;
    range: number;
    block: number;

    private _dice: Dice<RollResult[]> = {
        red: [
            new RollResult(1, 0, 0, 0, 0, false, 1 / 6),
            new RollResult(2, 0, 0, 0, 0, false, 2 / 6),
            new RollResult(2, 1, 0, 0, 0, false, 1 / 6),
            new RollResult(3, 0, 0, 0, 0, false, 2 / 6)
        ],
        blue: [
            new RollResult(1, 0, 2, 0, 0, false, 1 / 6),
            new RollResult(0, 1, 2, 0, 0, false, 1 / 6),
            new RollResult(2, 0, 3, 0, 0, false, 1 / 6),
            new RollResult(1, 1, 3, 0, 0, false, 1 / 6),
            new RollResult(2, 0, 4, 0, 0, false, 1 / 6),
            new RollResult(1, 0, 5, 0, 0, false, 1 / 6)
        ],
        green: [
            new RollResult(0, 1, 1, 0, 0, false, 1 / 6),
            new RollResult(1, 1, 1, 0, 0, false, 1 / 6),
            new RollResult(2, 0, 1, 0, 0, false, 1 / 6),
            new RollResult(2, 0, 2, 0, 0, false, 1 / 6),
            new RollResult(1, 1, 2, 0, 0, false, 1 / 6),
            new RollResult(2, 0, 3, 0, 0, false, 1 / 6)
        ],
        yellow: [
            new RollResult(0, 1, 0, 0, 0, false, 1 / 6),
            new RollResult(1, 2, 0, 0, 0, false, 1 / 6),
            new RollResult(1, 1, 1, 0, 0, false, 1 / 6),
            new RollResult(2, 0, 1, 0, 0, false, 1 / 6),
            new RollResult(0, 1, 2, 0, 0, false, 1 / 6),
            new RollResult(1, 0, 2, 0, 0, false, 1 / 6)
        ],
        black: [
            new RollResult(0, 0, 0, 1, 0, false, 2 / 6),
            new RollResult(0, 0, 0, 2, 0, false, 2 / 6),
            new RollResult(0, 0, 0, 3, 0, false, 1 / 6),
            new RollResult(0, 0, 0, 0, 1, false, 1 / 6)
        ],
        white: [
            new RollResult(0, 0, 0, 0, 0, false, 1 / 6),
            new RollResult(0, 0, 0, 1, 0, false, 1 / 6),
            new RollResult(0, 0, 0, 0, 1, false, 1 / 6),
            new RollResult(0, 0, 0, 1, 1, false, 2 / 6),
            new RollResult(0, 0, 0, 0, 0, true, 1 / 6)
        ]
    }

    constructor() {
        this.diceCount = new Dice<number>();
        this.resetAttackDice();
        this.resetDefenseDice();

        this.surgeAbilities = [];
        this.attack_type = "melee";
        this.range = 0;
    }

    selectAttackType(type: string) {
        this.attack_type = type;
        if (type == "melee") {
            this.range = 0;
        } else if (type == "range") {
            this.range++;
        }
    }

    addAttackProperty(surge: AttackProperty, type: string) {
        surge[type]++;
    }

    addDie(type: string) {
        this.diceCount[type]++;
    }

    addBlock() {
        this.block++;
    }

    addNewSurge() {
        this.surgeAbilities.unshift(new AttackProperty());
    }

    removeSurge(surge: AttackProperty) {
        this.surgeAbilities = this.surgeAbilities.filter(p => p != surge);
    }

    resetAttackDice() {
        this.diceCount.red = 0;
        this.diceCount.blue = 0;
        this.diceCount.green = 0;
        this.diceCount.yellow = 0;
        this.fixedAttackAbility = {
            damage: 0,
            pierce: 0,
            accuracy: 0
        }
    }

    resetDefenseDice() {
        this.diceCount.black = 0;
        this.diceCount.white = 0;
        this.block = 0;
    }

    calculateResult() {
        let possibleRolls = new PossibleRolls();
        for (let dieColor in this.diceCount) {
            for (let i = 0; i < this.diceCount[dieColor]; i++) {
                possibleRolls.applyNewRoll(this._dice[dieColor]);
            }
        }

        possibleRolls.showProb();

        let damageResults = possibleRolls.getEffectiveDamage(this.surgeAbilities, this.fixedAttackAbility, this.range, this.block);
        console.log(damageResults);
    }
}

export class Dice<T> {
    red: T;
    blue: T;
    green: T;
    yellow: T;
    black: T;
    white: T;
}

