const yargs = require('yargs');
const opt = {
  base: {
    alias: 'b',
    demand: true,
    desc: 'Base of the triangule'
  },
  height: {
    alias: 'h',
    demand: true,
    desc: 'Height of the triangule'
  }
};

const argv = yargs
  .command('get-area', 'Calculate the area of ​​a triangle',opt)
  .help()
  .argv;
const { base, height } = argv;

if (typeof base !== 'number' || typeof height !== 'number') {
  console.log('Please, insert base and hight vlaid.');
  return
}

const area = (base * height) / 2;
let trianguleType = "";

if(base === height) 
  trianguleType = "equilateral"
else if(base > height)
  trianguleType = "scalene"
else
  trianguleType = "isosceles"

console.log(`The area of the ${trianguleType} triangule is ${area}`);