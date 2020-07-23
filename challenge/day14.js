// Identifica si el divisior el multiplo del dividendo.
// Ej. 3 es multiplo de 9, 9/3 = 3 con residuo 0
// Ej. 2 no es multiplo de 9 9/2 = 4 con residuo 1
const esMultiplo = (dividendo, divisor) => (dividendo % divisor ) === 0;
// Identificar si el número es par
const esPar = num => esMultiplo(num, 2 ) && num !== 2;

// Determina si el número es primo
const esPrimo = num => {
  let primo = true;
  if(esPar(num)) {
    primo = false;
  } else {
    const proxSqrt = Math.floor(Math.sqrt(num)+1);
    for(let i = proxSqrt; i > 1; i--) {
      if(i !== proxSqrt && esMultiplo(num, i)) {
        primo = false;
        break;
      }
    }
  }
  return primo;
}

// Encuentra los númros primos entre 1 y num
const numerosPrimos = num => {
  const primos = [];
  
  for(let i = 1; i <= num; i++){
    if(i === 2) { // 2 es el unico número primo par
      primos.push(i);
    } else if (i > 1) { // 1 no es un número primo
      if(esPrimo(i, i)) {
        primos.push(i);
      }
    }
  }
  return primos;
}

console.log('primos: ', numerosPrimos(7));