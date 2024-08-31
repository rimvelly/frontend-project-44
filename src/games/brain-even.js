import questionAndAnswer from '../index.js';

const descriptions = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestion = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const isEven = (randomNumber) => {
    randomNumber % 2 === 0;
  };
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export default () => { questionAndAnswer(descriptions, generateQuestion); };
