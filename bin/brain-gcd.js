import readlineSync from 'readline-sync';

const gcd = (num1, num2) => {
    if (num2 === 0) {
        return num1; 
    }
    return gcd (num2, num1 % num2);
};

const playBrainGcd = () => {

    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Find the greatest common divisor of given numbers.');

    let correctAnswerCount = 0;

    for (let i = 0; i < 3; i += 1) {
        const num1 = Math.floor(Math.random()*(100 - 1) + 1);
        const num2 = Math.floor(Math.random()*(100 - 1) + 1);
        console.log(`Question: ${num1} ${num2}`);

        const userAnswer = readlineSync.question ('Your answer: ');
        const correctAnswer = gcd(num1, num2).toString();

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

playBrainGcd();

export default playBrainGcd;

