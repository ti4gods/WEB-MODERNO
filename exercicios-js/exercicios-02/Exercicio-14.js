// Crie uma função que receba um array de elementos e retorne um array somente com os números
// presentes no array recebido como parâmetro.


// Opcao 1:
function filtrarNumeros1(arrayDeParametros) {
    let arrayResultado = [];

    for (let item of arrayDeParametros) {
        if (typeof item === 'number') {
            arrayResultado.push(item)
        }
    }

    return arrayResultado
} 

console.log(filtrarNumeros1(["Javascript", 1, "3", "Web", 20]))
console.log(filtrarNumeros1(["a", "c"]))

// Opcao 2:
function filtrarNumeros2(arrayDeParametros) {
   return arrayDeParametros.filter(item => 
        typeof item === 'number'
    )
} 

console.log(filtrarNumeros2(["Javascript", 1, "3", "Web", 20]))
console.log(filtrarNumeros2(["a", "c"]))

