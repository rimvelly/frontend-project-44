import questionAndAnswer from '../index.js';

const descriptions = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }

  return num1;
};

const playBrainGcd = () => {
  const num1 = Math.floor(Math.random() * (10 - 1) + 1);
  const num2 = Math.floor(Math.random() * (10 - 1) + 1);
let correctAnswer = '';
  const question = `${num1} ${num2}`;
  correctAnswer += gcd(num1, num2);
  return [question, correctAnswer];
};

export default () => { questionAndAnswer(descriptions, playBrainGcd); };
