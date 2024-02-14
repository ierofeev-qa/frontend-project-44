const printMessage = (message) => {
  console.log(message);
}

const greeting = (name) => {
  console.log(`Hello, ${name}!`);
}

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
}

const askIfEven = (number) => {
  console.log(`Question: ${number.toString()}`)
}

const isEven = (number) => {
  return number % 2 === 0;
}

export { printMessage, greeting, isEven, getRandomNumber, askIfEven };
