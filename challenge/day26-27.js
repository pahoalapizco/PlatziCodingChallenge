const fs = require('fs');
const path = require('path');

const getNombres = async () => {
  const nombres = await fs.readFileSync(path.resolve(__dirname + '/csv/nombres.csv'), { encoding: 'utf-8' });
  return nombres.split(/\r?\n/).filter(nombre => nombre !== '' && nombre !== 'nombre');
}

// Algoritmo de ordenamiento: Burbuja (Día 26)
const ordenBurbuja = desordenArr => {
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

// Implementación 
(async function () {
  const nombres = await getNombres();
  const nombresOrdenados = ordenBurbuja(nombres);
  console.log("nombresOrdenados", nombresOrdenados);
})();