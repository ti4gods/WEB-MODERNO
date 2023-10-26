// Simulando a execução do forEch
//
// Baseado no código do exemplo anterior:
// const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
// aprovados.forEach(function(nome, indice) {
//     console.log(`${indice + 1}) ${nome}`)
// })
// // 1) Agatha
// // 2) Aldo
// // 3) Daniel
// // 4) Raquel

Array.prototype.forEach2 = function(funcaoCallback) {
    for (let indice = 0; indice < this.length; indice++) {
        funcaoCallback(this[indice], indice, this)   
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})



