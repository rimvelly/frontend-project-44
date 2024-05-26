import readlineSync from 'readline-sync';
import greetUser from '../cli.js';

greetUser();

const generateProgression = () => {
    const firstNum = Math.floor(Math.random()*(30 - 1) + 1);
    const progression = [firstNum];
    const arrLength = Math.floor(Math.random()*(10 - 5) + 5);
    const addNum = Math.floor(Math.random()*(5 - 2) + 2);

    for (let i = 1; i < arrLength; i += 1) {
        progression[i] = progression[i - 1] + addNum;
    }
    const elementIndex = Math.floor(Math.random() * arrLength);
    let correctAnswer = '';
    correctAnswer += `${progression[elementIndex]}`;
    progression[elementIndex] = '...';
    const question = progression.join(' ');


    return [question, correctAnswer];
  };


const playBrainProgression = () => {
    
    console.log('What number is missing in the progression?');

    let correctAnswerCount = 0;

    for (let i = 0; i < 3; i += 1) {
        const [question, correctAnswer] = generateProgression();
        const userAnswer = readlineSync.question (`Question: ${question}\nYour answer: `);

        if (userAnswer === correctAnswer) {
            console.log('Congrats!');
            correctAnswerCount += 1;
        } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
        console.log(`Let's try again, ${name}!`);
        return;
        }
    }
    console.log(`Congratulations, ${name}!`);
};

playBrainProgression();

export default playBrainProgression;