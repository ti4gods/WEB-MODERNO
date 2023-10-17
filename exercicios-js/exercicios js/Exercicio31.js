// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

function contarNumerosNegativos(vetor) {
    let quantidadeNumerosNegativos = 0

    for (let indice = 0; indice < vetor.length; indice++) {
        if (vetor[indice] < 0) {
            quantidadeNumerosNegativos++
        }
    } 

    return `Foram contabilizados ${quantidadeNumerosNegativos} números negativos`
}

vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(contarNumerosNegativos(vetor))