import askQuestion from '../cli.js';
import {
 getRandomNumber, greeting, isEven, printMessage, playGame,
} from '../utils.js';

const brainEven = () => {
  printMessage('Welcome to the Brain Games!');

  const name = askQuestion('May I have your name? ');
  greeting(name);

  playGame(name, 'Answer "yes" if the number is even, otherwise answer "no".', getRandomNumber, isEven);
};

export default brainEven;
