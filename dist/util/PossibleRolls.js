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
            for (var _i = 0; _i < newRoll.length; _i++) {
                var rollResult = newRoll[_i];
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
    PossibleRolls.prototype.getEffectiveDamage = function (surgeAbilities, fixedAttackAbility, fixedDefenseAbility, needRange) {
        var effectiveDamage = {};
        for (var prKey in this._possibleRolls) {
            var rollResult = this._possibleRolls[prKey];
            if (rollResult.miss) {
                this.updateValue(effectiveDamage, 0, rollResult.probability);
                continue;
            }
            var calcDamageResult = new RollResult_1.RollResult();
            for (var key in rollResult) {
                calcDamageResult[key] = rollResult[key];
            }
            var surgeAbilitiesToUse = [];
            for (var _i = 0; _i < surgeAbilities.length; _i++) {
                var surge = surgeAbilities[_i];
                surgeAbilitiesToUse.push(surge);
            }
            calcDamageResult.surge += fixedAttackAbility.surge;
            calcDamageResult.surge -= fixedDefenseAbility.evade;
            calcDamageResult.surge -= calcDamageResult.evade;
            calcDamageResult.damage += fixedAttackAbility.damage;
            calcDamageResult.range += fixedAttackAbility.accuracy;
            calcDamageResult.block += fixedDefenseAbility.block;
            calcDamageResult.block -= Math.min(fixedAttackAbility.pierce, calcDamageResult.block);
            //console.log("%s: %f", prKey, this._possibleRolls[prKey].probability);
            while ((calcDamageResult.surge > 0) && (surgeAbilitiesToUse.length > 0)) {
                var bestSurgeEffect = undefined;
                for (var _a = 0; _a < surgeAbilitiesToUse.length; _a++) {
                    var surge = surgeAbilitiesToUse[_a];
                    var surgeEffect = this.calculateSurgeEffect(calcDamageResult, surge, needRange);
                    if ((surgeEffect.remainingRange == 0) &&
                        ((bestSurgeEffect === undefined) ||
                            (surgeEffect.effectiveDamage > bestSurgeEffect.effectiveDamage))) {
                        bestSurgeEffect = surgeEffect;
                    }
                }
                //if (bestSurgeEffect !== undefined)
                //    console.log("found surge effect that hits: %O => +%d", bestSurgeEffect, bestSurgeEffect.effectiveDamage);
                if (bestSurgeEffect === undefined) {
                    //Failed to fund a surge to use...  none must give enough range.
                    //Just find the one with the best range.
                    for (var _b = 0; _b < surgeAbilitiesToUse.length; _b++) {
                        var surge = surgeAbilitiesToUse[_b];
                        var surgeEffect = this.calculateSurgeEffect(calcDamageResult, surge, needRange);
                        if ((bestSurgeEffect === undefined) ||
                            (surgeEffect.remainingRange < bestSurgeEffect.remainingRange)) {
                            bestSurgeEffect = surgeEffect;
                        }
                    }
                }
                if (bestSurgeEffect !== undefined) {
                    calcDamageResult.damage += bestSurgeEffect.surge.damage;
                    calcDamageResult.block -= Math.min(bestSurgeEffect.surge.pierce, calcDamageResult.block);
                    calcDamageResult.range += bestSurgeEffect.surge.accuracy;
                    calcDamageResult.surge--;
                    surgeAbilitiesToUse = surgeAbilitiesToUse.filter(function (s) { return s != bestSurgeEffect.surge; });
                }
            }
            if (calcDamageResult.range < needRange) {
                this.updateValue(effectiveDamage, 0, calcDamageResult.probability);
            }
            else {
                this.updateValue(effectiveDamage, Math.max(calcDamageResult.damage - calcDamageResult.block, 0), calcDamageResult.probability);
            }
        }
        return effectiveDamage;
    };
    PossibleRolls.prototype.updateValue = function (dict, key, value) {
        if (dict[key] === undefined) {
            dict[key] = 0;
        }
        dict[key] += value;
    };
    PossibleRolls.prototype.calculateSurgeEffect = function (rollResult, surge, needRange) {
        var result = new SurgeResult();
        result.surge = surge;
        result.remainingRange = Math.max(needRange - (rollResult.range + surge.accuracy), 0);
        var effectOfPierce = Math.min(surge.pierce, rollResult.block);
        result.effectiveDamage = effectOfPierce + surge.damage;
        return result;
    };
    return PossibleRolls;
})();
exports.PossibleRolls = PossibleRolls;
var SurgeResult = (function () {
    function SurgeResult() {
    }
    return SurgeResult;
})();
exports.SurgeResult = SurgeResult;
//# sourceMappingURL=PossibleRolls.js.map