const MESES_ANIO = 12;
const calculoAnual = mes => mes%MESES_ANIO === 0 && mes/MESES_ANIO > 0

class CuentaAhorro {
  _importeAhorro = 0;
  _intereses = {
    mensual: 0,
    anual: 0
  }

  constructor(importeInicial, interesMensual, interesAnual){
    this._importeAhorro = importeInicial;
    this._intereses = {
      mensual: interesMensual || 0,
      anual: interesAnual || 0
    };
  }

  setAhorro(importe) {
    this._importeAhorro += importe || 0
  }

  calcularAhorro(meses) {
    let totalAhorro = this._importeAhorro;
    for(let i = 1; i <= meses; i++) {
      totalAhorro += totalAhorro * (this._intereses.mensual / 100);

      if(this._intereses.anual > 0 && calculoAnual(i)) {
        totalAhorro += totalAhorro * (this._intereses.anual / 100);
      }
    }
    return Math.round(totalAhorro * 100) / 100;
  }
}

// Implementación
const compararCuentas = ahorroInicial => {
  const cuentaX = new CuentaAhorro(ahorroInicial, 4, 0); // Int. Mensual 4% Int. Anual 0%
  const cuentaY = new CuentaAhorro(ahorroInicial, 3, 7); // Int. Mensual 3% Int. Anual 7%

  console.log(`Ahorro a 12 meses en la cuenta X $${cuentaX.calcularAhorro(12)}`);
  console.log(`Ahorro a 12 meses en la cuenta Y $${cuentaY.calcularAhorro(12)}`);
}

compararCuentas(100);