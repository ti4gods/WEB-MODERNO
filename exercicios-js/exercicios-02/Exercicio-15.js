// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, 
// em que cada elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. 
// Observe os exemplos abaixo para um melhor entendimento:
//
// objetoParaArray({ nome: "Maria",
// profissao: "Desenvolvedora de software"
// }) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]

// objetoParaArray({ codigo: 11111,
// preco: 12000
// }) // irá retornar [["codigo", 11111], ["preco", 12000]]

// Opção 1

const objeto = {
    nome: 'Tiago',
    sobrenome: 'dos Santos',
    idade: 32,
    sexo: 'M'
}

function objetoParaArray1(objeto) {
    const arrayResultado = [];

    for (let chave in objeto) {
        arrayResultado.push([chave, objeto[chave]])
    }

    return arrayResultado
}

function objetoParaArray2(objeto) {
    const chaves = Object.keys(objeto)
    const resultado = chaves.map(chave => [chave, objeto[chave]])

    return resultado
}

console.log(objetoParaArray1(objeto))
console.log(objetoParaArray2(objeto))