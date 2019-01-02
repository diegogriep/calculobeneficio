class CalculoController {
  constructor() {
    let $ = document.querySelector.bind(document); //transforma queryselector em algo que possa ser usado em separado. manter associacao com document
    //bind = método que mantém associação com parametro passado

    this._inputDaysRemaining = $('#day');
    this._inputTicketRemaining = $('#ticket');
    this._inputCurrentDay = $('#currentDay');
    this._listaCalculos = new ListaCalculos();

    this._calculosView = new CalculosView($('#calculosView'));
    //this._calculosView.update(this._listaCalculos);
  }

  calculate(event) {
    event.preventDefault();

    //let data = new Date(this._inputCurrentDay.value.split('-')); //passar array para date
    //let data = new Date(this._inputCurrentDay.value.replace(/-/g, ',')); //trocar todos hifens por virgula
    //spread operator(...) - desmembra array e coloca na mesma posição/parametro do constructor
    //quando tem uma unica instrucao na arrow function, pode omitir o bloco

    this._listaCalculos.adiciona(this._criaCalculo());
    this._calculosView.update(this._criaCalculo());
    this._limpaFormulario();
    this._focoCampo();

    //this._result.innerHTML = calculo.result;
  }

  _criaCalculo() {
    return new Calculo(
      this._inputDaysRemaining.value,
      this._inputTicketRemaining.value,
      DateHelper.textoParaData(this._inputCurrentDay.value)
    );
  }

  _limpaFormulario() {
    this._inputDaysRemaining.value = 0;
    this._inputTicketRemaining.value = 0;
    this._inputCurrentDay.value = '';
  }

  _focoCampo() {
    this._inputDaysRemaining.focus();
  }
}
