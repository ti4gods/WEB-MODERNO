// Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
// possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está
// desenvolvendo no momento é a de somar o total das despesas.
// Crie uma função que receba um array de produtos e retorne o total das despesas.

const arrayObjeto1 = [{
    nome: "Jornal online", 
    categoria: "Informação", 
    preco: 89.99
},
{   nome: "Cinema", 
    categoria: "Entretenimento", 
    preco: 150}
]

const arrayObjeto2 = [{
    nome: "Galaxy S20", 
    categoria: "Eletrônicos", 
    preco: 3599.99
},
{   nome: "Macbook Pro", 
    categoria: "Eletrônicos", 
    preco: 30999.90}
]

function despesasTotais1(itens) {
    let total = 0;

    for (let item of itens)
        total += item.preco

    return total
}

console.log('Utilizando FOR -', despesasTotais1(arrayObjeto1)) // retornará 239.99
console.log('Utilizando FOR -', despesasTotais1(arrayObjeto2)) // retornará 34599.89

function despesasTotais2(itens) {
    return itens
        .map(item => item.preco)
            .reduce((acumulador, valorAtual) => acumulador + valorAtual)
}

console.log('Utilizando MAP e REDUCE -', despesasTotais2(arrayObjeto1)) // retornará 239.99
console.log('Utilizando MAP e REDUCE -',despesasTotais2(arrayObjeto2)) // retornará 34599.89

function despesasTotais3(itens) {
    return itens.reduce((acumulador, valorAtual) => 
        acumulador + valorAtual.preco, 0
    )
}

console.log('Utilizando REDUCE -', despesasTotais3(arrayObjeto1)) // retornará 239.99
console.log('Utilizando REDUCE -', despesasTotais3(arrayObjeto2)) // retornará 34599.89
