import { playGame, generateGcdQuizNumbers, getGcd } from '../utils.js';

const brainGcd = () => {
  playGame('Find the greatest common divisor of given numbers.', generateGcdQuizNumbers, getGcd);
};

export default brainGcd;
