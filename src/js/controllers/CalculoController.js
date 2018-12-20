class CalculoController {
  constructor() {
    let $ = document.querySelector.bind(document); //transforma queryselector em algo que possa ser usado em separado. manter associacao com document
    //bind = método que mantém associação com parametro passado

    this._inputDaysRemaining = $('#day');
    this._inputTicketRemaining = $('#ticket');
    this._inputCurrentDay = $('#currentDay');
  }

  calculate(event) {
    event.preventDefault();

    //let data = new Date(this._inputCurrentDay.value.split('-')); //passar array para date
    //let data = new Date(this._inputCurrentDay.value.replace(/-/g, ',')); //trocar todos hifens por virgula
    //spread operator(...) - desmembra array e coloca na mesma posição/parametro do constructor
    //quando tem uma unica instrucao na arrow function, pode omitir o bloco

    let calculo = new Calculo(
      this._inputDaysRemaining.value,
      this._inputTicketRemaining.value,
      DateHelper.textoParaData(this._inputCurrentDay.value)
    );

    console.log(DateHelper.dataParaTexto(calculo.currentDay));
  }
}
