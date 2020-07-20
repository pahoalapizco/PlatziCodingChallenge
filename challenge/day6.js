const yargs = require('yargs');

const ops = {
  value1: {
    alias: 'v1',
    demand: true 
  },
  value2: {
    alias: 'v2',
    demand: true,
  },
  operator: {
    alias: 'op',
    demand: true
  }
};

const argv = yargs
  .command('calculate', '', ops)
  .help() .argv;

const calculator = (value1, operator, value2 ) => {
  let response = {
    error: false,
    result: ''
  };
  
  if (operator === '/' && parseInt(value2) === 0) {
    response.error = true;
    response.result = 'NaN'
    return response;
  }

  if(typeof value1 === 'string'|| typeof value2=== 'string'){
    response.error = true;
    response.result = 'Please input a correct value.'
    return response;
  }

  switch (operator) {
    case '+':
      response.result = value1 + value2;
      return response
      break;
    case '-':
      response.result = value1 - value2;
      return response;
      break;
    case '*':
      response.result = value1 * value2;
      return response;
      break;
    case '/':
      response.result = value1 / value2;
      return response
      break;
  
    default:
      response.error = true;
      response.result = 'Invalid operator'
      return response;
      break;
  }
}

const { value1, value2, operator } = argv;
const { error, result } = calculator(value1, operator, value2);

!error 
  ? console.log(`The result of the operation: ${value1} ${operator} ${value2} = ${result}`)
  : console.log(result);
