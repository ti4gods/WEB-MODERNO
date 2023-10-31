// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares

function paresImpares(vetorNumeros) {
    let quantidadePares = 0
    let quantidadeImpares = 0

    for (let indice = 0; indice < vetorNumeros.length; indice++) {
        if (vetorNumeros[indice] % 2 == 0) {
            quantidadePares++
        } else {
            quantidadeImpares++
        }
    }
    console.log(`${quantidadePares} números pares e ${quantidadeImpares} números ímpares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

paresImpares(vetor)