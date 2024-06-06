import questionAndAnswer from '../index.js';

const operations = ['+', '-', '*'];
const descriptions = 'What is the result of the expression?';

export const generateQuestion = () => {
    const num1 = Math.floor(Math.random()*(100 - 1) + 1);
    const num2 = Math.floor(Math.random()*(100 - 1) + 1);
    const operation = operations[Math.floor(Math.random() * operations.length)];
    const correctAnswer = calculate(num1, operation, num2).toString();
    const question = `${num1} ${operation} ${num2}`;
    return [ question, correctAnswer ];
};


export const calculate = (num1, operator, num2) => 
    operator === '+' ? num1 + num2 :
    operator === '-' ? num1 - num2 :
    operator === '*' ? num1 * num2 :
    NaN;


export default () => { questionAndAnswer(descriptions, generateQuestion); };











/*
export const playBrainCalc = () => { 
    console.log('What is the result of the expression?');
};

const descriptions = 'What is the result of the expression?';

export const generateQuestion = () => {
    const operations = ['+', '-', '*'];
    const num1 = Math.floor(Math.random()*(100 - 1) + 1);
    const num2 = Math.floor(Math.random()*(100 - 1) + 1);
    const operation = operations[Math.floor(Math.random() * operations.length)];
    const correctAnswer = calculate(num1, operation, num2).toString();
    const question = `${num1} ${operation} ${num2}`;
    return [ question, correctAnswer ];
};


export const calculate = (num1, operator, num2) => 
    operator === '+' ? num1 + num2 :
    operator === '-' ? num1 - num2 :
    operator === '*' ? num1 * num2 :
    NaN;

playBrainCalc();

export default playBrainCalc;

*/