
const secretNumber = (level = 10, secret, tries = 1) => {
  let response = prompt(`Please enter a number that you think is equal to secret number`);
  let message = '';
  let randomSecret = secret || Math.floor(Math.random() * level);

  if(randomSecret > response) {
    message = `The secret number is bigger than ${response}`
    console.log(message);
    alert(message);
    return secretNumber(level, randomSecret, tries + 1);
  }  
  else if(randomSecret < response) {
    message = `The secret number is smaller than ${response}`;
    console.log(message);
    alert(message);
    return secretNumber(level, randomSecret, tries + 1);
  } 
  else {
    message = `The secret number is equeal to ${response}, you won on try #${tries}`;
    alert(message);
    return message;
  }
}

const level = 20
console.log(secretNumber(level));