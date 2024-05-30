import readlineSync from 'readline-sync';
import { generateQuestion } from './games/brain-calc.js';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return greetUser;
};

const questionAndAnswer = (name) => {
  let correctAnswerCount = 0;

    for (let i = 0; i < 3; i += 1) {
        const { question, correctAnswer } = generateQuestion();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question ('Your answer: ');
    }
    if (userAnswer === correctAnswer) {
  console.log('Correct!');
  correctAnswerCount += 1;
} else {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${name}!`);
  return;
}
console.log(`Congratulations, ${name}!`);
return questionAndAnswer;
};

export default greetUser(); questionAndAnswer();