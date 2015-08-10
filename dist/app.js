require('bootstrap');
require('bootstrap/css/bootstrap.css!');
var RollResult_1 = require("RollResult");
var PossibleRolls_1 = require("PossibleRolls");
var AttackProperty_1 = require("AttackProperty");
require("Chart.js");
require('jquery');
var fastclick_1 = require('fastclick');
require('bootstrap');
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
    App.prototype.attached = function () {
        fastclick_1.attach(document.body);
        $('[data-toggle="tooltip"]').tooltip({ delay: { show: 500 } });
    };
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
    App.prototype.addDefenseProperty = function (type) {
        this.fixedDefenseAbility[type]++;
    };
    App.prototype.addNewSurge = function () {
        this.surgeAbilities.push(new AttackProperty_1.AttackProperty());
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
            accuracy: 0,
            surge: 0
        };
    };
    App.prototype.resetDefenseDice = function () {
        this.diceCount.black = 0;
        this.diceCount.white = 0;
        this.fixedDefenseAbility = {
            block: 0,
            evade: 0
        };
    };
    App.prototype.calculateResult = function () {
        var possibleRolls = new PossibleRolls_1.PossibleRolls();
        for (var dieColor in this.diceCount) {
            for (var i = 0; i < this.diceCount[dieColor]; i++) {
                possibleRolls.applyNewRoll(this._dice[dieColor]);
            }
        }
        //possibleRolls.showProb();
        var damageResults = possibleRolls.getEffectiveDamage(this.surgeAbilities, this.fixedAttackAbility, this.fixedDefenseAbility, this.range);
        console.log(damageResults);
        var minValue = 1;
        var maxValue = 0;
        for (var v in damageResults) {
            maxValue = Math.max(maxValue, v);
        }
        var labels = [];
        var data = [];
        var cumulativeProb = 0;
        for (var i = maxValue; i >= minValue; i--) {
            cumulativeProb += (damageResults[i] === undefined) ? 0 : damageResults[i];
            data.unshift(Math.round(cumulativeProb * 100));
            labels.unshift(i);
        }
        if (this._chart !== undefined) {
            this._chart.destroy();
        }
        var ctx = $("#damageChart").get(0).getContext("2d");
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