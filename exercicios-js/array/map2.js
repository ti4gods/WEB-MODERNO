const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

console.log(carrinho)

// Retornar um array apenas com os preços

const precosCarrinho = carrinho.map(function(item) {
    const objeto = JSON.parse(item)
    const preco = objeto.preco
    return preco
})

console.log(precosCarrinho) //-> [ 3.45, 13.9, 41.22, 7.5 ]

//ou

const objeto = itemJson => JSON.parse(itemJson)
const preco = itemObjeto => itemObjeto.preco

const precosCarrinho2 = carrinho.map(objeto).map(preco)
console.log(precosCarrinho2) //-> [ 3.45, 13.9, 41.22, 7.5 ]