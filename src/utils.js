function welcomeMessage() {
  console.log('Welcome to the Brain Games!');
}

function isEven(number) {
  return number % 2 === 0;
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

export { welcomeMessage, isEven, getRandomNumber };
