const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos)
console.log(todos) //-> [ 'Ualeskah', 'Cibalena', 'Uoxiton', 'Uesclei' ]

console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]])) //-> [ 'a', 'b', 1, 2, 3, 4, 5, [ 6, 7 ] ]