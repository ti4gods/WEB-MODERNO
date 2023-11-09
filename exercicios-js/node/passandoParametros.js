module.exports = function(...nomes) {
    return nomes.map(nome => `Boa semana ${nome}!`)
} 

// Invocação no mesmo módulo
// const saudacoes = module.exports('Ana', 'Lucas', 'João');
// console.log(saudacoes);
