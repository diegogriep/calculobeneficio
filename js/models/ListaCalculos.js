class ListaCalculos {
  constructor() {
    this._calculos = [];
  }

  adiciona(calculo) {
    this._calculos.push(calculo);
  }

  get calculos() {
    return [].concat(this._calculos); //o [] cria uma cópia e não muda a lista original
  }
}
