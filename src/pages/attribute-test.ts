import {Dice} from "../util/Dice";
import {PossibleRolls} from "../util/PossibleRolls";

export class AttributeTest {
    diceCount: Dice<number>;
    private _chart: LinearInstance;

    constructor() {
        this.diceCount = new Dice<number>();
        this.resetDice();
    }

    resetDice() {
        this.diceCount.red = 0;
        this.diceCount.blue = 0;
        this.diceCount.green = 0;
        this.diceCount.yellow = 0;
    }

    addDie(type: string) {
        this.diceCount[type]++;
    }

    resetChart() {
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

    calculateResult() {
        let possibleRolls = new PossibleRolls();
        possibleRolls.applyAllRolls(this.diceCount);
    }
}