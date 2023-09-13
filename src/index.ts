import { isConstructorDeclaration } from 'typescript';
import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3);
const result_sub = calc.sub(3,1);
const result_mult = calc.mult(5,5);

console.log(`result_add = ${result_add}\nresult_sub = ${result_sub}\nresult_mult = ${result_mult}`);

