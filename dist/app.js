require('bootstrap');
require('bootstrap/css/bootstrap.css!');
var App = (function () {
    function App() {
        this.resetDice();
    }
    App.prototype.addDie = function (type) {
        this.diceCount[type]++;
    };
    App.prototype.resetDice = function () {
        this.diceCount = { red: 0, blue: 0, green: 0, yellow: 0 };
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