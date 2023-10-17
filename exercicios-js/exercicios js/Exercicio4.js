// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

function executarDivisao(dividendo, divisor) {
    if (divisor > 0) {
        resultadoDaDivisao = dividendo / divisor;
        resultadoRestoDaDivisao = dividendo % divisor; 

        console.log(`Resultado da divisão: ${resultadoDaDivisao}`);
        console.log(`Sobra da divisão: ${resultadoRestoDaDivisao}`);
    } else {
        console.log('Divisão por zero não é permitida!');
    }    
}

executarDivisao(10, 20);