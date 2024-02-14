import askQuestion from '../cli.js';
import {askIfEven, getRandomNumber, greeting, isEven, printMessage} from '../utils.js';

const brainEven = () => {
  printMessage('Welcome to the Brain Games!');

  const name = askQuestion('May I have your name? ')
  greeting(name);

  printMessage('Answer "yes" if the number is even, otherwise answer "no".')
  for (let counter = 0; counter < 3; counter +=1 ) {
    const number = getRandomNumber(100);
    askIfEven(number)
    const rightAnswer = isEven(number) ? 'yes' : 'no';
    const answer = askQuestion('Your answer: ');
    if (answer.toString() === rightAnswer) {
      printMessage('Correct!')
    } else {
      printMessage(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      printMessage(`Let's try again, ${name}!`);
      return;
    }
  }
  printMessage(`Congratulations, ${name}!`)
}

export default brainEven;
