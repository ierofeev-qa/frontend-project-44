import askQuestion from './cli.js';

const printMessage = (message) => {
  console.log(message);
};

const greeting = () => {
  printMessage('Welcome to the Brain Games!');

  const name = askQuestion('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandomNumber = () => Math.floor(Math.random() * 100);

const generateOperation = () => {
  const operators = ['+', '-', '*'];
  return `${getRandomNumber()} ${operators[Math.floor(Math.random() * operators.length)]} ${getRandomNumber()}`;
};

const generateGcdQuizNumbers = () => `${getRandomNumber()} ${getRandomNumber()}`;

const questionString = (question) => {
  console.log(`Question: ${question.toString()}`);
};

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const calculateResult = (operation) => {
  const operands = operation.split(' ');
  const firstNumber = Number(operands[0]);
  const secondNumber = Number(operands[2]);
  const operator = operands[1];

  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return undefined;
  }
};

const getGcd = (numbersStr) => {
  const numbers = numbersStr.split(' ');
  function gcd(a, b) {
    if (b) {
      return gcd(b, a % b);
    }
    return Math.abs(a);
  }

  return gcd(numbers[0], numbers[1]);
};

const playGame = (playerName, startPhrase, quizGenerator, correctAnswerFn) => {
  for (let counter = 0; counter < 3; counter += 1) {
    const quiz = quizGenerator().toString();
    questionString(quiz);
    const rightAnswer = correctAnswerFn(quiz).toString();
    const userAnswer = askQuestion('Your answer: ');
    if (userAnswer.toString() === rightAnswer) {
      printMessage('Correct!');
    } else {
      printMessage(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      printMessage(`Let's try again, ${playerName}!`);
      return;
    }
  }
  printMessage(`Congratulations, ${playerName}!`);
};

export {
  printMessage,
  greeting,
  isEven,
  getRandomNumber,
  questionString,
  playGame,
  generateOperation,
  calculateResult,
  generateGcdQuizNumbers,
  getGcd,
};
