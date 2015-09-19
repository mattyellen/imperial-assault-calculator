import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {PossibleRolls} from "../util/PossibleRolls";
import {AttackProperty} from "../util/AttackProperty";
import {DefenseProperty} from "../util/DefenseProperty";
import {Dice} from "../util/Dice";
import "Chart.js";
import 'jquery';
import {attach as attachFastClick} from 'fastclick';
import 'bootstrap';

export class AttackCalc {
    diceCount: Dice<number>;

    surgeAbilities: AttackProperty[];
    fixedAttackAbility: AttackProperty;
    fixedDefenseAbility: DefenseProperty;
    attack_type: string;
    range: number;
    legend: LegendInfo[];

    private _chart: LinearInstance;
    private _datasets: any[];
    private _chartMaxDamage;


    constructor() {
        this.diceCount = new Dice<number>();
        this.resetAttackDice();
        this.resetDefenseDice();

        this.surgeAbilities = [];
        this.attack_type = "melee";
        this.range = 0;

        this.resetChart();
    }

    attached() {
        attachFastClick(document.body);
        $('[data-toggle="tooltip"]').tooltip({container: "body", delay: { show: 500 } });
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

    resetChart() {
        this._chartMaxDamage = 0;
        this._currentColor = 0;
        this._datasets = [];
        this.legend = [];
        this.setChartDisplay(false);

        if (this._chart !== undefined) {
            this._chart.destroy();
        }
    }

    private setChartDisplay(val: boolean) {
        let chartContainer = $("#chartContainer").get(0);
        if (chartContainer !== undefined) {
            chartContainer.style.display = val ? "block" : "none";
        }
    }

    private _currentColor: number = 0;
    private _colors: any[][] = [
        [220, 0, 0, "white"],
        [0, 220, 0, "white"],
        [0, 0, 220, "white"],
        [220, 220, 0, "black"],
        [0, 220, 220, "black"],
        [220, 0, 220, "white"]
    ]

    getColor(alpha: number): string {
        let i = this._currentColor % this._colors.length;
        let color = this._colors[i];
        let r = color[0];
        let g = color[1];
        let b = color[2];
        return `rgba(${r},${g},${b},${alpha})`;
    }

    getTextColor(): string {
        let i = this._currentColor % this._colors.length;
        let color = this._colors[i];
        return color[3];
    }

    calculateResult() {
        let possibleRolls = new PossibleRolls();
        possibleRolls.applyAllRolls(this.diceCount);

        //possibleRolls.showProb();

        let damageResults = possibleRolls.getEffectiveDamage(this.surgeAbilities, this.fixedAttackAbility, this.fixedDefenseAbility, this.range);
        //console.log(damageResults);

        let minValue = 1;
        let maxValue = this._chartMaxDamage;
        for (let v in damageResults) {
            maxValue = Math.max(maxValue, v);
        }

        this._chartMaxDamage = maxValue;

        if (maxValue == 0) {
            return;
        }

        this.setChartDisplay(true);

        let labels = [];
        let data = [];
        let cumulativeProb = 0;
        for (let i = maxValue; i >= minValue; i--) {
            cumulativeProb += (damageResults[i] === undefined) ? 0 : damageResults[i];
            data.unshift(Math.round(cumulativeProb*100));
            labels.unshift(i);
        }

        this._datasets.push({
            label: "Cumulative Damage Probablity",
            fillColor: this.getColor(0.2),
            strokeColor: this.getColor(1),
            pointColor: this.getColor(1),
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: this.getColor(1),
            data: data
        });

        for (let ds of this._datasets) {
            while (ds.data.length < maxValue) {
                ds.data.push(0);
            }
        } 

        if (this.legend.length < 12) {
            this.legend.push({
                value: this._datasets.length,
                color: this.getColor(1),
                textColor: this.getTextColor()
            });
        }

        this._currentColor++;

        if (this._chart !== undefined) {
            this._chart.destroy();
        }

        let ctx = <CanvasRenderingContext2D>(<HTMLCanvasElement>$("#damageChart").get(0)).getContext("2d");
        this._chart = new Chart(ctx).Line({
            labels: labels,
            datasets: this._datasets
        });
    }
}

export class LegendInfo {
    value: number;
    color: string;
    textColor: string;
}


