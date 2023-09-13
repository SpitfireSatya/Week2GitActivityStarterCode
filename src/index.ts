import { isConstructorDeclaration } from 'typescript';
import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3);
const result_sub = calc.sub(3,1);

