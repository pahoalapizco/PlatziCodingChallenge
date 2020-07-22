class Comanda {
  _menu = [];
  _platillos = [];
  _SubTotal = 0;
  _porcPropina = 0;
  constructor(menu) {
    this._menu = menu;
  }

  setPlatillo (platillo) {
    this._platillos.push(platillo);
    this.setSubTotal()
  }

  getPlatillo(platilloId) {
    return this._menu.find(m => m.id === platilloId);
  }

  setSubTotal() {
    this._SubTotal = this._platillos
      .map(p => p.cantidad * p.precio)
      .reduce((accum, curr) => accum + curr);
  }
  
  getPlatillosPendientes () {
    let pendientes = [...this._menu];

    this._menu.forEach(item => {
      const platilloAgregado = this._platillos.filter(p => p.id === item.id).shift();
      
        if (platilloAgregado) {
          const pendientesId = pendientes.map(p => p.id);
          const index = pendientesId.indexOf(platilloAgregado.id);
          
          pendientes.splice(index, 1);
        }
    });

    return pendientes;
  }

  calcularPropina(porcPropina) {
    return Math.round((this._SubTotal * porcPropina) / 100, 2);
  }
}

// Usage: 
const menu = [
  {
    id: 1,
    descripcion: 'Torta Ahogada',
    precio: 35
  },{
    id: 2,
    descripcion: 'Chilaquiles',
    precio: 110
  },{
    id: 3,
    descripcion: 'Limonada',
    precio: 25
  },{
    id: 4,
    descripcion: 'Tacos',
    precio: 20
  }
];

const seleccionarPlatillo = (comanda) => {
  const listaPlatillos = comanda.getPlatillosPendientes();
  let listaMenu = '';
  for (const item of listaPlatillos) {
    listaMenu = listaMenu + `\t ${item.id}.- ${item.descripcion} \t ${item.precio} \n`;
  }

  let platilloIdSel = prompt(`Bienvenido, para elegir tu pedido selecciona el Número del platillo que deseas agregar \n ${listaMenu}`);
  const cantidadSel = prompt(`¿Cual es la cantidad a ordenar del platillo seleccionado?`);

  const platillo = comanda.getPlatillo(parseInt(platilloIdSel));

  comanda.setPlatillo({...platillo, cantidad: cantidadSel});
  
  const seguirOrdenando = prompt(`¿Desea seguir Ordenando mas platillos? \n SI - Continuar \n NO - Finalizar pedido.`);

  if(seguirOrdenando === 'SI') {
    return seleccionarPlatillo(comanda);
  } else {
    return;
  }
}

const hacerPedidio = () => {
  const comanda = new Comanda(menu);
  seleccionarPlatillo(comanda);

  const porcPropina = prompt(`% Propina por servicio: `);
  const propina = comanda.calcularPropina(parseInt(porcPropina));
  console.log(`**Ticket** \n SubTotal: ${comanda._SubTotal}, Propina: ${propina}, Total: ${comanda._SubTotal + propina} `);
}

hacerPedidio();
