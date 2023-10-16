const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// ForEach associado a função imprimir (callback)
fabricantes.forEach(imprimir);

fabricantes.forEach(function(fabricante) {
    console.log(fabricante);
})

//------------------------------------------------------------------------------

// Função anônima
fabricantes.forEach(function (nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
});

// Função arrow
fabricantes.forEach((nome, indice) => 
    console.log(`${indice + 1}. ${nome}`)
);