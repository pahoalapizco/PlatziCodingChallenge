const yargs = require('yargs');

const ops = {
  hours: {
    alias: 'h',
    default: 0
  },
  minutes: {
    alias: 'm',
    default: 0
  }
};
const argv = yargs
  .command('clock', 'Converts hours and minutes to seconds', ops)
  .help()
  .argv;

const { hours, minutes } = argv;
const totalSeconds = ((hours * 60 ) + minutes) * 60;
console.log(`${hours} hours and ${minutes} minues have ${totalSeconds} seconds.`);
