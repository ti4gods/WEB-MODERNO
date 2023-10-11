/**
 * Declarando uma função (sem retorno).
 */
function imprimirSoma(valor1, valor2) {
    console.log(valor1 + valor2);
}


// Exemplo de chamada da função:

imprimirSoma(2, 3);
//Resultado => 5

imprimirSoma(10)
//Resultado => Not a number

imprimirSoma(10,20,30,40)
//Resultado => 30 - Considera somente os 2 primeiro parâmetros, conforme declaração.

/**
 * Declarando uma função (com retorno)
 */
function soma(valor1, valor2 = 1) {
    return valor1 + valor2;
}

// Exemplo de chamada da função:

console.log(soma(2,3));
//Resultado => 5

console.log(soma(2))
//Resultado => 3 (levando em considerando que o segundo parâmetro não foi informado, então considerou o valor 1)
