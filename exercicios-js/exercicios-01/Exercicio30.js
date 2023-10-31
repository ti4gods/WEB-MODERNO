// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor

function definirValores(vetor) {
    let maiorValor = 0
    let menorValor = vetor[0]

    for (let indice = 0; indice < vetor.length; indice++) {

        if (vetor[indice] > maiorValor) {
            maiorValor = vetor[indice]
        } else if (vetor[indice] < menorValor) {
            menorValor = vetor[indice]
        }
    }

    return `O maior valor é ${maiorValor} e o menor valor é ${menorValor}`
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

console.log(definirValores(vetor))

