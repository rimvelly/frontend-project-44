import readlineSync from 'readline-sync';

const generateProgression = () => {
    
}


const playBrainProgression = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('What number is missing in the progression?');

    let correctAnswerCount = 0;

    for (let i = 0; i < 3; i += 1) {
        const { question, correctAnswer } = generateProgression();
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