const startWithVowel = (word) => `${word}way`;
const startWithConsonant = (word) => {
  const arrayWord = word.toLowerCase().split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let index, 
      initial,
      ends;

  for(let i = 0; i < arrayWord.length-1; i++) {
    const char = arrayWord[i];
    if(vowels.indexOf(char) > -1) {
      index = i;
      break;
    }
  }

  initial = word.substring(index, word.length);
  ends = word.substring(0, index)

  return `${initial}${ends}ay`
};

const translate = (text) => {
  const newText = [];
  const vowels = ['a', 'e', 'i', 'o','u'];
  const paragraphArray = text.replace(/[.,]+/gi, '').toLowerCase().split(' ');

  for(let i = 0; i <= paragraphArray.length-1; i++){
    const word = paragraphArray[i];
    const char = word.charAt(0)
    if(vowels.indexOf(char) > 1) {
      newText.push(startWithVowel(word));
    } else {
      newText.push(startWithConsonant(word));
    }
  }

  return newText.join(' ');
}

const text = 'This is my new text';
console.log(translate(text));
