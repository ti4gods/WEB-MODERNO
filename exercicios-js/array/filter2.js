// Implementando o filter de acordo com o exemplo anterior
// Lembrando: conteúdo do item, indice do item e array completo, são os parâmetros.

Array.prototype.filter2 = function(funcaoCallback) {
    const novoArray = []

    for (let indice = 0; indice < this.length; indice++) {
        if (funcaoCallback(this[indice], indice, this)) {
            novoArray.push(this[indice])
        } 
    }
    return novoArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true  },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

/**
 * Filtrar produtos caros e que sejam frageis
 */
const produtoCaros = item => item.preco >= 500
const produtosFrageis = item => item.fragil

console.log(produtos.filter2(produtoCaros).filter2(produtosFrageis))