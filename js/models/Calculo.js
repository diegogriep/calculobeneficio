class Calculo {
  constructor(daysRemaining, ticketRemaining, currentDay) {
    this._daysRemaining = daysRemaining;
    this._currentDay = new Date(currentDay.getTime());
    this._ticketRemaining = ticketRemaining; //prefixo underline para indicar que é privado e acessar via método

    Object.freeze(this); //variavel implicita -> é shalow, é raso, não entra nas propriedades dos objetos
    //Para contornar isso é necessário fazer uma cópia do objeto (chama programacao defensiva)
    //exemplo ver a questão do new Date()
  }

  //let = variavel com escopo de bloco (só existe no bloco onde foram declaráveis)

  //get = propriedade getter de leitura
  get result() {
    return this._ticketRemaining / this._daysRemaining;
  }

  //métodos acessadores - somente eles podem acessar os atributos privados (com underline)
  get daysRemaining() {
    return this._daysRemaining;
  }

  get ticketRemaining() {
    return this._ticketRemaining;
  }

  get currentDay() {
    return new Date(this._currentDay.getTime());
  }
}
