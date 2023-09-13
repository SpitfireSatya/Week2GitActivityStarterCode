import { Calculator } from './calculator';

const calc = new Calculator();
const result_add = calc.add(2, 3);
const result_sub = calc.subtract(4, 2);
const result_multiply = calc.multiply(2, 3);
console.log(`result_multiply = ${result_multiply}`);