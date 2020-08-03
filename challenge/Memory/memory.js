const pasarela   = document.getElementById("pasarela");
const comillas   = document.getElementById("comillas");
const numeral    = document.getElementById("numeral");
const pesos      = document.getElementById("pesos");
const porcentaje = document.getElementById("porcentaje");
const abre       = document.getElementById("abre");
const cierra     = document.getElementById("cierra");
const diagonal   = document.getElementById("diagonal");
const ampersand  = document.getElementById("ampersand");
const btnEmpezar = document.getElementById("btnEmpezar");

class Memory {
  _characters = ['"', '#', '$', '%', '(', ')', '/', '&'];
  _secuencia = [];
  constructor(limite = 4) {
    this.limite = limite;
    this.inicializar = this.inicializar.bind(this);
    this.inicializar();
    this.generarMemory();
    setTimeout(this.comenzar(), 500);
  }

  inicializar() {
    this._seleccion = 0;
    this.mostrarMemory = this.mostrarMemory.bind(this);
    this.comenzar = this.comenzar.bind(this);
    this.elegirSigno = this.elegirSigno.bind(this);
    this.toggleBtnEmpezar();
    this.signos = {
      comillas,
      numeral,
      pesos,
      porcentaje,
      abre,
      cierra,
      diagonal,
      ampersand,
      btnEmpezar
    };
    pasarela.value = "";
  }

  toggleBtnEmpezar(){
    if(btnEmpezar.classList.contains('hide')){
      btnEmpezar.classList.remove('hide')
    } else {
      btnEmpezar.classList.add('hide')
    }
  }

  comenzar() {
    this.mostrarMemory();
    this.agregarEvento();
  }

  agregarEvento() {
    Object.keys(this.signos).forEach(signo => {
      this.signos[signo].addEventListener('click', this.elegirSigno);
    });
  }

  quitarEvento() {
    Object.keys(this.signos).forEach(signo => {
      this.signos[signo].removeEventListener('click', this.elegirSigno);
    });
  }

  generarMemory() {
    do {
      const limit = this._characters.length;
      const random = Math.floor(Math.random() * limit);
      const char = this._characters[random];
      
      if(this._secuencia.indexOf(char) === -1) {
        this._secuencia.push(char);
      }
    
    } while(this._secuencia.length < this.limite);
  }

  mostrarMemory() {
    for(let i = 0; i < this._secuencia.length + 1; i++){
      setTimeout(() => {
        pasarela.value = this._secuencia[i] || "";
      }, 500 * i);
    }
  }
  
  elegirSigno(e) {
    const { signo } = e.target.dataset;
    pasarela.value = signo;
    if(signo === this._secuencia[this._seleccion]){
      this._seleccion++;

      if(this._seleccion === this._secuencia.length){
        this.quitarEvento();
        this.ganoElJuego();
      }
    } else {
      this.perdioElJuego();
    }
  }

  ganoElJuego(){
    swal('Coding Challenge','Felicidades has ganado', 'success')
      .then(this.inicializar);
  }
  perdioElJuego(){
    swal('Coding Challenge',`Lo sentimos has perdido el juego`, 'error')
      .then(() => {
        this.quitarEvento();
        this.inicializar();
      });
  }
}

function empezar() {
  window.memory = new Memory();
}