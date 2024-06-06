import readlineSync from 'readline-sync';


const countRounds = 3;

const questionAndAnswer = (rules, gameData) => {


    console.log('Welcome to the Brain Games!');
    console.log('May I have your name ?');
    const name = readlineSync.question('Your answer: ');

    console.log(`Hello, ${name}!`);
    console.log(`${rules}`);

    for (let i = 0; i < countRounds; i += 1) {
        const [question, correctAnswer] = [...gameData()];
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question ('Your answer: ');
    

    if (userAnswer === correctAnswer) {
        console.log('Correct!');

    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
        console.log(`Let's try again, ${name}!`);
        return;
    }
    
}
console.log(`Congratulations, ${name}!`);

};

export default questionAndAnswer;
