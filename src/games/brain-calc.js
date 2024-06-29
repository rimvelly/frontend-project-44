import questionAndAnswer from '../index.js';

const operations = ['+', '-', '*'];
const descriptions = 'What is the result of the expression?';

export const calculate = (num1, operator, num2);
switch (calculate) {
  case '+':
    console.log(num1 + num2);
    break;
  case '-':
    console.log(num1 - num2);
    break;
  case '*':
    console.log(num1 * num2);
    break;
  default:
    console.log('NaN');
}

export const generateQuestion = () => {
  const num1 = Math.floor(Math.random() * (100 - 1) + 1);
  const num2 = Math.floor(Math.random() * (100 - 1) + 1);
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const correctAnswer = calculate(num1, operation, num2).toString();
  const question = `${num1} ${operation} ${num2}`;
  return [question, correctAnswer];
};

export default () => { questionAndAnswer(descriptions, generateQuestion); };
