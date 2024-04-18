import readlineSync from 'readline-sync';

const playBrainEven = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
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