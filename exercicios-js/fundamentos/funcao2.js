/**
 * Armazenando uma função em uma variável (função anônima).
 */
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

/**
 * Armazenando uma função ARROW em uma variável
 */
const soma = (a, b) => {
    return a + b
}

console.log(soma(5, 10))

/**
 * Arrow funcion com retorno implicito (com apenas uma única linha)
 */
const substracao = (a, b) => a - b;

console.log(substracao(30,10))
