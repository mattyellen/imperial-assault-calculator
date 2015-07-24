import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
    diceCount: DiceCount;

    constructor() {
        this.diceCount = new DiceCount();
        this.resetAttackDice();
        this.resetDefenseDice();
    }

    addDie(type: string) {
        this.diceCount[type]++;
    }

    resetAttackDice() {
        this.diceCount.red = 0;
        this.diceCount.blue = 0;
        this.diceCount.green = 0;
        this.diceCount.yellow = 0;
    }

    resetDefenseDice() {
        this.diceCount.black = 0;
        this.diceCount.white = 0;
    }
}

export class DiceCount {
    red: Number;
    blue: Number;
    green: Number;
    yellow: Number;
    black: Number;
    white: Number;
}

