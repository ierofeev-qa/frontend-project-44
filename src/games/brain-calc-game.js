import { playGame, calculateResult, generateOperation } from '../utils.js';

const brainCalc = () => {
  playGame('What is the result of the expression?', generateOperation, calculateResult);
};

export default brainCalc;
