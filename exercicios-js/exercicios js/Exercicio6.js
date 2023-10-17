// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

const valorInicial = 75000; 
const taxaDeJuros = 0.90; 
const tempoAplicado = 1; 

function calcularJurosSimples(valorInicial, taxaDeJuros, tempoAplicado) {
    const valor = valorInicial * (1 + (taxaDeJuros / 100) * tempoAplicado);    
    console.log(`O valor inicialmente aplicado de R$${valorInicial.toFixed(2)} com taxa de juros de ${taxaDeJuros}% aplicado em ${tempoAplicado} anos rendeu R$${(valor - valorInicial).toFixed(2)}`); 
}

calcularJurosSimples(valorInicial, taxaDeJuros, tempoAplicado);

function calcularJurosCompostos(valorInicial, taxaDeJuros, tempoAplicado) {
  const valor = valorInicial * Math.pow(1 + taxaDeJuros, tempoAplicado);
  const rendimento = valor - valorInicial;
  
  console.log(`O valor inicialmente aplicado de R$${valorInicial.toFixed(2)} com taxa de juros de ${taxaDeJuros}% aplicado em ${tempoAplicado} anos rendeu R$${rendimento.toFixed(2)}`);
  console.log(`O Valor total após ${tempoAplicado} anos: R$${valor.toFixed(2)}`);
}

calcularJurosCompostos(valorInicial, taxaDeJuros, tempoAplicado);




