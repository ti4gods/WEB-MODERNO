const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Retorna todas as chaves definidas no objeto
console.log(Object.keys(pessoa)) // Ex.: [ 'nome', 'idade', 'peso' ]

// Retorna todos os valores definidos no objeto
console.log(Object.values(pessoa)) // Ex.: [ 'Rebeca', 2, 13 ]

// Retorna os atributos do objeto em forma de array contendo 2 elementos cada
console.log(Object.entries(pessoa)) // Ex.: [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]

Object.entries(pessoa).forEach(elemento => {
    console.log(`${elemento[0]}: ${elemento[1]}`) //-> Printando os elementos do array
})

// Utilizando o operador destructuring, definido os atributos chave e valor (extrai valores de objetos e arrays)
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`) //-> Printando os elementos do array
})

// Permite definir ou modificar as propriedades de um objeto de forma controlada.
// Serve para tornar uma propriedade somente leitura, definir um valor padrão, definir métodos de acesso (getters),etc
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2023'
})

pessoa.dataNascimento = '01/01/2029'
console.log(pessoa) //-> { nome: 'Rebeca', idade: 2, peso: 13, dataNascimento: '01/01/2023' }

console.log(Object.keys(pessoa)) //-> [ 'nome', 'idade', 'peso', 'dataNascimento' ]

// Serve para sobrepor o conteúdo de diferentes objetos em uma variável destino
const destino = { a: 1 }
const objeto1 = { b: 2 }
const objeto2 = { c: 3, a: 4 }
const objeto = Object.assign(destino, objeto1, objeto2)
console.log(objeto) //-> { a: 4, b: 2, c: 3 }

