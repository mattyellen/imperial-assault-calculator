import {RollResult} from "./RollResult";
import {FixedAttackProperty, SurgeAttackProperty} from "./AttackProperty";
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

    getTotalSurges(): { [surges: number]: number } {
        let totalSurges: { [surges: number]: number } = {};

        for (let prKey in this._possibleRolls) {
            let rollResult = this._possibleRolls[prKey];
            this.updateValue(totalSurges, rollResult.surge, rollResult.probability);
        }

        return totalSurges;
    }

    getEffectiveDamage(surgeAbilities: SurgeAttackProperty[], fixedAttackAbility: FixedAttackProperty, fixedDefenseAbility: DefenseProperty, needRange: number): { [damage: number]: number } {
        let effectiveDamage: { [damage: number]: number } = {};
        let surgeSetCache: { [surgeCount: number]: SurgeAttackProperty[][] } = {};

        for (let prKey in this._possibleRolls) {
            let rollResult = this._possibleRolls[prKey];
            if (rollResult.miss) {
                this.updateValue(effectiveDamage, 0, rollResult.probability);
                continue;
            }

            let calcDamageResult: RollResult = Object.assign({}, rollResult);
            calcDamageResult.surge += fixedAttackAbility.surge;
            calcDamageResult.surge -= fixedDefenseAbility.evade;
            calcDamageResult.surge -= calcDamageResult.evade;
            calcDamageResult.damage += fixedAttackAbility.damage;
            calcDamageResult.range += fixedAttackAbility.accuracy;
            calcDamageResult.block += fixedDefenseAbility.block;
            calcDamageResult.block -= Math.min(fixedAttackAbility.pierce, calcDamageResult.block);

            //console.log("%s: %f", prKey, this._possibleRolls[prKey].probability);

            let surgeSets = surgeSetCache[calcDamageResult.surge];
            if (surgeSets === undefined) {
                surgeSets = this.getAllPossibleSurgeAbilitySets(surgeAbilities, calcDamageResult.surge);
                surgeSetCache[calcDamageResult.surge] = surgeSets;
            }
                
            //for (let ss of surgeSets) {
            //    console.log(ss.map(s => s.damage).join(","));
            //}

            let maxDamage = this.getDamage(calcDamageResult, needRange);
            for (let surgeSet of surgeSets) {
                let checkCalcDamageResult: RollResult = Object.assign({}, calcDamageResult);
                for (let surgeAbility of surgeSet) {
                    this.applySurgeAbility(checkCalcDamageResult, surgeAbility);
                }

                maxDamage = Math.max(maxDamage, this.getDamage(checkCalcDamageResult, needRange));
            }
            //console.log("maxDamage: %d", maxDamage);

            this.updateValue(effectiveDamage, maxDamage, calcDamageResult.probability);
        }

        return effectiveDamage;
    }

    private getDamage(rollResult: RollResult, needRange: number): number {
        if (rollResult.range < needRange) {
            return 0;
        } else {
            return Math.max(rollResult.damage - rollResult.block, 0);
        }
    }

    private applySurgeAbility(rollResult: RollResult, surgeAbility: SurgeAttackProperty): void {
        rollResult.damage += surgeAbility.damage;
        rollResult.block = Math.max(rollResult.block - surgeAbility.pierce, 0);
        rollResult.range += surgeAbility.accuracy;
    }

    private getAllPossibleSurgeAbilitySets(availableSurgeAbilities: SurgeAttackProperty[],
                                           surgeCount: number,
                                           initialSurgeAbilities: SurgeAttackProperty[] = []): SurgeAttackProperty[][] {
        let results: SurgeAttackProperty[][] = [];
        let localAvailableSurgeAbilities = availableSurgeAbilities.slice();

        let checkSurge: SurgeAttackProperty;
        while ((checkSurge = localAvailableSurgeAbilities.shift()) !== undefined) {
            if (checkSurge.surgeCost <= surgeCount) {
                Array.prototype.push.apply(
                    results,
                    this.getAllPossibleSurgeAbilitySets(
                        localAvailableSurgeAbilities,
                        surgeCount - checkSurge.surgeCost,
                        initialSurgeAbilities.concat([checkSurge]))
                );
            }
        }

        if (results.length === 0) {
            return [initialSurgeAbilities];
        }
        else {
            return results;
        }
    }

    private updateValue(dict: { [key: number]: number }, key: number, value: number) {
        if (dict[key] === undefined) {
            dict[key] = 0;
        }
        dict[key] += value;
    }
}
