import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {RollResult} from "RollResult";
import {PossibleRolls} from "PossibleRolls";
import {AttackProperty} from "AttackProperty";
import {DefenseProperty} from "DefenseProperty";
import "Chart.js";
import 'jquery';

export class App {
    diceCount: Dice<number>;
    surgeAbilities: AttackProperty[];
    fixedAttackAbility: AttackProperty;
    fixedDefenseAbility: DefenseProperty;
    attack_type: string;
    range: number;

    private _chart: LinearInstance;

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

    addDefenseProperty(type: string) {
        this.fixedDefenseAbility[type]++;
    }

    addNewSurge() {
        this.surgeAbilities.push(new AttackProperty());
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
            accuracy: 0,
            surge: 0
        }
    }

    resetDefenseDice() {
        this.diceCount.black = 0;
        this.diceCount.white = 0;
        this.fixedDefenseAbility = {
            block: 0,
            evade: 0
        };
    }

    calculateResult() {
        let possibleRolls = new PossibleRolls();
        for (let dieColor in this.diceCount) {
            for (let i = 0; i < this.diceCount[dieColor]; i++) {
                possibleRolls.applyNewRoll(this._dice[dieColor]);
            }
        }

        possibleRolls.showProb();

        let damageResults = possibleRolls.getEffectiveDamage(this.surgeAbilities, this.fixedAttackAbility, this.fixedDefenseAbility, this.range);
        console.log(damageResults);

        let minValue = 1;
        let maxValue = 0;
        for (let v in damageResults) {
            maxValue = Math.max(maxValue, v);
        }

        let labels = [];
        let data = [];
        let cumulativeProb = 0;
        for (let i = maxValue; i >= minValue; i--) {
            cumulativeProb += (damageResults[i] === undefined) ? 0 : damageResults[i];
            data.unshift(Math.round(cumulativeProb*100));
            labels.unshift(i);
        }

        if (this._chart !== undefined) {
            this._chart.destroy();
        }

        let ctx = <CanvasRenderingContext2D>(<HTMLCanvasElement>$("#damageChart").get(0)).getContext("2d");
        this._chart = new Chart(ctx).Line({
            labels: labels,
            datasets: [
                {
                    label: "Cumulative Damage Probablity",
                    fillColor: "rgba(220,0,0,0.2)",
                    strokeColor: "rgba(220,0,0,1)",
                    pointColor: "rgba(220,0,0,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,0,0,1)",
                    data: data
                }
            ]
        });
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

