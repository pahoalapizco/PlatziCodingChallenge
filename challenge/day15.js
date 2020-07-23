const cilindro = (r, h) => Math.round((Math.PI * Math.pow(r, 2) * h)*10) / 10;
const esfera = r => (4/3) * Math.PI * Math.pow(r, 3);
const cubo = l => Math.pow(l, 3);

const CalcularVolumenes = cont => {
  let respuesta = '';
  const seleccion = parseInt(prompt(`Seleccione una figura \n 1. Espefera \n 2. Cubo \n 3. Esfera`));

  if(seleccion === 1) {
    const radio = parseInt(prompt('Radio: '));
    const altura = parseInt(prompt('Altura: '));
    respuesta = `El volumen del cilindro es ${cilindro(radio, altura)}`;

  } else if(seleccion === 2) {
    const lado = parseInt(prompt('Lato: '));
    respuesta = `El volumen del cubo es ${cubo(lado)}`;
    
  } else if (seleccion === 3) {
    const radio = parseInt(prompt('Radio: '));
    respuesta = `El volumen de la esfera es ${esfera(radio)}`;

  } else {
    if(cont < 3){ // Solo 3 intentos
      CalcularVolumenes(cont + 1)
    } else {
      console.log('entro al else final.')
      respuesta = `Lo sentimos ha superado el total de intentos`;
    }
  }
  return respuesta;
}

console.log(CalcularVolumenes(0));