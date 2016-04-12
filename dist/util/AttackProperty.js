"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AttackProperty = (function () {
    function AttackProperty() {
        this.damage = 0;
        this.pierce = 0;
        this.accuracy = 0;
    }
    return AttackProperty;
}());
exports.AttackProperty = AttackProperty;
var SurgeAttackProperty = (function (_super) {
    __extends(SurgeAttackProperty, _super);
    function SurgeAttackProperty(surgeCost) {
        if (surgeCost === void 0) { surgeCost = 1; }
        _super.call(this);
        this.surgeCost = surgeCost;
    }
    return SurgeAttackProperty;
}(AttackProperty));
exports.SurgeAttackProperty = SurgeAttackProperty;
var FixedAttackProperty = (function (_super) {
    __extends(FixedAttackProperty, _super);
    function FixedAttackProperty() {
        _super.apply(this, arguments);
        this.surge = 0;
    }
    return FixedAttackProperty;
}(AttackProperty));
exports.FixedAttackProperty = FixedAttackProperty;
//# sourceMappingURL=AttackProperty.js.map