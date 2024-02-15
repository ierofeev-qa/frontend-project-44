import {
  getRandomNumber, greeting, isEven, playGame,
} from '../utils.js';

const brainEven = () => {
  const name = greeting();
  playGame(name, 'Answer "yes" if the number is even, otherwise answer "no".', getRandomNumber, isEven);
};

export default brainEven;
