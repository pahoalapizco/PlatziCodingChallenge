const TASA_INTERES = 4; // %

const calcularAhorro = (importe, meses) => {
  let ahorro = importe;
  for(let i = 1; i <= meses; i++) {
    ahorro = ahorro + (ahorro * (TASA_INTERES/100))
  }
  return Math.round(ahorro * 100) / 100;
}

const calculadora = () => {
  const titulo = `Calculadora de ahorro con ${TASA_INTERES}% de intereses.`;
  const importe = prompt(`${titulo} \n Importe inicial del ahorro.`);
  const meses = prompt(`${titulo} \n Meses de inversión en el ahorro.`);

  const ahorro = calcularAhorro(parseFloat(importe), parseInt(meses));

  alert(`Ahorro total a ${meses} meses con un saldo inicial de $${importe} y una tasa de interes del ${TASA_INTERES}% es de $${ahorro}`);
}
