require('bootstrap');
require('bootstrap/css/bootstrap.css!');
var RollResult_1 = require("RollResult");
var PossibleRolls_1 = require("PossibleRolls");
var AttackProperty_1 = require("AttackProperty");
var App = (function () {
    function App() {
        this._dice = {
            red: [
                new RollResult_1.RollResult(1, 0, 0, 0, 0, false, 1 / 6),
                new RollResult_1.RollResult(2, 0, 0, 0, 0, false, 2 / 6),
                new RollResult_1.RollResult(2, 1, 0, 0, 0, false, 1 / 6),
                new RollResult_1.RollResult(3, 0, 0, 0, 0, false, 2 / 6)
            ],
            blue: [
                new RollResult_1.RollResult(1, 0, 2, 0, 0, false, 1 / 6),
                new RollResult_1.RollResult(0, 1, 2, 0, 0, false, 1 / 6),
                new RollResult_1.RollResult(2, 0, 3, 0, 0, false, 1 / 6),
                new RollResult_1.RollResult(1, 1, 3, 0, 0, false, 1 / 6),
                new RollResult_1.RollResult(2, 0, 4, 0, 0, false, 1 / 6),
                new RollResult_1.RollResult(1, 0, 5, 0, 0, false, 1 / 6)
            ],
            green: [
                new RollResult_1.RollResult(0, 1, 1, 0, 0, false, 1 / 6),
                new RollResult_1.RollResult(1, 1, 1, 0, 0, false, 1 / 6),
                new RollResult_1.RollResult(2, 0, 1, 0, 0, false, 1 / 6),
                new RollResult_1.RollResult(2, 0, 2, 0, 0, false, 1 / 6),
                new RollResult_1.RollResult(1, 1, 2, 0, 0, false, 1 / 6),
                new RollResult_1.RollResult(2, 0, 3, 0, 0, false, 1 / 6)
            ],
            yellow: [
                new RollResult_1.RollResult(0, 1, 0, 0, 0, false, 1 / 6),
                new RollResult_1.RollResult(1, 2, 0, 0, 0, false, 1 / 6),
                new RollResult_1.RollResult(1, 1, 1, 0, 0, false, 1 / 6),
                new RollResult_1.RollResult(2, 0, 1, 0, 0, false, 1 / 6),
                new RollResult_1.RollResult(0, 1, 2, 0, 0, false, 1 / 6),
                new RollResult_1.RollResult(1, 0, 2, 0, 0, false, 1 / 6)
            ],
            black: [
                new RollResult_1.RollResult(0, 0, 0, 1, 0, false, 2 / 6),
                new RollResult_1.RollResult(0, 0, 0, 2, 0, false, 2 / 6),
                new RollResult_1.RollResult(0, 0, 0, 3, 0, false, 1 / 6),
                new RollResult_1.RollResult(0, 0, 0, 0, 1, false, 1 / 6)
            ],
            white: [
                new RollResult_1.RollResult(0, 0, 0, 0, 0, false, 1 / 6),
                new RollResult_1.RollResult(0, 0, 0, 1, 0, false, 1 / 6),
                new RollResult_1.RollResult(0, 0, 0, 0, 1, false, 1 / 6),
                new RollResult_1.RollResult(0, 0, 0, 1, 1, false, 2 / 6),
                new RollResult_1.RollResult(0, 0, 0, 0, 0, true, 1 / 6)
            ]
        };
        this.diceCount = new Dice();
        this.resetAttackDice();
        this.resetDefenseDice();
        this.surgeAbilities = [];
        this.attack_type = "melee";
        this.range = 0;
    }
    App.prototype.selectAttackType = function (type) {
        this.attack_type = type;
        if (type == "melee") {
            this.range = 0;
        }
        else if (type == "range") {
            this.range++;
        }
    };
    App.prototype.addAttackProperty = function (surge, type) {
        surge[type]++;
    };
    App.prototype.addDie = function (type) {
        this.diceCount[type]++;
    };
    App.prototype.addBlock = function () {
        this.block++;
    };
    App.prototype.addNewSurge = function () {
        this.surgeAbilities.unshift(new AttackProperty_1.AttackProperty());
    };
    App.prototype.removeSurge = function (surge) {
        this.surgeAbilities = this.surgeAbilities.filter(function (p) { return p != surge; });
    };
    App.prototype.resetAttackDice = function () {
        this.diceCount.red = 0;
        this.diceCount.blue = 0;
        this.diceCount.green = 0;
        this.diceCount.yellow = 0;
        this.fixedAttackAbility = {
            damage: 0,
            pierce: 0,
            accuracy: 0
        };
    };
    App.prototype.resetDefenseDice = function () {
        this.diceCount.black = 0;
        this.diceCount.white = 0;
        this.block = 0;
    };
    App.prototype.calculateResult = function () {
        var possibleRolls = new PossibleRolls_1.PossibleRolls();
        for (var dieColor in this.diceCount) {
            for (var i = 0; i < this.diceCount[dieColor]; i++) {
                possibleRolls.applyNewRoll(this._dice[dieColor]);
            }
        }
        possibleRolls.showProb();
        var damageResults = possibleRolls.getEffectiveDamage(this.surgeAbilities, this.fixedAttackAbility, this.range, this.block);
        console.log(damageResults);
    };
    return App;
})();
exports.App = App;
var Dice = (function () {
    function Dice() {
    }
    return Dice;
})();
exports.Dice = Dice;
//# sourceMappingURL=app.js.map