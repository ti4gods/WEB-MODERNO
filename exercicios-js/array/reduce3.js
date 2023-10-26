Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]

    for (let indice = indiceInicial; indice < this.length; indice++) {
        acumulador = callback(acumulador, this[indice], indice, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const numeros = [1, 2, 3, 4, 5, 6]
console.log(numeros.reduce(soma, 21)) //-> 21 //-> com indice inicial -> 42