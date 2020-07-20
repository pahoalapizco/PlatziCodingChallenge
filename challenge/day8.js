const yargs = require('yargs');

const ops = {
  radius: {
    alias: 'r',
    desc: 'Radius of the cylinder',
    demand: true
  },
  heigt: {
    alias: 'h',
    desc: 'Heigt of the cylinder',
    demand: true
  },
  unit: {
    alias: 'u',
    desc: 'Unit of measure',
    demand: true
  }
}

const argv = yargs
  .command('volume', 'Calculate volume of the cylinder', ops)
  .command('area', 'Calculate area of the cylinder', ops)
  .help()
  .argv;

const volume = (r, h) => Math.round((Math.PI * Math.pow(r, 2) * h)*10) / 10;
const area = (r, h) => Math.round((2 * Math.PI * r * (r + h)) * 10) / 10;
const calculate = (command, r, h, u) => {
  if(command == 'volume') {
    return `V = ${volume(r, h)} ${u}3`; 
  } 
  else if (command === 'area') {
    return `A = ${area(r, h)} ${u}2`; 
  } else {
    return 'Invalid command, try again';
  }
}
const { radius, heigt, unit } = argv;
const command = argv._[0];

console.log(calculate(command, radius, heigt, unit));
