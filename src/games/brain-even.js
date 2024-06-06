import questionAndAnswer from '../index.js';

const descriptions = 'Answer "yes" if the number is even, otherwise answer "no".';






const generateQuestion = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    const isEven = randomNumber % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';
    return [randomNumber, correctAnswer];
};

export default () => { questionAndAnswer(descriptions, generateQuestion); };









/*
import readlineSync from 'readline-sync';
import greetUser from '../cli.js';

greetUser ();

const playBrainEven = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let correctAnswerCount = 0;

    for (let i = 0; i < 3; i += 1) {
        const randomNumber = Math.floor(Math.random() * 100);
        const userAnswer = readlineSync.question (`Question: ${randomNumber}\nYour answer: `);

        const isEven = randomNumber % 2 === 0;
        const correctAnswer = isEven ? 'yes' : 'no';

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            correctAnswerCount += 1;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);
};

playBrainEven ();

export default playBrainEven;
*/