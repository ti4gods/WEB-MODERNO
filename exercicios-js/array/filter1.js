// Filtra um array e retorna um novo array com os itens filtrados
// Terá como parâmetro uma função callback, que pode receber até 3 parâmetros.
// valor atual, indice e/ou o próprio array completo

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true  },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(item) {
    return item.preco < 50
}))

/**
 * Filtrar produtos caros e que sejam frageis
 */
const produtoCaros = item => item.preco >= 500
const produtosFrageis = item => item.fragil

const teste = produtos.filter(produtoCaros).filter(produtosFrageis)
console.log(teste)
// [
//   { nome: 'Notebook', preco: 2499, fragil: true },
//   { nome: 'Ipad Pro', preco: 4199, fragil: true }
// ]