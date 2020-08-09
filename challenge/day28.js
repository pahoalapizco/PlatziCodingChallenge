const diccionario = {
  'a': '.-',
  'b': '-...',
  'c': '-.-.',
  'd': '-..',
  'e': '.',
  'f': '..-.',
  'g': '--.',
  'h': '....',
  'i': '..',
  'j': '.---',
  'k': '-.-',
  'l': '.-..',
  'm': '--',
  'n': '-.',
  'o': '---',
  'p': '.--.',
  'q': '--.-',
  'r': '.-.',
  's': '...',
  't': '-',
  'u': '..-',
  'v': '...-',
  'w': '.--',
  'x': '-..-',
  'y': '-.--',
  'z': '--..'
};

const traducir = frase => {
  const fraseArr = frase.toLowerCase().split('').filter(p => p !== ' ');
  const fraseMorse = fraseArr.map(p => diccionario[p]);

  return fraseMorse.join(' ');
}

const frase = 'Hola mundo'
console.log(traducir(frase))

