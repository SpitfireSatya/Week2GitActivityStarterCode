"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.divide = function (x, y) {
        if (y > 0) {
            return x / y;
        }
        throw new Error("Denominator must not be zero.");
        return 0;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
;
