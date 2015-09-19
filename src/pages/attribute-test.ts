import {Dice} from "../util/Dice";
import {PossibleRolls} from "../util/PossibleRolls";
import {ProbabilityChart} from "../components/probability-chart";

export class AttributeTest {
    diceCount: Dice<number>;

    probabilityChart: ProbabilityChart;

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

    private setChartDisplay(val: boolean) {
        let chartContainer = $("#chartContainer").get(0);
        if (chartContainer !== undefined) {
            chartContainer.style.display = val ? "block" : "none";
        }
    }

    calculateResult() {
        let possibleRolls = new PossibleRolls();
        possibleRolls.applyAllRolls(this.diceCount);

        this.probabilityChart.addChartData(possibleRolls.getTotalSurges());
    }
}