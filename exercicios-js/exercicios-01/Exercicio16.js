// 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
// numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
// 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.

function calculadora(valor1, operacao, valor2) {
    if (typeof valor1 === 'number' && typeof valor2 === 'number') {        
        switch (operacao) { 
            case '+':
                console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`)
                break
            case '-':
                console.log(`${valor1} - ${valor2} = ${valor1 - valor2}`)
                break
            case '*':
                console.log(`${valor1} * ${valor2} = ${valor1 * valor2}`)
                break
            case '/':
                if (valor2 === 0) {
                    console.log('Divisão por zero não é permitida!')
                } else {
                    console.log(`${valor1} / ${valor2} = ${valor1 / valor2}`)
                }
                
                break
            default:
                console.log('O tipo de operação informado deve ser +, -, * ou /')
        }        
    } else {
        console.log('Os valores informados precisam ser numéricos!')
    }
}

const mais = '+'
const menos = '-'
const multiplicado = '*'
const dividido = '/'

calculadora(10, mais, 10);
calculadora(10, menos, 10);
calculadora(10, multiplicado, 10);
calculadora(10, dividido, 10);
calculadora(10, dividido, 0);
calculadora(10, '', 10);
calculadora('a', '', 10);
