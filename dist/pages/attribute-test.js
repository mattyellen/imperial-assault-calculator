"use strict";
require('bootstrap');
require('bootstrap/css/bootstrap.css!');
var Dice_1 = require("../util/Dice");
var PossibleRolls_1 = require("../util/PossibleRolls");
require('jquery');
require("Chart.js");
var AttributeTest = (function () {
    function AttributeTest() {
        this.diceCount = new Dice_1.Dice();
        this.resetDice();
    }
    AttributeTest.prototype.attached = function () {
        $('[data-toggle="tooltip"]').tooltip({ container: "body", delay: { show: 500 } });
    };
    AttributeTest.prototype.resetDice = function () {
        this.diceCount.red = 0;
        this.diceCount.blue = 0;
        this.diceCount.green = 0;
        this.diceCount.yellow = 0;
    };
    AttributeTest.prototype.addDie = function (type) {
        this.diceCount[type]++;
    };
    AttributeTest.prototype.setChartDisplay = function (val) {
        var chartContainer = $("#chartContainer").get(0);
        if (chartContainer !== undefined) {
            chartContainer.style.display = val ? "block" : "none";
        }
    };
    AttributeTest.prototype.calculateResult = function () {
        var possibleRolls = new PossibleRolls_1.PossibleRolls();
        possibleRolls.applyAllRolls(this.diceCount);
        this.probabilityChart.addChartData(possibleRolls.getTotalSurges());
    };
    return AttributeTest;
}());
exports.AttributeTest = AttributeTest;
//# sourceMappingURL=attribute-test.js.map