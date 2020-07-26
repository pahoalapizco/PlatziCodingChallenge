// Generear números aleatoreos
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

// Ordena arreglo de numeros de menor a mayor
const ordenAscendente = desordenArr => {
  const orden = [...desordenArr];
  for(let i = 1; i < orden.length; i++){
    let length = orden.length - 1;
    for(let j = length; j >= i; j--) {
      if(orden[j - 1] > orden[j]){
        const temp = orden[j - 1];
        orden[j - 1] = orden[j];
        orden[j] = temp;
      }
    }
  }
  return orden;
}

// Ordena arreglo de números de mayor a menor
const ordenDescendente = desordenArr => {
  const orden = [...desordenArr];
  for(let i = 1; i < orden.length; i++){
    let length = orden.length - 1;
    for(let j = length; j >= i; j--) {
      if(orden[j - 1] < orden[j]){
        const temp = orden[j - 1];
        orden[j - 1] = orden[j];
        orden[j] = temp;
      }
    }
  }
  return orden;
}

(function() {
  const limite = 90;
  let aleatorios = [...generarAleatorios(limite)];
  const mayorMenor = ordenAscendente(aleatorios).join(', ');
  const menorMayor = ordenDescendente(aleatorios).join(', ');
  console.log(`Original: ${aleatorios.join(', ')}`);
  console.log(`Ordenado de menor a mayor: ${mayorMenor}`);
  console.log(`Ordenado de mayor a menor: ${(menorMayor)}`);
})();