const TASA_INTERES = 4; // %

const calcularAhorro = (importe, meses) => {
  const ahorro = importe * Math.pow((1 + TASA_INTERES/100), meses);
  return Math.round(ahorro * 100) / 100;
}

const calculadora = () => {
  const titulo = `Calculadora de ahorro con ${TASA_INTERES}% de intereses.`;
  const importe = prompt(`${titulo} \n Importe inicial del ahorro.`);
  const meses = prompt(`${titulo} \n Meses de inversión en el ahorro.`);

  const ahorro = calcularAhorro(parseFloat(importe), (parseInt(meses)/12));

  alert(`Ahorro total a ${meses} meses con un saldo inicial de $${importe} y una tasa de interes del ${TASA_INTERES}% es de $${ahorro}`);
}
