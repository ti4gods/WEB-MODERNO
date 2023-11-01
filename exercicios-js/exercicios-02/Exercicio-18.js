// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array

function somarNumeros1(numeros) {
    let somatorio = 0;

    for (let indice = 0; indice < numeros.length; indice++) {
        somatorio += numeros[indice]
    }

    return somatorio;
}


console.log('opção 1 - FOR) ', somarNumeros1([10, 10, 10])) // retornará 30
console.log('opção 1 - FOR) ', somarNumeros1([15, 15, 15, 15])) // retornará 60

function somarNumeros2(numeros) {
    const quantidadeDeNumeros = numeros.length

    return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + somarNumeros2(numeros.slice(1))
}

console.log('opção 2 - RECURSIVIDADE) ', somarNumeros2([10, 10, 10])) // retornará 30
console.log('opção 2 - RECURSIVIDADE) ', somarNumeros2([15, 15, 15, 15])) // retornará 60

function somarNumeros3(numeros) {
    let soma = 0

    numeros.forEach(numero => soma += numero)

    return soma
}

console.log('opção 3 - FOREACH) ', somarNumeros3([10, 10, 10])) // retornará 30
console.log('opção 3 - FOREACH) ', somarNumeros3([15, 15, 15, 15])) // retornará 60

function somarNumeros4(numeros) {
    const soma = numeros.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual, 0)

    return soma
}

console.log('opção 4 - REDUCE) ', somarNumeros4([10, 10, 10])) // retornará 30
console.log('opção 4 - REDUCE) ', somarNumeros4([15, 15, 15, 15])) // retornará 60


