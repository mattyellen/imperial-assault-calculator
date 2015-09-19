import {RollResult} from "./RollResult";
import {AttackProperty} from "./AttackProperty";
import {DefenseProperty} from "./DefenseProperty";
import {Dice} from "./Dice";

export class PossibleRolls {

    private _dice: Dice<RollResult[]> = {
        red: [
            new RollResult(1, 0, 0, 0, 0, false, 1 / 6),
            new RollResult(2, 0, 0, 0, 0, false, 2 / 6),
            new RollResult(2, 1, 0, 0, 0, false, 1 / 6),
            new RollResult(3, 0, 0, 0, 0, false, 2 / 6)
        ],
        blue: [
            new RollResult(1, 0, 2, 0, 0, false, 1 / 6),
            new RollResult(0, 1, 2, 0, 0, false, 1 / 6),
            new RollResult(2, 0, 3, 0, 0, false, 1 / 6),
            new RollResult(1, 1, 3, 0, 0, false, 1 / 6),
            new RollResult(2, 0, 4, 0, 0, false, 1 / 6),
            new RollResult(1, 0, 5, 0, 0, false, 1 / 6)
        ],
        green: [
            new RollResult(0, 1, 1, 0, 0, false, 1 / 6),
            new RollResult(1, 1, 1, 0, 0, false, 1 / 6),
            new RollResult(2, 0, 1, 0, 0, false, 1 / 6),
            new RollResult(2, 0, 2, 0, 0, false, 1 / 6),
            new RollResult(1, 1, 2, 0, 0, false, 1 / 6),
            new RollResult(2, 0, 3, 0, 0, false, 1 / 6)
        ],
        yellow: [
            new RollResult(0, 1, 0, 0, 0, false, 1 / 6),
            new RollResult(1, 2, 0, 0, 0, false, 1 / 6),
            new RollResult(1, 1, 1, 0, 0, false, 1 / 6),
            new RollResult(2, 0, 1, 0, 0, false, 1 / 6),
            new RollResult(0, 1, 2, 0, 0, false, 1 / 6),
            new RollResult(1, 0, 2, 0, 0, false, 1 / 6)
        ],
        black: [
            new RollResult(0, 0, 0, 1, 0, false, 2 / 6),
            new RollResult(0, 0, 0, 2, 0, false, 2 / 6),
            new RollResult(0, 0, 0, 3, 0, false, 1 / 6),
            new RollResult(0, 0, 0, 0, 1, false, 1 / 6)
        ],
        white: [
            new RollResult(0, 0, 0, 0, 0, false, 1 / 6),
            new RollResult(0, 0, 0, 1, 0, false, 1 / 6),
            new RollResult(0, 0, 0, 0, 1, false, 1 / 6),
            new RollResult(0, 0, 0, 1, 1, false, 2 / 6),
            new RollResult(0, 0, 0, 0, 0, true, 1 / 6)
        ]
    }


    private _possibleRolls: { [key: string]: RollResult } = {};



    constructor() {
        let initRollResult = new RollResult();
        this._possibleRolls[initRollResult.getHashCode()] = initRollResult;
    }

    applyAllRolls(diceCount: Dice<number>) {
        for (let dieColor in diceCount) {
            for (let i = 0; i < diceCount[dieColor]; i++) {
                this.applyNewRoll(this._dice[dieColor]);
            }
        }
    }

    private applyNewRoll(newRoll: RollResult[]) {
        let newPossibleRolls: { [key: string]: RollResult } = {};
        for (let prKey in this._possibleRolls) {
            for (let rollResult of newRoll) {
                let newRollResult = this._possibleRolls[prKey].apply(rollResult);
                let key = newRollResult.getHashCode();
                if (newPossibleRolls[key] === undefined) {
                    newPossibleRolls[key] = newRollResult;
                } else {
                    newPossibleRolls[key].probability += newRollResult.probability;
                }
            }
        }

        this._possibleRolls = newPossibleRolls;
    }

    showProb() {
        let total = 0;
        for (let prKey in this._possibleRolls) {
            console.log("%s: %f", prKey, this._possibleRolls[prKey].probability);
            total += this._possibleRolls[prKey].probability;
        }

        console.log("total: %f", total);
    }

    getEffectiveDamage(surgeAbilities: AttackProperty[], fixedAttackAbility: AttackProperty, fixedDefenseAbility: DefenseProperty, needRange: number): { [damage: number]: number } {
        let effectiveDamage: { [damage: number]: number } = {};

        for (let prKey in this._possibleRolls) {
            let rollResult = this._possibleRolls[prKey];
            if (rollResult.miss) {
                this.updateValue(effectiveDamage, 0, rollResult.probability);
                continue;
            }

            let calcDamageResult = new RollResult();
            for (let key in rollResult) {
                calcDamageResult[key] = rollResult[key];
            }

            let surgeAbilitiesToUse: AttackProperty[] = [];
            for (let surge of surgeAbilities) {
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
                var bestSurgeEffect: SurgeResult = undefined;

                for (let surge of surgeAbilitiesToUse) {
                    let surgeEffect = this.calculateSurgeEffect(calcDamageResult, surge, needRange);
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
                    for (let surge of surgeAbilitiesToUse) {
                        let surgeEffect = this.calculateSurgeEffect(calcDamageResult, surge, needRange);
                        if ((bestSurgeEffect === undefined) ||
                            (surgeEffect.remainingRange < bestSurgeEffect.remainingRange)) {
                            bestSurgeEffect = surgeEffect;
                        }
                    }

                    //if (bestSurgeEffect !== undefined)
                    //    console.log("found surge effect for improved range: %O => remaining %d", bestSurgeEffect, bestSurgeEffect.remainingRange);
                }



                if (bestSurgeEffect !== undefined) {
                    calcDamageResult.damage += bestSurgeEffect.surge.damage;
                    calcDamageResult.block -= Math.min(bestSurgeEffect.surge.pierce, calcDamageResult.block);
                    calcDamageResult.range += bestSurgeEffect.surge.accuracy

                    calcDamageResult.surge--;
                    surgeAbilitiesToUse = surgeAbilitiesToUse.filter(s => s != bestSurgeEffect.surge);
                }
            }

            if (calcDamageResult.range < needRange) {
                this.updateValue(effectiveDamage, 0, calcDamageResult.probability);
            } else {
                this.updateValue(effectiveDamage, Math.max(calcDamageResult.damage - calcDamageResult.block, 0), calcDamageResult.probability);
            }
        }

        return effectiveDamage;
    }

    private updateValue(dict: { [key: number]: number }, key: number, value: number) {
        if (dict[key] === undefined) {
            dict[key] = 0;
        }
        dict[key] += value;
    }

    private calculateSurgeEffect(rollResult: RollResult, surge: AttackProperty, needRange: number): SurgeResult {
        let result = new SurgeResult();
        result.surge = surge;

        result.remainingRange = Math.max(needRange - (rollResult.range + surge.accuracy), 0);
        let effectOfPierce = Math.min(surge.pierce, rollResult.block);
        result.effectiveDamage = effectOfPierce + surge.damage;

        return result;
    }
}

export class SurgeResult {
    effectiveDamage: number;
    remainingRange: number;
    surge: AttackProperty;
}
