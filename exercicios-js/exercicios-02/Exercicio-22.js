// Criar uma função que receba um array de números e retorne o menor número desse array.

function menorNumero(numeros) {
    let menor = numeros[0]

    for (let indice in numeros) {
        if (numeros[indice] < menor) {
            menor = numeros[indice]
        }
    }

    return menor
}

console.log(menorNumero([10, 5, 35, 65])) // 5
console.log(menorNumero([5, -15, 50, 3])) // -15

function menorNumero(numeros) {
    return numeros.reduce((anterior, atual) => 
        anterior < atual ? anterior : atual
    )
}

function menorNumero(numeros) {
    return Math.min(...numeros);
}
