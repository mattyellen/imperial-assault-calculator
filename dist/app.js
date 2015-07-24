require('bootstrap');
require('bootstrap/css/bootstrap.css!');
var App = (function () {
    function App() {
        this.diceCount = new DiceCount();
        this.resetAttackDice();
        this.resetDefenseDice();
    }
    App.prototype.addDie = function (type) {
        this.diceCount[type]++;
    };
    App.prototype.resetAttackDice = function () {
        this.diceCount.red = 0;
        this.diceCount.blue = 0;
        this.diceCount.green = 0;
        this.diceCount.yellow = 0;
    };
    App.prototype.resetDefenseDice = function () {
        this.diceCount.black = 0;
        this.diceCount.white = 0;
    };
    return App;
})();
exports.App = App;
var DiceCount = (function () {
    function DiceCount() {
    }
    return DiceCount;
})();
exports.DiceCount = DiceCount;
//# sourceMappingURL=app.js.map