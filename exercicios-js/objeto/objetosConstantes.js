// pessoa -> 123 -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// Vai gerar o erro "TypeError: Assignment to constant variable."
// pessoa = {nome: 'Ana'}
// console.log(pessoa)

//Congela a alteração do conteúdo dos atributos do objeto
Object.freeze(pessoa)

pessoa.nome = 'Maria'
Object.freeze(pessoa) //-> { nome: 'Pedro' }

// Criando o objeto desabilitado para alterações
const pessoaConstante = Object.freeze({nome: 'João'})
console.log(pessoaConstante);

