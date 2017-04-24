"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RollResult_1 = require("./RollResult");
var PossibleRolls = (function () {
    function PossibleRolls() {
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
        this._possibleRolls = {};
        var initRollResult = new RollResult_1.RollResult();
        this._possibleRolls[initRollResult.getHashCode()] = initRollResult;
    }
    PossibleRolls.prototype.applyAllRolls = function (diceCount) {
        for (var dieColor in diceCount) {
            for (var i = 0; i < diceCount[dieColor]; i++) {
                this.applyNewRoll(this._dice[dieColor]);
            }
        }
    };
    PossibleRolls.prototype.applyNewRoll = function (newRoll) {
        var newPossibleRolls = {};
        for (var prKey in this._possibleRolls) {
            for (var _i = 0, newRoll_1 = newRoll; _i < newRoll_1.length; _i++) {
                var rollResult = newRoll_1[_i];
                var newRollResult = this._possibleRolls[prKey].apply(rollResult);
                var key = newRollResult.getHashCode();
                if (newPossibleRolls[key] === undefined) {
                    newPossibleRolls[key] = newRollResult;
                }
                else {
                    newPossibleRolls[key].probability += newRollResult.probability;
                }
            }
        }
        this._possibleRolls = newPossibleRolls;
    };
    PossibleRolls.prototype.showProb = function () {
        var total = 0;
        for (var prKey in this._possibleRolls) {
            console.log("%s: %f", prKey, this._possibleRolls[prKey].probability);
            total += this._possibleRolls[prKey].probability;
        }
        console.log("total: %f", total);
    };
    PossibleRolls.prototype.getTotalSurges = function () {
        var totalSurges = {};
        for (var prKey in this._possibleRolls) {
            var rollResult = this._possibleRolls[prKey];
            this.updateValue(totalSurges, rollResult.surge, rollResult.probability);
        }
        return totalSurges;
    };
    PossibleRolls.prototype.getEffectiveDamage = function (surgeAbilities, fixedAttackAbility, fixedDefenseAbility, needRange) {
        var effectiveDamage = {};
        var surgeSetCache = {};
        for (var prKey in this._possibleRolls) {
            var rollResult = this._possibleRolls[prKey];
            if (rollResult.miss) {
                this.updateValue(effectiveDamage, 0, rollResult.probability);
                continue;
            }
            var calcDamageResult = Object.assign({}, rollResult);
            calcDamageResult.surge += fixedAttackAbility.surge;
            calcDamageResult.surge -= fixedDefenseAbility.evade;
            calcDamageResult.surge -= calcDamageResult.evade;
            calcDamageResult.damage += fixedAttackAbility.damage;
            calcDamageResult.range += fixedAttackAbility.accuracy;
            calcDamageResult.block += fixedDefenseAbility.block;
            calcDamageResult.block -= Math.min(fixedAttackAbility.pierce, calcDamageResult.block);
            //console.log("%s: %f", prKey, this._possibleRolls[prKey].probability);
            var surgeSets = surgeSetCache[calcDamageResult.surge];
            if (surgeSets === undefined) {
                surgeSets = this.getAllPossibleSurgeAbilitySets(surgeAbilities, calcDamageResult.surge);
                surgeSetCache[calcDamageResult.surge] = surgeSets;
            }
            //for (let ss of surgeSets) {
            //    console.log(ss.map(s => s.damage).join(","));
            //}
            var maxDamage = this.getDamage(calcDamageResult, needRange);
            for (var _i = 0, surgeSets_1 = surgeSets; _i < surgeSets_1.length; _i++) {
                var surgeSet = surgeSets_1[_i];
                var checkCalcDamageResult = Object.assign({}, calcDamageResult);
                for (var _a = 0, surgeSet_1 = surgeSet; _a < surgeSet_1.length; _a++) {
                    var surgeAbility = surgeSet_1[_a];
                    this.applySurgeAbility(checkCalcDamageResult, surgeAbility);
                }
                maxDamage = Math.max(maxDamage, this.getDamage(checkCalcDamageResult, needRange));
            }
            //console.log("maxDamage: %d", maxDamage);
            this.updateValue(effectiveDamage, maxDamage, calcDamageResult.probability);
        }
        return effectiveDamage;
    };
    PossibleRolls.prototype.getDamage = function (rollResult, needRange) {
        if (rollResult.range < needRange) {
            return 0;
        }
        else {
            return Math.max(rollResult.damage - rollResult.block, 0);
        }
    };
    PossibleRolls.prototype.applySurgeAbility = function (rollResult, surgeAbility) {
        rollResult.damage += surgeAbility.damage;
        rollResult.block = Math.max(rollResult.block - surgeAbility.pierce, 0);
        rollResult.range += surgeAbility.accuracy;
    };
    PossibleRolls.prototype.getAllPossibleSurgeAbilitySets = function (availableSurgeAbilities, surgeCount, initialSurgeAbilities) {
        if (initialSurgeAbilities === void 0) { initialSurgeAbilities = []; }
        var results = [];
        var localAvailableSurgeAbilities = availableSurgeAbilities.slice();
        var checkSurge;
        while ((checkSurge = localAvailableSurgeAbilities.shift()) !== undefined) {
            if (checkSurge.surgeCost <= surgeCount) {
                Array.prototype.push.apply(results, this.getAllPossibleSurgeAbilitySets(localAvailableSurgeAbilities, surgeCount - checkSurge.surgeCost, initialSurgeAbilities.concat([checkSurge])));
            }
        }
        if (results.length === 0) {
            return [initialSurgeAbilities];
        }
        else {
            return results;
        }
    };
    PossibleRolls.prototype.updateValue = function (dict, key, value) {
        if (dict[key] === undefined) {
            dict[key] = 0;
        }
        dict[key] += value;
    };
    return PossibleRolls;
}());
exports.PossibleRolls = PossibleRolls;
//# sourceMappingURL=PossibleRolls.js.map