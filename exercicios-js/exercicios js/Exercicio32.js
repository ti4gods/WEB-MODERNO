// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function calcularMediaAritmetica(vetor) {
    let somaDosElementos = 0

    for (let indice = 0; indice < vetor.length; indice++) {
        somaDosElementos += vetor[indice]
    }

    return somaDosElementos / vetor.length
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

console.log(calcularMediaAritmetica(vetor))
