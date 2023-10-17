// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores

function calculadora(valor1, valor2) {
    console.log(`Soma.........: ${valor1} + ${valor2} = ${valor1 + valor2}`);
    console.log(`Subtração....: ${valor1} - ${valor2} = ${valor1 - valor2}`);
    console.log(`Multiplicação: ${valor1} * ${valor2} = ${valor1 * valor2}`);
    console.log(`Divisão......: ${valor1} / ${valor2} = ${valor1 / valor2}`);
}

calculadora(16, 64);

// function calculadora(valor1, valor2) {
//   const operacoes = {
//     'Soma.........': valor1 + valor2,
//     'Subtração....': valor1 - valor2,
//     'Multiplicação': valor1 * valor2,
//     'Divisão......': valor2 !== 0 ? valor1 / valor2 : 'Divisão por zero não é permitida',
//   };

//   for (const operacao in operacoes) {
//     console.log(`${operacao}: ${valor1} ${operacao === 'Divisão' ? '/' : '-'} ${valor2} = ${operacoes[operacao]}`);
//   }
// }

// calculadora(16, 64);
