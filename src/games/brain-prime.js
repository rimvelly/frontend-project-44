import readlineSync from 'readline-sync';
import greetUser from '../cli.js';

greetUser();

const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    
    return true;
};

const playBrainPrime = () => {

    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    let correctAnswerCount = 0;

    for (let i = 0; i < 3; i += 1) {
        const number = Math.floor(Math.random() * 100) + 1;
        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question('Your answer: ');

        const isNumberPrime = isPrime(number);
        const correctAnswer = isNumberPrime ? 'yes' : 'no';
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

playBrainPrime();

export default playBrainPrime;