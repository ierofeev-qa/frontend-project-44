import askQuestion from './cli.js';

const greeting = () => {
  console.log('Welcome to the Brain Games!');

  const name = askQuestion('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandomNumber = () => Math.floor(Math.random() * 100);

const evenGameData = () => {
  const number = getRandomNumber();
  return {
    question: number,
    correctResult: number % 2 === 0 ? 'yes' : 'no',
  };
};

const calcGameData = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  let correctResult;

  switch (randomOperator) {
    case '+':
      correctResult = firstNumber + secondNumber;
      break;
    case '-':
      correctResult = firstNumber - secondNumber;
      break;
    case '*':
      correctResult = firstNumber * secondNumber;
      break;
    default:
      correctResult = undefined;
  }

  return {
    question: `${firstNumber} ${randomOperator} ${secondNumber}`,
    correctResult,
  };
};

const gcdGameData = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  function gcd(a, b) {
    if (b) {
      return gcd(b, a % b);
    }
    return Math.abs(a);
  }

  return {
    question: `${firstNumber} ${secondNumber}`,
    correctResult: gcd(firstNumber, secondNumber),
  };
};

const progressionGameData = () => {
  let randomNumber = getRandomNumber();
  const step = getRandomNumber();
  const progression = [];

  for (let counter = 0; counter < 10; counter += 1) {
    progression.push(randomNumber);
    randomNumber += step;
  }

  const randomIndex = Math.floor(Math.random() * progression.length);
  const correctResult = progression[randomIndex];
  progression[randomIndex] = '..';

  return {
    question: progression.join(' '),
    correctResult,
  };
};

const runGame = (startPhrase, gameData) => {
  const playerName = greeting();

  for (let counter = 0; counter < 3; counter += 1) {
    const quizData = gameData();
    console.log(`Question: ${quizData.question.toString()}`);
    const rightAnswer = quizData.correctResult.toString();
    const userAnswer = askQuestion('Your answer: ');
    if (userAnswer.toString() === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export {
  greeting,
  getRandomNumber,
  evenGameData,
  calcGameData,
  gcdGameData,
  progressionGameData,
  runGame,
};
