import {
   greeting, playGame, generateGcdQuizNumbers, getGcd,
} from '../utils.js';

const brainGcd = () => {
  const name = greeting();
  playGame(name, 'Find the greatest common divisor of given numbers.', generateGcdQuizNumbers, getGcd);
};

export default brainGcd;
