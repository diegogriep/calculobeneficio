class CalculosView {
  constructor(elemento) {
    this._elemento = elemento;
  }

  _template(model) {
    return `<h3>Resultado <span>${model.result}</span></h3>`;
  }

  update(model) {
    this._elemento.innerHTML =  this._template(model);
  }
}
