// Retorna o processamento de um array base, contendo a mesma quantidade
// de elementos do array base.
// Terá como parâmetro uma função callback, que pode receber até 3 parâmetros.
// valor atual, indice e/ou o próprio array completo

const numeros = [1, 2, 3, 4, 5]

let resultado = numeros.map(function(elemento) {
    return elemento * 2
})

console.log(resultado) //-> [ 2, 4, 6, 8, 10 ]

// A mesma função, porém escriva como arrow
let resultadoComArrow = numeros.map(elemento => elemento * 2)
console.log(resultadoComArrow)

// Utilizando o map de forma encadeada 

const soma10 = item => item + 10
const triplo = item => item * 3
const paraDinheiro = item => `R$ ${parseFloat(item).toFixed(2).replace('.', ',')}`

resultado = numeros.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado) //-> [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]