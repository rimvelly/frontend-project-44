import questionAndAnswer from '../index.js';

const descriptions = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  let countOfDivs = 0;
  for (let i = num; i > 0; i -= 1) {
    if (num % i === 0) {
      countOfDivs += 1;
    }
  }

  return countOfDivs === 2;
};

const playBrainPrime = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default () => { questionAndAnswer(descriptions, playBrainPrime); };
