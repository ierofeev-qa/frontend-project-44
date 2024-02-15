import {
  greeting, playGame, calculateResult, generateOperation,
} from '../utils.js';

const brainCalc = () => {
  const name = greeting();
  playGame(name, 'What is the result of the expression?', generateOperation, calculateResult);
};

export default brainCalc;
