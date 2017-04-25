"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefenseProperty = (function () {
    function DefenseProperty(block, evade) {
        if (block === void 0) { block = 0; }
        if (evade === void 0) { evade = 0; }
        this.block = block;
        this.evade = evade;
    }
    return DefenseProperty;
}());
exports.DefenseProperty = DefenseProperty;
