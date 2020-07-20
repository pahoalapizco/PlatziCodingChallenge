const getString = (sel) => {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const characters = '.+-_#%*/,;:';
  let response;

  if(sel === 1) {
    response =  lowercase+uppercase;
  } else if (sel === 2) {
    response =  lowercase+uppercase+numbers;
  } else if (sel === 3) {
    response =  lowercase+uppercase+characters;
  } else if (sel === 4) {
    response =  lowercase+uppercase+numbers+characters;
  }
  return response;
}

const passwordGenerator = (long, sel) => {
  const pass = [];
  const str = getString(sel).split('');

  for(let i = 0; i < long; i++){
    const random = Math.floor(Math.random() * str.length)
    pass.push(str[random]);
  }

  return pass.join('');
}

const create = () => {
  let response = '';
  const sel = prompt(`This is a password generator, please input a number with the conbitanion that you wants:
    1. Lowercase and Uppercase
    2. Lowercase, Uppercase and numbers
    3. Lowercase, Uppercase and especial characters
    4. Lowercase, Uppercase, numbers and especial characters
  `);

  if (sel < 1 || sel > 4) {
    response = 'Please enter a correct number.';
    return response;
  }
  const lenght = prompt(`This is a password generator, please input the length for your password`);

  response = passwordGenerator(parseInt(lenght), parseInt(sel));
  
  return response;
}
console.log(create());
