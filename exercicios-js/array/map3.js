// Implementando o map de acordo com o exemplo anterior
// Lembrando: conteúdo do item, indice do item e array completo, são os parâmetros.

Array.prototype.map2 = function(funcaoCallback) {
    const novoArray = []

    for (let indice = 0; indice < this.length; indice++) {
        novoArray.push(funcaoCallback(this[indice], indice, this))
    }
    return novoArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

console.log(carrinho)

// Retornar um array apenas com os preços
const objeto = itemJson => JSON.parse(itemJson)
const preco = itemObjeto => itemObjeto.preco

const precosCarrinho2 = carrinho.map2(objeto).map2(preco)
console.log(precosCarrinho2) //-> [ 3.45, 13.9, 41.22, 7.5 ]
