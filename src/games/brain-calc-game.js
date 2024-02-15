import askQuestion from '../cli.js';
import {
 greeting, printMessage, playGame, calculateResult, generateOperation,
} from '../utils.js';

const brainCalc = () => {
  printMessage('Welcome to the Brain Games!');

  const name = askQuestion('May I have your name? ');
  greeting(name);

  playGame(name, 'What is the result of the expression?', generateOperation, calculateResult);
};

export default brainCalc;
