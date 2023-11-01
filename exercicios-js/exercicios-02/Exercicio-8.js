// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero)
// e realize a multiplicação deles. Porém, não utilize o operador de multiplicação.

function multiplicar(valor1, valor2) {
    let resultado = 0

    for (let indice = 0; indice < valor2; indice++) {
        resultado += valor1
    }

    return resultado
}

console.log(multiplicar(5, 5)) // 25
console.log(multiplicar(0, 7)) // 0

// Segunda forma:

function multiplicar2(numero, multipicador) {
    if (numero === 0 || multipicador === 0) return 0 

    return multipicador === 1 ? numero : numero + multiplicar2(numero, multipicador-1)
}

console.log(multiplicar2(5, 5)) // 25
console.log(multiplicar2(0, 7)) // 0

