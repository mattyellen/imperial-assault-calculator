var RollResult = (function () {
    function RollResult(damage, surge, range, block, evade, miss, probability) {
        if (damage === void 0) { damage = 0; }
        if (surge === void 0) { surge = 0; }
        if (range === void 0) { range = 0; }
        if (block === void 0) { block = 0; }
        if (evade === void 0) { evade = 0; }
        if (miss === void 0) { miss = false; }
        if (probability === void 0) { probability = 1; }
        this.damage = damage;
        this.surge = surge;
        this.range = range;
        this.block = block;
        this.evade = evade;
        this.miss = miss;
        this.probability = probability;
    }
    RollResult.prototype.getHashCode = function () {
        return this.damage + "|" + this.surge + "|" + this.range + "|" + this.block + "|" + this.evade + "|" + this.miss;
    };
    RollResult.prototype.apply = function (rollResult) {
        return new RollResult(this.damage + rollResult.damage, this.surge + rollResult.surge, this.range + rollResult.range, this.block + rollResult.block, this.evade + rollResult.evade, this.miss || rollResult.miss, this.probability * rollResult.probability);
    };
    return RollResult;
})();
exports.RollResult = RollResult;
//# sourceMappingURL=RollResult.js.map