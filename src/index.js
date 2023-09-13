"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculator_1 = require("./calculator");
var calc = new calculator_1.Calculator();
var result_add = calc.add(2, 3);
var result_subtract = calc.subtract(2, 3);
console.log("result_add = ".concat(result_add));
console.log("result_subtract = ".concat(result_subtract));
