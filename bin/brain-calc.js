import readlineSync from 'readline-sync';

const generateQuestion = () => {
    const operations = ['+', '-', '*'];
    const num1 = Math.floor(Math.random()*(100 - 1) + 1);
    const num2 = Math.floor(Math.random()*(100 - 1) + 1);
    const operation = operations[Math.floor(Math.random() * operations.length)];
    const correctAnswer = calculate(num1, operation, num2).toString();
    const question = `${num1} ${operation} ${num2}`;
    return { question, correctAnswer };
};

const calculate = (num1, operator, num2) => 
    operator === '+' ? num1 + num2 :
    operator === '-' ? num1 - num2 :
    operator === '*' ? num1 * num2 :
    NaN;

const playBrainCalc = () => {
    
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('What is the result of the expression?');

    let correctAnswerCount = 0;

    for (let i = 0; i < 3; i += 1) {
        const { question, correctAnswer } = generateQuestion();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question ('Your answer: ');

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

playBrainCalc();

export default playBrainCalc;