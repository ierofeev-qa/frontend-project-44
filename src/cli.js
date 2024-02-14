import readlineSync from 'readline-sync';

const askQuestion = (question) => {
    return readlineSync.question(question);
};

export default askQuestion;
