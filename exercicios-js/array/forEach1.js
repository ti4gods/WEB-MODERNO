// Método que recebe uma função call back
// Parâmetros: nome, indice e array

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})
// 1) Agatha
// 2) Aldo
// 3) Daniel
// 4) Raquel

// Utilizando função arrow
aprovados.forEach(nome => console.log(nome))
// Agatha
// Aldo
// Daniel
// Raquel

const exibirAprovados = aprovado => console.log(aprovado)
console.log(exibirAprovados) //-> [Function: exibirAprovados]
aprovados.forEach(exibirAprovados) 
// Agatha
// Aldo
// Daniel
// Raquel