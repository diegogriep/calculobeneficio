class DateHelper {
  constructor() {
    throw new Error('Essa classe não pode ser instanciada.');
  }

  static dataParaTexto(data) { //usa-se static para acessar sem criar instância
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }

  static textoParaData(texto) {
    if (!/\d{4}-\d{2}-\d{2}/.test(texto))
      throw new Error('Deve estar no formato aaaa-mm-dd.');

    return new Date(...
      texto
        .split('-')
        .map((item, indice) => item - indice % 2)
    );
  }
}
