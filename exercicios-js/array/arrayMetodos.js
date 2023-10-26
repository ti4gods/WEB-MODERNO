const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// Exclui o último elemento do array
pilotos.pop() 
console.log(pilotos) //-> [ 'Vettel', 'Alonso', 'Raikkonen' ]

// Adiciona um elemento no array (por último)
pilotos.push('Verstappen')
console.log(pilotos) //-> [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

// Exclui o primeiro elemento do array
pilotos.shift()
console.log(pilotos) //-> [ 'Alonso', 'Raikkonen', 'Verstappen' ]

// Adiciona um elemento no array (na indice 0)
pilotos.unshift('Hamilton')
console.log(pilotos) //-> [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]

// Adicionar e remover elementos
pilotos.splice(2, 0, 'Bottas', 'Massa') 
console.log(pilotos) //-> [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]

// Remover elementos
pilotos.splice(3, 1) 
console.log(pilotos) //-> [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

// Retorna um novo array
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos) //-> [ 'Bottas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos2 = pilotos.slice(1, 4) 
console.log(algunsPilotos2) //-> [ 'Alonso', 'Bottas', 'Raikkonen' ]
