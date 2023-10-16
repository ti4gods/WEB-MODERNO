function criarProduto(nome, preco, desconto = 5) {
    return {
        nome,
        preco,
        desconto,
        valorFinal: preco - desconto
    }
}

console.log(criarProduto('Penal', 20));
console.log(criarProduto('Mouse', 123.90));