import askQuestion from './cli.js';

const printMessage = (message) => {
  console.log(message);
};

const greeting = (name) => {
  console.log(`Hello, ${name}!`);
};

const getRandomNumber = () => Math.floor(Math.random() * 100);

const generateOperation = () => {
  const operators = ['+', '-', '*'];
  return `${getRandomNumber()} ${operators[Math.floor(Math.random() * operators.length)]} ${getRandomNumber()}`;
};

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
      return (firstNumber + secondNumber).toString();
    case '-':
      return (firstNumber - secondNumber).toString();
    case '*':
      return (firstNumber * secondNumber).toString();
    default:
      return (firstNumber + secondNumber).toString();
  }
};

const playGame = (playerName, startPhrase, quizGenerator, correctAnswerFn) => {
  for (let counter = 0; counter < 3; counter += 1) {
    const number = quizGenerator().toString();
    questionString(number);
    const rightAnswer = correctAnswerFn(number);
    const answer = askQuestion('Your answer: ');
    if (answer.toString() === rightAnswer) {
      printMessage('Correct!');
    } else {
      printMessage(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
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
};
