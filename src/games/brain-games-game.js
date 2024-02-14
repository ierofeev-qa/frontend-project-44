import askQuestion from '../cli.js';
import { printMessage, greeting } from '../utils.js';

const brainGames= () => {
  printMessage('Welcome to the Brain Games!');
  const name = askQuestion('May I have your name? ')
  greeting(name);
};

export default brainGames;