const generarAleatorios = limite => {
  let numeros = [];
  do {
    const aleatorio = Math.floor(Math.random() * limite + 1);
    if(numeros.length === 0 || numeros.indexOf(aleatorio) === -1) {
      numeros.push(aleatorio);
    }
  } while(numeros.length < 10)
  return numeros;
}

const limite = 90;
let aleatorios = [...generarAleatorios(limite)];

for(let i = 2; i <= aleatorios.length; i++){
  let length = aleatorios.length;
  for(let j = length; j > i; j--) {
    if(aleatorios[j - 1] > aleatorios[j]){
      const mayor = aleatorios[j - 1];
      aleatorios[j - 1] = aleatorios[j];
      aleatorios[i] = mayor;
    }
  }
}

console.log(aleatorios)

// [90, 30, 15, 40, 70, 50, 80, 101, 150, 200]
// 200, 150, 101, 90, 80, 70, 50, 40, 30, 15
// 15, 30, 40, 50, 70, 80, 90, 101, 150, 200


