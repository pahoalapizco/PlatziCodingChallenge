const random = limit => Math.floor(Math.random() * limit);

const memoryChar = () => {
  const characters = ['"', '#', '$', '%', '(', ')', '/', '&'];
  const memory = [];
  
  do {
    const limit = characters.length;
    const char = characters[random(limit)];
  
    if(memory.indexOf(char) === -1) {
      memory.push(char);
    }
  
  }while(memory.length < 4);

  return memory;
}

console.log(memoryChar().join());

