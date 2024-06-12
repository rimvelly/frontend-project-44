import questionAndAnswer from '../index.js';

const descriptions = 'What number is missing in the progression?';

const generateProgression = (firstNum, arrLength, addNum) => {
  const progression = [firstNum];
  for (let i = 1; i < arrLength; i += 1) {
    progression[i] = progression[i - 1] + addNum;
  }
  return progression;
};

const playBrainProgression = () => {
  const firstNum = Math.floor(Math.random() * (30 - 1) + 1);
  const arrLength = Math.floor(Math.random() * (10 - 5) + 5);
  const addNum = Math.floor(Math.random() * (5 - 2) + 2);

  const progression = generateProgression(firstNum, arrLength, addNum);

  const hideElement = Math.floor(Math.random() * (arrLength - 0) + 0);

  const correctAnswer = '';

  correctAnswer += `${progression[hideElement]}`;

  progression[hideElement] = '...';

  let question = '';

  for (let i = 0; i < arrLength; i += 1) {
    question += `${progression[i]}`;
  }
  return [question, correctAnswer];
};

export default () => { questionAndAnswer(descriptions, playBrainProgression); };
