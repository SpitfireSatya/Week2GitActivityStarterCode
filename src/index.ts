import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3);
console.log(`result_add = ${result_add}`);

const result_subtract = calc.subtract(2, 3);
console.log(`result_subtract = ${result_subtract}`);

const result_mult = calc.multiply(2, 3);
console.log(`result_multiply = ${result_mult}`);

const result_div = calc.multiply(9, 3);
console.log(`result_div = ${result_div}`);