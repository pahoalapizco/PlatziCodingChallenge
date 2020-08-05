const fs = require('fs');
const path = require('path');

const getNombres = async () => {
  const nombres = await fs.readFileSync(path.resolve(__dirname + '/csv/nombres.csv'), { encoding: 'utf-8' });
  return nombres.split(/\r?\n/).filter(nombre => nombre !== '' && nombre !== 'nombre');
}

// Algoritmo de ordenamiento: Burbuja (Día 26)
const bubbleSort = desordenArr => {
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

// Algoritmo de ordenamiento QuickSort
const ordenQuickSort = arr => {
  if(arr.length === 0) return [];

  let izq = [];
  let der = [];
  const pivote = arr[0];

  for(let i = 1; i < arr.length; i++){
    if(arr[i] > pivote) {
      der.push(arr[i]);
    } else {
      izq.push(arr[i]);
    }
  } 

  return [].concat(ordenQuickSort(izq), pivote, ordenQuickSort(der));
}

// Implementación 
(async function () {
  const nombres = await getNombres();
  
  console.time('BubbleSort');
  const nombresBubbleSort = bubbleSort(nombres);
  console.timeEnd('BubbleSort');
  console.log('Bubble Sort', nombresBubbleSort);

  console.time('QuickSort');
  const nombresQuickSort = ordenQuickSort(nombres);
  console.timeEnd('QuickSort');
  console.log('Quick Sort', nombresQuickSort);
})();
