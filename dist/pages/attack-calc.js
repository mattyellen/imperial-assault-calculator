"use strict";
require('bootstrap');
require('bootstrap/css/bootstrap.css!');
var PossibleRolls_1 = require("../util/PossibleRolls");
var AttackProperty_1 = require("../util/AttackProperty");
var Dice_1 = require("../util/Dice");
require("Chart.js");
require('jquery');
var fastclick_1 = require('fastclick');
require('bootstrap');
var AttackCalc = (function () {
    function AttackCalc() {
        this.diceCount = new Dice_1.Dice();
        this.resetAttackDice();
        this.resetDefenseDice();
        this.surgeAbilities = [];
        this.attack_type = "melee";
        this.range = 0;
    }
    AttackCalc.prototype.attached = function () {
        fastclick_1.attach(document.body);
        $('[data-toggle="tooltip"]').tooltip({ container: "body", delay: { show: 500 } });
    };
    AttackCalc.prototype.selectAttackType = function (type) {
        this.attack_type = type;
        if (type == "melee") {
            this.range = 0;
        }
        else if (type == "range") {
            this.range++;
        }
    };
    AttackCalc.prototype.addAttackProperty = function (surge, type) {
        surge[type]++;
    };
    AttackCalc.prototype.addDie = function (type) {
        this.diceCount[type]++;
    };
    AttackCalc.prototype.addDefenseProperty = function (type) {
        this.fixedDefenseAbility[type]++;
    };
    AttackCalc.prototype.addNewSurge = function (surgeCost) {
        this.surgeAbilities.push(new AttackProperty_1.SurgeAttackProperty(surgeCost));
    };
    AttackCalc.prototype.removeSurge = function (surge) {
        this.surgeAbilities = this.surgeAbilities.filter(function (p) { return p != surge; });
    };
    AttackCalc.prototype.resetAttackDice = function () {
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
    AttackCalc.prototype.resetDefenseDice = function () {
        this.diceCount.black = 0;
        this.diceCount.white = 0;
        this.fixedDefenseAbility = {
            block: 0,
            evade: 0
        };
    };
    AttackCalc.prototype.calculateResult = function () {
        var possibleRolls = new PossibleRolls_1.PossibleRolls();
        possibleRolls.applyAllRolls(this.diceCount);
        //possibleRolls.showProb();
        var damageResults = possibleRolls.getEffectiveDamage(this.surgeAbilities, this.fixedAttackAbility, this.fixedDefenseAbility, this.range);
        this.probabilityChart.addChartData(damageResults);
    };
    return AttackCalc;
}());
exports.AttackCalc = AttackCalc;
//# sourceMappingURL=attack-calc.js.map