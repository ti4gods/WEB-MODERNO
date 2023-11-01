// Elabore uma função que receba um array de números 
// e retorne um array que tenha todos os números que são pares e que também tenham índices pares.

// Opcao 1
function receberSomenteOsParesDeIndicesPares1(arrayNumeros) {
    let arrayResultado = [];

    for (let indice = 0; indice < arrayNumeros.length; indice += 2) {
        const numeroPar = arrayNumeros[indice] % 2 === 0
        
        if (numeroPar)
            arrayResultado.push(arrayNumeros[indice])
    }

    return arrayResultado
}

console.log(receberSomenteOsParesDeIndicesPares1([1, 2, 3, 4])) // retornará []
console.log(receberSomenteOsParesDeIndicesPares1([10, 70, 22, 43])) // retornará [10, 22]

// Opcao 2
function receberSomenteOsParesDeIndicesPares2(numeros) {
    return numeros.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0
        const indicePar = indice % 2 === 0

        return numeroPar && indicePar
    })
}

console.log(receberSomenteOsParesDeIndicesPares2([1, 2, 3, 4])) // retornará []
console.log(receberSomenteOsParesDeIndicesPares2([10, 70, 22, 43])) // retornará [10, 22]
