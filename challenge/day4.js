const yargs = require('yargs');

const ops = {
  word: {
    alias: 'w',
    demand: true 
  },
  reps: {
    alias: 'r',
    default: 1
  }
};

const argv = yargs
  .command('repeat', '', ops)
  .help()
  .argv;

const { word, reps } = argv;

const repeatWord = (word, reps, newWord) => {

  if(reps === 0) return newWord;

  newWord = newWord ? `${newWord} ${word}`: word
  
  return repeatWord(`${word}`, reps-1, newWord)
}

console.log(repeatWord(word, reps));