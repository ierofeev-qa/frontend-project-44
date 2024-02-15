import { getRandomNumber, isEven, playGame } from '../utils.js';

const brainEven = () => {
  playGame('Answer "yes" if the number is even, otherwise answer "no".', getRandomNumber, isEven);
};

export default brainEven;
