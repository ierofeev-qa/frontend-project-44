import askQuestion from '../cli.js';
import {
   greeting, printMessage, playGame, generateGcdQuizNumbers, getGcd,
} from '../utils.js';

const brainGcd = () => {
  printMessage('Welcome to the Brain Games!');

  const name = askQuestion('May I have your name? ');
  greeting(name);

  playGame(name, 'Find the greatest common divisor of given numbers.', generateGcdQuizNumbers, getGcd);
};

export default brainGcd;
