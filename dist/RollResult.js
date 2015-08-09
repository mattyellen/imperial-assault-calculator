var RollResult = (function () {
    function RollResult(damage, surge, range, block_damage, block_surge, miss, probability) {
        if (damage === void 0) { damage = 0; }
        if (surge === void 0) { surge = 0; }
        if (range === void 0) { range = 0; }
        if (block_damage === void 0) { block_damage = 0; }
        if (block_surge === void 0) { block_surge = 0; }
        if (miss === void 0) { miss = false; }
        if (probability === void 0) { probability = 1; }
        this.damage = damage;
        this.surge = surge;
        this.range = range;
        this.block_damage = block_damage;
        this.block_surge = block_surge;
        this.miss = miss;
        this.probability = probability;
    }
    RollResult.prototype.getHashCode = function () {
        return this.damage + "|" + this.surge + "|" + this.range + "|" + this.block_damage + "|" + this.block_surge + "|" + this.miss;
    };
    RollResult.prototype.apply = function (rollResult) {
        return new RollResult(this.damage + rollResult.damage, this.surge + rollResult.surge, this.range + rollResult.range, this.block_damage + rollResult.block_damage, this.block_surge + rollResult.block_surge, this.miss || rollResult.miss, this.probability * rollResult.probability);
    };
    return RollResult;
})();
exports.RollResult = RollResult;
//# sourceMappingURL=RollResult.js.map